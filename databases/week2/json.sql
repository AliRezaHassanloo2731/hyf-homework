--json table

 CREATE TABLE `news` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text
) ENGINE=InnoDB 
 CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

 CREATE TABLE authors(
    id  int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40)
 ) ENGINE=InnoDB 
 CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

 CREATE TABLE tags(
   id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40)
 )
 ENGINE=InnoDB 
 CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 INSERT INTO tags (name) VALUES ('“science”'),('“clickbait”'), ('“breaking”'),('“weather”'), ('“winter”');

 CREATE TABLE authors_tags(
   `author_id` int  NOT NULL ,
   `tag_id` int  NOT NULL ,
    FOREIGN KEY (`author_id`) REFERENCES authors(id),
   FOREIGN KEY (`tag_id`) REFERENCES tags(id)
 )
 ENGINE=InnoDB 
 CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

 INSERT INTO authors_tags (author_id,tag_id) VALUES (1,1),(1,3),(2,4),(2,5),(3,2),(3,3);

 INSERT INTO authors(name) VALUES("James Smith"),
 ("Jane Jones"),("Aliya Awad"),("Igor Vladimir"),("Kim Jensen");
 INSERT INTO news(title,content)
 VALUES("BREAKING NEWS: Water is wet!","BREAKING NEWS: Water is wet!"),
 ("Heavy Snowfall Expected this Weekend","Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
 ( "BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!","Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ");
  
CREATE TABLE news_authors
(
    news_id INT,
    authors_id INT,
    Foreign Key ( news_id) REFERENCES news(id),
    Foreign Key ( authors_id) REFERENCES authors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO news_authors (news_id,authors_id) VALUES (1,1),(1,2),(2,3),(2,4),(3,2),(3,5);

SELECT news.id, tags.name from news join tags ON news.id= tags.id;