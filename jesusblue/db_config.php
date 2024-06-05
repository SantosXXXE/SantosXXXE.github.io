<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

// 配置邮件和SMTP设置
$mail = new PHPMailer(true);

try {
    // SMTP服务器配置
    $mail->isSMTP();
    $mail->Host = 'smtp.qq.com';
    $mail->SMTPAuth = true;
    $mail->Username = '1738897842@qq.com';
    $mail->Password = 'hrichnqzktdhdidd';
    $mail->SMTPSecure = 'ssl'; // QQ邮箱使用ssl
    $mail->Port = 465; // QQ邮箱SMTP端口为465或587

    // 设置邮件内容
    $mail->setFrom('noreply@example.com', 'YourAppName');
    $mail->addAddress($email, $username);
    $mail->isHTML(true);
    $mail->Subject = 'Email Verification';

    // 假设您已经在之前的逻辑中生成了token并保存在数据库中
    $verificationUrl = "http://yourwebsite.com/verify.php?token=" . urlencode($token);
    $mail->Body    = "您好 {$username},<br>请点击下面的链接来验证您的邮箱注册邮箱: <a href='$verificationUrl'>$verificationUrl</a>";

    // 发送邮件
    $mail->send();
    echo '已发送邮件到您的邮箱，请检查您的邮箱以完成验证。';
} catch (Exception $e) {
    // 记录或者以其他方式通知错误
    error_log("邮件发送错误: {$mail->ErrorInfo}");
    echo "邮件发送错误，请稍后重试。";
}