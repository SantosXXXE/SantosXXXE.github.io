<?php
// 用户输入的用户名和密码
$username = $_POST['username'];
$userPassword = $_POST['password']; // 用户提供的密码

// 创建数据库连接
$conn = new mysqli('localhost', 'root', '123456', 'jesusblue');

// 检查连接是否成功
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 准备SQL查询并绑定变量，包括 last_login 字段
$stmt = $conn->prepare("SELECT password_hash, last_login FROM users WHERE username = ?");
$stmt->bind_param("s", $username);

// 执行准备语句
$stmt->execute();
$result = $stmt->get_result();

// 检查用户名是否存在并且密码是否正确
if ($result->num_rows > 0) {
    // 获取查询结果
    $row = $result->fetch_assoc();
    
    // 从数据库获取的哈希密码
    $hashedPasswordFromDB = $row['password_hash'];
    $lastLogin = $row['last_login']; // 获取 last_login 字段的值

    // 对用户输入的密码进行哈希处理与数据库中的哈希值进行比较
    if (password_verify($userPassword, $hashedPasswordFromDB)) {
        session_start();  // 开始会话
        $_SESSION['username'] = $username;  // 设置会话变量

        // 更新 last_login 为当前时间
        $now = date('Y-m-d H:i:s');
        $updateStmt = $conn->prepare("UPDATE users SET last_login = ? WHERE username = ?");
        $updateStmt->bind_param("ss", $now, $username);
        $updateStmt->execute();


        header("Location: index.php");  // 重定向到索引页面
        exit();
    } else {
        // 错误消息处理（密码错误处理）
        echo "密码错误！";
    }
} else {
    // 错误消息处理（用户名不存在处理）
    echo "用户名不存在！";
}

// 关闭数据库连接和语句
$stmt->close();
if (isset($updateStmt)) {
    $updateStmt->close();
}
$conn->close();