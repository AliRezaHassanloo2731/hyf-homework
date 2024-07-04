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
 