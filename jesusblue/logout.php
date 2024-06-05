<?php
session_start();  // 开始会话

// 销毁会话
$_SESSION = array();  // 清空会话数组

// 销毁会话 cookie
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(), 
        '', 
        time() - 42000, 
        $params['path'],
        $params['domain'],
        $params['secure'],
        $params['httponly']
    );
}

// 重定向到登录页面
header('Location: login.html');
exit();