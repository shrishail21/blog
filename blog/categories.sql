CREATE TABLE categories(id int PRIMARY KEY AUTO_INCREMENT,title VARCHAR(100),description VARCHAR(200));

INSERT INTO categories (title,description) VALUES('Tech blog','Here you get the news about the tech world');

ALTER TABLE categories MODIFY COLUMN title VARCHAR(100);
ALTER TABLE categories MODIFY COLUMN description VARCHAR(200);


INSERT INTO categories (title,description) VALUES('Sport blog','Here you get the news about the sport world');
