-- Active: 1719914052416@@0.0.0.0@3307@sales

-- 1. Find out how many tasks are in the task table

SELECT COUNT (*) FROM task

-- 2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(due_date) FROM task

-- 3. Find all the tasks that are marked as done
SELECT status.name, task.title FROM (task INNER JOIN status ON status.name='done' )

-- 4. Find all the tasks that are not marked as done
SELECT user.name , status.name from (user inner join status) WHERE status.name !='done'
 
 --5. Get all the tasks, sorted with the most recently created first
SELECT * from task ORDER BY created DESC

-- 6. Get the single most recently created task
SELECT * from task ORDER BY created DESC LIMIT 1
-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title,due_date from task WHERE task.title !='null' AND task.description !='null'
-- 8.Get the title and status (as text) of all tasks
SELECT title, name
FROM task
JOIN status ON task.status_id = status.id;
-- 9. Get the name of each status, along with a count of how many tasks have that status
SELECT name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON task.status_id = status.id
GROUP BY name;
-- 10. Get the names of all statuses, sorted by the status with most tasks first
SELECT name, COUNT(task.id) AS task_count
FROM status
LEFT JOIN task ON task.status_id = status.id
GROUP BY name
ORDER BY task_count DESC;
/*  To eliminate repeating groups and ensure that each field contains only atomic (indivisible) values and that each record is unique, you need to normalize the database to at least the First Normal Form (1NF). Here's a step-by-step guide to achieve this:

Step 1: Ensure Each Field Contains Only Atomic Values
Identify repeating groups: Look for any fields that contain multiple values. For instance, a field that stores multiple phone numbers or addresses separated by commas.
Split repeating groups into separate rows: Each piece of information should be stored in its own row. For example, instead of storing multiple phone numbers in one field, create a new table to store phone numbers.
Step 2: Ensure Each Record is Unique
Identify a primary key: Each table should have a primary key, which is a unique identifier for each record. This could be an existing field that is unique, or you might need to create a new field (e.g., an auto-incremented ID).
Remove duplicate records: Ensure that there are no duplicate records in the table. If duplicates exist, you need to either merge them appropriately or delete the redundant ones.
Example
Let's consider a table storing information about students and their courses. The initial table might look like this:

StudentID	StudentName	Courses
1	Alice	Math, Science
2	Bob	History, Math, Art
3	Charlie	Math, History, Science
Step 1: Ensure Atomic Values

The "Courses" field contains multiple values, so we need to split it into atomic values. We create a new table to handle the many-to-many relationship between students and courses.

Students Table:

StudentID	StudentName
1	Alice
2	Bob
3	Charlie
Courses Table:

CourseID	CourseName
1	Math
2	Science
3	History
4	Art
StudentCourses Table:

StudentID	CourseID
1	1
1	2
2	3
2	1
2	4
3	1
3	3
3	2
Step 2: Ensure Each Record is Unique

Now, each table has a unique primary key:

Students table uses StudentID as the primary key.
Courses table uses CourseID as the primary key.
StudentCourses table uses the combination of StudentID and CourseID as a composite primary key to ensure uniqueness.
Summary
By following these steps, you ensure that:

Each field contains only atomic values.
Each record is unique.
This process eliminates repeating groups and brings the database to at least the First Normal Form (1NF). */