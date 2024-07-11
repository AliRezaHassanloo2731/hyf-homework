

--Add a task with these attributes: title, description, 
            --created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
--Change the title of a task
UPDATE title FROM task where id=1;
--Change a task due date
--Change a task status
--Mark a task as complete
--Delete a ta