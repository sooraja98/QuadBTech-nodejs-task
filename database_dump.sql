-- Create the users table
CREATE TABLE QuadB.Users (
    user_id UUID PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255) UNIQUE,
    user_password VARCHAR(255),
    user_image VARCHAR(255),
    total_orders INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_logged_in TIMESTAMP
);

INSERT INTO QuadB.Users (user_id, user_name, user_email, user_password, user_image, total_orders, created_at, last_logged_in)
VALUES
    (UUID(), 'User1', 'user1@example.com', 'password1', 'image1.jpg', 5, '2023-09-01 12:00:00', '2023-09-15 08:30:00'),
    (UUID(), 'User2', 'user2@example.com', 'password2', 'image2.jpg', 3, '2023-09-02 13:00:00', '2023-09-16 09:45:00'),
    (UUID(), 'User3', 'user3@example.com', 'password3', 'image3.jpg', 7, '2023-09-03 14:00:00', '2023-09-17 10:15:00'),
    (UUID(), 'User4', 'user4@example.com', 'password4', 'image4.jpg', 2, '2023-09-04 15:00:00', '2023-09-18 11:30:00'),
    (UUID(), 'User5', 'user5@example.com', 'password5', 'image5.jpg', 9, '2023-09-05 16:00:00', '2023-09-19 12:45:00'),
    (UUID(), 'User6', 'user6@example.com', 'password6', 'image6.jpg', 4, '2023-09-06 17:00:00', '2023-09-20 13:15:00'),
    (UUID(), 'User7', 'user7@example.com', 'password7', 'image7.jpg', 6, '2023-09-07 18:00:00', '2023-09-21 14:30:00'),
    (UUID(), 'User8', 'user8@example.com', 'password8', 'image8.jpg', 8, '2023-09-08 19:00:00', '2023-09-22 15:45:00'),
    (UUID(), 'User9', 'user9@example.com', 'password9', 'image9.jpg', 1, '2023-09-09 20:00:00', '2023-09-23 16:00:00'),
    (UUID(), 'User10', 'user10@example.com', 'password10', 'image10.jpg', 10, '2023-09-10 21:00:00', '2023-09-24 17:15:00');