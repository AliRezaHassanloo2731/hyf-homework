
DROP TABLE table_name;
--LAST_INSERT_ID() 
CREATE TABLE `sudents` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT
 CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 -----------------------
 CREATE TABLE course(
  course_id INT AUTO_INCREMENT,
  course_name VARCHAR(40) NOT NULL,
  teacher VARCHAR(40) NOT NULL,
  description VARCHAR(100) NOT NULL,
  PRIMARY KEY (`course_id`)
)ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT
 CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
 -------------------------
 CREATE TABLE score (
    score_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    score DECIMAL(5, 2),
    FOREIGN KEY (student_id) REFERENCES sudents(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);
------------------
ALTER TABLE sudents ADD COLUMN phone VARCHAR(15);
--Get all the tasks assigned to Pavel;
SELECT * from task INNER JOIN user ON user.name LIKE ('pavel%')
--Find how many tasks each user is responsible for;
SELECT user_id,  COUNT(task_id) AS task_count
 FROM user_task
 GROUP BY user_id;
--Find how many tasks with a status=Done each user is responsible for;