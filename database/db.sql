--connect mysql
mysql -u root -p

-- creating database
CREATE DATABASE todolistnode;

--using db
USE todolistnode;

--creating a table
CREATE TABLE IF NOT EXISTS todolist (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
task VARCHAR(500) NOT NULL,
client VARCHAR(50) NOT NULL,
completed INT(1)) DEFAULT(0) NOT NULL;

--to show tables
SHOW TABLES;

--describe the table
describe todolist;

--if doesnt connect
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' //put real password
flush privileges;