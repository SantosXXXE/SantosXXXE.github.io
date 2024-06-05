CREATE DATABASE IF NOT EXISTS jesusblue DEFAULT CHARSET = utf8mb4;

USE jesusblue;

CREATE TABLE IF NOT EXISTS `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password_hash` char(100) NOT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `last_login` timestamp NULL DEFAULT NULL,
    `role` enum('user', 'admin', 'moderator') NOT NULL DEFAULT 'user',
    `email` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`),
    UNIQUE KEY `idx_username` (`username`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

COMMIT;