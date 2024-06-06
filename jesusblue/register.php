<?php
// 用户输入的用户名、密码和确认密码
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$confirmPassword = $_POST['confirm_password'] ?? '';

// 创建数据库连接
$conn = new mysqli('localhost', 'root', '123456', 'jesusblue');

// 检查连接是否成功
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 检查用户名是否唯一
$stmt = $conn->prepare("SELECT username FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo "用户名已存在，请选择其他用户名！";
    echo "<script>setTimeout(function() { window.location.href = 'register.html'; }, 2000);</script>"; 
    exit();
} else {
    if ($password === $confirmPassword) {

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        $stmt = $conn->prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $hashedPassword);
        

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
$stmt->close();
$conn->close();