<?php
session_start();  // 开始会话

// 检查用户是否登录
if (!isset($_SESSION['username'])) {
    // 用户未登录，重定向到登录页面login.php
    header('Location: login.html');
    exit();
} else {
    $username = $_SESSION['username'];  // 从会话中获取用户名
}

// 页面内容
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>欢迎页面</title>
</head>
<body>
    <h1>欢迎, <?= htmlspecialchars($username) ?>!</h1> <!-- 输出用户名 -->
    <p>你已经成功登录到网站。</p>
    
    <!-- 提供退出链接 -->
    <p><a href="logout.php">退出登录</a></p>
</body>
</html>