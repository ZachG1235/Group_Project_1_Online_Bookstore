CREATE DATABASE BookDB;
CREATE TABLE Users (
    username VARCHAR(50) PRIMARY KEY,
    displayName VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Books (
    bookID SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    pubDate DATE NOT NULL,
    rating FLOAT NOT NULL
);

CREATE TABLE Reviews (
    reviewID SERIAL PRIMARY KEY,
    bookID INT REFERENCES Books(bookID) ON DELETE CASCADE,
    author VARCHAR(50) REFERENCES Users(username) ON DELETE CASCADE,
    reviewText TEXT NOT NULL,
    reviewTitle VARCHAR(100) NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Users (username, displayName, password)
VALUES
('alice', 'Alice Smith', 'hashedpassword1'),
('bob', 'Bob Johnson', 'hashedpassword2'),
('carol', 'Carol Lee', 'hashedpassword3');

INSERT INTO Books (title, author, genre, description, pubDate, rating)
VALUES
-- 1
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic',
 'A tragic story of wealth, love, and the elusive American Dream set in the Jazz Age.',
 '1925-04-10', 4.4),

-- 2
('1984', 'George Orwell', 'Dystopian',
 'A chilling depiction of a totalitarian regime and the dangers of surveillance and thought control.',
 '1949-06-08', 4.7),

-- 3
('To Kill a Mockingbird', 'Harper Lee', 'Historical Fiction',
 'A deeply moving novel about racial injustice and moral growth in the American South.',
 '1960-07-11', 4.8),

-- 4
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy',
 'A charming and adventurous tale of Bilbo Baggins’ journey through Middle-earth.',
 '1937-09-21', 4.6),

-- 5
('Pride and Prejudice', 'Jane Austen', 'Romance',
 'A witty and romantic exploration of manners, marriage, and social standing in 19th-century England.',
 '1813-01-28', 4.5),

-- 6
('The Catcher in the Rye', 'J.D. Salinger', 'Coming-of-Age',
 'A rebellious teenager’s cynical journey through 1950s New York after being expelled from prep school.',
 '1951-07-16', 4.1),

-- 7
('Brave New World', 'Aldous Huxley', 'Science Fiction',
 'A futuristic society built on engineered happiness, consumerism, and the loss of individuality.',
 '1932-08-31', 4.4),

-- 8
('Moby-Dick', 'Herman Melville', 'Adventure',
 'The epic saga of Captain Ahab’s obsessive quest to hunt the white whale, Moby Dick.',
 '1851-10-18', 4.0),

-- 9
('The Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', 'Fantasy',
 'The first part of Tolkien’s epic, following Frodo and the Fellowship as they set out to destroy the One Ring.',
 '1954-07-29', 4.9),

-- 10
('Jane Eyre', 'Charlotte Brontë', 'Gothic Fiction',
 'An orphaned woman’s struggle for independence and love in Victorian England.',
 '1847-10-16', 4.6),

-- 11
('The Alchemist', 'Paulo Coelho', 'Philosophical Fiction',
 'A young shepherd embarks on a quest to discover his personal legend and the meaning of life.',
 '1988-04-15', 4.3),

-- 12
('Crime and Punishment', 'Fyodor Dostoevsky', 'Psychological Fiction',
 'A gripping exploration of guilt, morality, and redemption through the story of a tormented murderer in St. Petersburg.',
 '1866-01-01', 4.7);

 INSERT INTO Reviews (bookID, author, reviewText, reviewTitle, rating)
VALUES
-- Review for The Great Gatsby (bookID = 1)
(1, 'alice', 'An amazing depiction of the Jazz Age. Loved the prose and the characters.', 'A Classic Gem', 5),

-- Review for 1984 (bookID = 2)
(2, 'bob', 'Terrifyingly realistic. Orwell predicted so much about surveillance society.', 'Chilling Dystopia', 5),

-- Review for To Kill a Mockingbird (bookID = 3)
(3, 'carol', 'A moving story that stays with you. Important and emotional.', 'Must-Read', 5),

-- Review for The Hobbit (bookID = 4)
(4, 'alice', 'Fun adventure with a charming protagonist. Tolkien’s world-building is superb.', 'Adventure Awaits', 4),

-- Review for Pride and Prejudice (bookID = 5)
(5, 'bob', 'Witty, romantic, and timeless. Austen’s writing never gets old.', 'Romantic Classic', 5);

