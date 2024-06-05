<?php
// 用户输入的用户名、邮箱、密码和确认密码
$username = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$confirmPassword = $_POST['confirm_password'] ?? '';

// 创建数据库连接
$conn = new mysqli('localhost', 'root', '123456', 'jesusblue');

// 检查连接是否成功
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 检查用户名和邮箱是否唯一
$stmt = $conn->prepare("SELECT username, email FROM users WHERE username = ? OR email = ?");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    // 如果找到现有的用户名或邮箱，则注册失败
    echo "用户名或邮箱已存在，请选择其他用户名或邮箱！";
    echo "<script>setTimeout(function() { window.location.href = 'register.html'; }, 2000);</script>"; 
    exit();
} else {
    if ($password === $confirmPassword) {
        // 检查邮箱格式是否正确
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "无效的邮箱格式！";
            echo "<script>setTimeout(function() { window.location.href = 'register.html'; }, 2000);</script>"; 
            exit();
        }

        // 继续密码处理和注册逻辑...
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashedPassword);

        if ($stmt->execute()) {
            echo "注册成功！";
            echo "<script>setTimeout(function() { window.location.href = 'login.html'; }, 2000);</script>"; 
            exit();
        } else {
            echo "注册失败：" . $conn->error;
            echo "<script>setTimeout(function() { window.location.href = 'register.html'; }, 2000);</script>"; 
            exit(); 
        }
    } else {
        echo "两次输入的密码不一致！";
        echo "<script>setTimeout(function() { window.location.href = 'register.html'; }, 2000);</script>"; 
        exit(); 
    }
}

// 关闭数据库连接和语句
$stmt->close();
$conn->close();