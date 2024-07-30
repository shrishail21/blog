CREATE TABLE user (id int PRIMARY KEY AUTO_INCREMENT,full_name VARCHAR(50),email VARCHAR(50),password VARCHAR(100),phone_no VARCHAR(10), created_time    DATETIME default CURRENT_TIMESTAMP);


INSERT into user (full_name,password,email,phone_no) value('shrishail kiran bhagat','shri2112','shrishailbhagat21@gmail.com','9075507732');

ALTER TABLE table_name ADD column_name datatype;
