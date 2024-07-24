use hyf_app;
 CREATE TABLE `meal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `location` varchar(255) NOT NULL,
  `when` datetime DEFAULT NULL,
  `max_reservations` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES 
('Italian Feast', 'A delicious spread of Italian dishes including pasta, pizza, and more.', '123 Pasta Lane, New York, NY', '2024-08-01 18:00:00', 20, 25.00, '2024-07-01'),
('Sushi Night', 'An assortment of fresh sushi and sashimi prepared by a master chef.', '456 Sushi St, San Francisco, CA', '2024-08-05 19:00:00', 15, 45.00, '2024-07-05'),
('BBQ Extravaganza', 'A backyard BBQ with ribs, burgers, and all the fixings.', '789 Grill Ave, Austin, TX', '2024-08-10 17:00:00', 30, 20.00, '2024-07-10'),
('Vegan Delight', 'A fully vegan meal with fresh, locally sourced ingredients.', '321 Green Way, Portland, OR', '2024-08-15 18:30:00', 25, 30.00, '2024-07-15'),
('Seafood Bonanza', 'A seafood lover\'s dream with lobster, shrimp, and fish.', '654 Ocean Blvd, Miami, FL', '2024-08-20 19:30:00', 20, 50.00, '2024-07-20');
CREATE TABLE `Review` (
  `id` INT NOT NULL auto_INCREMENT,
  `title` varchar(100),
  `description` text,
  meal_id int,
  stars int ,
  `created_date` date,
  PRIMARY KEY (`id`),
   FOREIGN KEY (meal_id) REFERENCES meal(id) 
);

 INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Amazing Italian Feast', 'The Italian Feast was absolutely delicious! Highly recommend.', 41, 5, '2024-08-02'),
('Sushi Night Delight', 'Fantastic sushi, very fresh and well-prepared.', 42, 5, '2024-08-06'),
('Great BBQ!', 'Loved the BBQ Extravaganza. Great food and atmosphere.', 43, 4, '2024-08-11'),
('Vegan Heaven', 'The Vegan Delight meal was superb. Fresh and tasty.', 44, 5, '2024-08-16'),
('Seafood Paradise', 'Seafood Bonanza was incredible. Best lobster I have ever had!', 45, 5, '2024-08-21'),
('Good Italian Food', 'Italian Feast was good but could use more variety.', 41, 4, '2024-08-03'),
('Sushi Overload', 'Sushi Night had a great variety, but the service was slow.', 42, 3, '2024-08-07'),
('BBQ Fun', 'BBQ Extravaganza was fun but a bit crowded.', 43, 4, '2024-08-12'),
('Nice Vegan Meal', 'The Vegan Delight was nice, but portions were small.', 44, 3, '2024-08-17'),
('Seafood Delight', 'Seafood Bonanza was delightful, great value for money.', 45, 4, '2024-08-22');

CREATE TABLE `reservation` (
  `id` int NOT NULL,
  `number_of_guests` int NOT NULL,
  `meal_id` int NOT NULL,
  `created_date` date NOT NULL,
  `contact_phonenumber` varchar(45) NOT NULL,
  `contact_name` varchar(45) NOT NULL,
  `contact_email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (meal_id) REFERENCES meal(id) 
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(1, 2, 41, '2024-07-25', '555-123-4567', 'John Doe', 'johndoe@example.com'),
(2, 4, 42, '2024-07-26', '555-234-5678', 'Jane Smith', 'janesmith@example.com'),
(3, 3, 43, '2024-07-27', '555-345-6789', 'Alice Johnson', 'alicejohnson@example.com'),
(4, 5, 44, '2024-07-28', '555-456-7890', 'Bob Brown', 'bobbrown@example.com'),
(5, 2, 45, '2024-07-29', '555-567-8901', 'Carol White', 'carolwhite@example.com'),
(6, 2, 41, '2024-07-30', '555-678-9012', 'Dave Black', 'daveblack@example.com'),
(7, 1, 42, '2024-07-31', '555-789-0123', 'Eve Green', 'evegreen@example.com'),
(8, 4, 43, '2024-08-01', '555-890-1234', 'Frank Blue', 'frankblue@example.com'),
(9, 3, 44, '2024-08-02', '555-901-2345', 'Grace Yellow', 'graceyellow@example.com'),
(10, 2, 45, '2024-08-03', '555-012-3456', 'Hank Pink', 'hankpink@example.com');

--Get all meals
SELECT * from meal;

--Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES 
('French Gourmet Evening', 'An elegant evening of fine French cuisine including coq au vin, 
ratatouille, and crème brûlée.', '987 Bistro Blvd, Paris, France', '2024-08-25 19:00:00', 25, 60.00, '2024-07-23');

--Get a meal with any id, fx 1
SELECT title FROM meal WHERE id=44;
--update a meal with any id, fx 1. Update any attribute fx the title
-- or multiple attributes
UPDATE meal set title='ghormeSabzi' WHERE id=43;
--Delete a meal with any id, fx 1
DELETE FROM meal WHERE id=43;

--Get all reservations
SELECT * from reservation;

--Add a new reservation
INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES 
(11, 3, 45, '2024-08-01', '555-678-1234', 'Lucy Brown', 'lucybrown@example.com');

--Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id=1;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple 
UPDATE reservation SET contact_name='Reza' WHERE id=1;

--Delete a reservation with any id, fx 1
DELETE FROM reservation where id=2;
--Get all reviews
SELECT * from Review;

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES 
('Exquisite French Gourmet', 'The French Gourmet Evening was an unforgettable experience with exquisite dishes and impeccable service.', 4
6, 5, '2024-08-26');
--Get a review with any id, fx 1
SELECT * from Review WHERE id=50;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review set stars=5 WHERE id=50;

--Delete a review with any id, fx 1
DELETE FROM Review where id=50;

--Additional queries
--Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal where price>25

--Get meals that still has available reservations
SELECT title from meal JOIN reservation on meal_id=meal.id where max_reservations>number_of_guests;

--Get meals that partially match a title. Rød grød med will match the meal with the 
--title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE 'Sushi%';

--Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2024-07-05' and '2024-07-20';

--Get only specific number of meals fx return only 5 meals
SELECT * from meal LIMIT 5;

--Get the meals that have good reviews
SELECT * FROM meal
WHERE id IN (
    SELECT meal_id FROM Review WHERE stars > 4
)

--Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation WHERE meal_id = 43 ORDER BY created_date DESC;

--Sort all meals by average number of stars in the reviews
SELECT m.*, AVG(r.stars) AS ave_star
FROM `meal` m LEFT JOIN `Review` r ON m.id = r.meal_id
GROUP BY m.id ORDER BY ave_star;