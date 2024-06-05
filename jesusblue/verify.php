<?php
// 从 URL 获取令牌
$token = $_GET['token'] ?? '';

// 在数据库中查找令牌，并验证用户
// ...

if (验证成功) {
    // 标记用户的电子邮件为已验证
    // ...
    echo "您的电子邮件地址已验证成功！";
    header('Location: login.html'); // 重定向到登录页面或其他适当页面
} else {
    echo "验证失败或令牌无效。";
    header('Location: register.html'); // 提供重新发送验证邮件的选项
}