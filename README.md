ExpressJs: 4.18.2
nodemon server 3.1.10

* SQL
create database ecommerce_db;

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  username VARCHAR(50) UNIQUE,
  email VARCHAR(100) UNIQUE,
  role VARCHAR(20),
  status VARCHAR(20),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

* data
INSERT INTO Users (name, username, email, role, status)
VALUES
('Alice Johnson', 'alicej', 'alice@example.com', 'admin', 'active'),
('Bob Smith', 'bobsmith', 'bob@example.com', 'user', 'active'),
('Charlie Brown', 'charlieb', 'charlie@example.com', 'user', 'inactive'),
('David Williams', 'davidw', 'david@example.com', 'moderator', 'active'),
('Evelyn Clark', 'evelync', 'evelyn@example.com', 'user', 'active'),
('Frank Martin', 'frankm', 'frank@example.com', 'user', 'active'),
('Grace Hall', 'graceh', 'grace@example.com', 'user', 'active'),
('Henry Adams', 'henrya', 'henry@example.com', 'user', 'inactive'),
('Isabella Moore', 'isabellam', 'isabella@example.com', 'admin', 'active'),
('Jack Lee', 'jackl', 'jack@example.com', 'user', 'active'),
('Kathy Scott', 'kathys', 'kathy@example.com', 'moderator', 'active'),
('Liam Davis', 'liamd', 'liam@example.com', 'user', 'active'),
('Mia Lewis', 'mial', 'mia@example.com', 'user', 'inactive'),
('Noah Young', 'noahy', 'noah@example.com', 'user', 'active'),
('Olivia Allen', 'oliviaa', 'olivia@example.com', 'admin', 'active'),
('Paul Walker', 'paulw', 'paul@example.com', 'user', 'active'),
('Quinn Turner', 'quinnt', 'quinn@example.com', 'user', 'active'),
('Ryan Campbell', 'ryanc', 'ryan@example.com', 'user', 'inactive'),
('Sophia Rivera', 'sophiar', 'sophia@example.com', 'user', 'active'),
('Thomas Hill', 'thomash', 'thomas@example.com', 'moderator', 'active'),
('Uma Nelson', 'uman', 'uma@example.com', 'user', 'active'),
('Victor Green', 'victorg', 'victor@example.com', 'user', 'inactive'),
('Wendy Baker', 'wendyb', 'wendy@example.com', 'admin', 'active'),
('Xander Price', 'xanderp', 'xander@example.com', 'user', 'active'),
('Yara Collins', 'yarac', 'yara@example.com', 'user', 'active'),
('Zach Wood', 'zachw', 'zach@example.com', 'moderator', 'active'),
('Amy Bell', 'amyb', 'amy@example.com', 'user', 'active'),
('Brian Stone', 'brians', 'brian@example.com', 'user', 'inactive'),
('Chloe Grant', 'chloeg', 'chloe@example.com', 'user', 'active'),
('Dylan Cox', 'dylanc', 'dylan@example.com', 'user', 'active');

// .env
DB_USER=root
DB_PASS=12345
DB_NAME=ecommerce_db
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=ab3cf7d8cda1c86cbb891cfcb2ef4cd48a2f278b1607390bde418e3d192dbd0c6853dbbe8fcf169e1265f4ae3693eec8b40485988a321d4b6aa104e7e1b1216d  