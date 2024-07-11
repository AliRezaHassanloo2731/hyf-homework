--Add a task with these attributes: title, description,
-- created, updated, due_date, status_id, user_id
 insert INTO task (title,description, created, 
    updated, due_date, status_id, user_id);
--Change the title of a task
update mydb.task set title='do homework' where id=7;

--Change a task due date
update mydb.task set due_date='2024-07-10 20:16:15' where id =3;
--Change a task status
update mydb.task set status_id='1' where title='do homework';
--Mark a task as complete
UPDATE mydb.task set status_id='3' WHERE title='do homework';
--Delete a task
DELETE FROM mydb.task WHERE title='do homework';

--part 2 School database
drop database school;
CREATE DATABASE School;
USE School;
CREATE TABLE `class` (
  `class_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `being` DATE NOT NULL,
  `ends` DATE NOT NULL,
  PRIMARY KEY (`class_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `student` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` INT NOT NULL,
  `class_id` INT NOT NULL,
  PRIMARY KEY (`student_id`),
  CONSTRAINT `class_id`
    FOREIGN KEY (`class_id`)
    REFERENCES`class` (`class_id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

--Create an index on the name column of the student table.
CREATE INDEX index_name ON student (name);
--Add a new column to the class table named status
-- which can only have the following 
--values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE student ADD COLUMN status 
ENUM('not-started','ongoing','finished')

--Part 3: More queries
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT * FROM task INNER JOIN user ON email LIKE '%spotify.com';
--Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT * FROM task INNER join user on `user`.name ='Donald Duck' AND status_id='1' ;
--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT * FROM task INNER JOIN user ON `user`.name='Maryrose Meadows' AND MONTH(created)='09';
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    MONTH(created) AS month,
    COUNT(*) AS task_num FROM  task GROUP BY  month;
   -- otherWay:
   SELECT 
    DATE_FORMAT(created, '%m') AS month,
    COUNT(*) AS task_count FROM  task GROUP BY  month;

    --home work 4
    CREATE Table customer(
    id INT AUTO_INCREMENT PRIMARY KEY,
    First_name VARCHAR(50),
    Last_name VARCHAR(50),
    Email VARCHAR(100),
    Phone VARCHAR(15),
    Address VARCHAR(255)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE Products (
    Product_id INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100),
    Price DECIMAL(10, 2)
)ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE orders(
      Order_id INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATETIME,
    TotalPrice DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customer(id)
)ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE OrderDetails (
    OrderDetail_id INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY ( OrderID) REFERENCES Orders( Order_id),
    FOREIGN KEY ( ProductID) REFERENCES Products( Product_id)
)ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;