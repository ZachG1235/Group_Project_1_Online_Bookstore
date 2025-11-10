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
('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic',
 'A tragic story of wealth, love, and the elusive American Dream set in the Jazz Age.',
 '1925-04-10', 4.4),

('1984', 'George Orwell', 'Dystopian',
 'A chilling depiction of a totalitarian regime and the dangers of surveillance and thought control.',
 '1949-06-08', 4.7),

('To Kill a Mockingbird', 'Harper Lee', 'Historical Fiction',
 'A deeply moving novel about racial injustice and moral growth in the American South.',
 '1960-07-11', 4.8),

('The Hobbit', 'J.R.R. Tolkien', 'Fantasy',
 'A charming and adventurous tale of Bilbo Baggins’ journey through Middle-earth.',
 '1937-09-21', 4.6),

('Pride and Prejudice', 'Jane Austen', 'Romance',
 'A witty and romantic exploration of manners, marriage, and social standing in 19th-century England.',
 '1813-01-28', 4.5);

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

