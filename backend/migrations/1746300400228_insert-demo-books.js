/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.sql(`INSERT INTO books (name, author, isbn, keywords, genre, publisher, pages) VALUES
('To Kill a Mockingbird', 'Harper Lee', '978-0-06-112008-4', '{"classic", "racism", "courtroom"}', '{"fiction", "classic", "drama"}', 'J.B. Lippincott & Co.', 281),
('1984', 'George Orwell', '978-0-452-28423-4', '{"dystopia", "totalitarianism", "surveillance"}', '{"fiction", "dystopian", "political"}', 'Secker & Warburg', 328),
('Pride and Prejudice', 'Jane Austen', '978-0-14-143951-8', '{"romance", "class", "society"}', '{"fiction", "classic", "romance"}', 'T. Egerton', 279),
('The Great Gatsby', 'F. Scott Fitzgerald', '978-0-7432-7356-5', '{"wealth", "jazz age", "tragedy"}', '{"fiction", "classic", "novel"}', 'Charles Scribner''s Sons', 180),
('Moby-Dick', 'Herman Melville', '978-0-14-243724-7', '{"whaling", "revenge", "obsession"}', '{"fiction", "classic", "adventure"}', 'Harper & Brothers', 635),
('War and Peace', 'Leo Tolstoy', '978-0-679-64011-4', '{"russia", "war", "family"}', '{"fiction", "historical", "classic"}', 'The Russian Messenger', 1225),
('The Catcher in the Rye', 'J.D. Salinger', '978-0-316-76948-0', '{"alienation", "youth", "identity"}', '{"fiction", "coming-of-age", "classic"}', 'Little, Brown and Company', 277),
('The Lord of the Rings', 'J.R.R. Tolkien', '978-0-618-00222-8', '{"fantasy", "epic", "middle-earth"}', '{"fantasy", "adventure", "fiction"}', 'George Allen & Unwin', 1178),
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', '978-0-590-35340-3', '{"magic", "school", "wizard"}', '{"fantasy", "young adult", "fiction"}', 'Bloomsbury', 309),
('The Da Vinci Code', 'Dan Brown', '978-0-385-50420-8', '{"mystery", "symbols", "thriller"}', '{"fiction", "mystery", "thriller"}', 'Doubleday', 454),
('The Alchemist', 'Paulo Coelho', '978-0-06-112241-5', '{"journey", "dreams", "spiritual"}', '{"fiction", "philosophical", "adventure"}', 'HarperTorch', 208),
('The Chronicles of Narnia', 'C.S. Lewis', '978-0-06-447119-0', '{"fantasy", "children", "magic"}', '{"fantasy", "children", "fiction"}', 'Geoffrey Bles', 767),
('Brave New World', 'Aldous Huxley', '978-0-06-085052-4', '{"dystopia", "technology", "society"}', '{"fiction", "dystopian", "science fiction"}', 'Chatto & Windus', 311),
('The Hunger Games', 'Suzanne Collins', '978-0-439-02352-8', '{"dystopia", "rebellion", "survival"}', '{"fiction", "young adult", "science fiction"}', 'Scholastic Press', 374),
('Jane Eyre', 'Charlotte Brontë', '978-0-14-243720-9', '{"romance", "gothic", "independence"}', '{"fiction", "classic", "romance"}', 'Smith, Elder & Co.', 500),
('The Fault in Our Stars', 'John Green', '978-0-525-47881-2', '{"romance", "cancer", "teen"}', '{"fiction", "young adult", "romance"}', 'Dutton Books', 313),
('The Shining', 'Stephen King', '978-0-385-12167-2', '{"horror", "isolation", "supernatural"}', '{"fiction", "horror", "thriller"}', 'Doubleday', 447),
('Crime and Punishment', 'Fyodor Dostoevsky', '978-0-14-044913-6', '{"murder", "guilt", "philosophy"}', '{"fiction", "classic", "psychological"}', 'The Russian Messenger', 671),
('Wuthering Heights', 'Emily Brontë', '978-0-14-143955-6', '{"revenge", "love", "moors"}', '{"fiction", "classic", "romance"}', 'Thomas Cautley Newby', 416),
('The Book Thief', 'Markus Zusak', '978-0-375-83100-3', '{"nazi germany", "death", "books"}', '{"fiction", "historical", "young adult"}', 'Knopf Books for Young Readers', 552);`);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
