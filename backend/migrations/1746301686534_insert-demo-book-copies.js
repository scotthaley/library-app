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
  pgm.sql(`INSERT INTO book_copies (book) VALUES
(1), (1), (1),
(2), (2),
(3), (3), (3), (3),
(4),
(5), (5), (5), (5), (5),
(6), (6),
(7), (7), (7),
(8), (8), (8), (8), (8),
(9), (9),
(10), (10), (10), (10),
(11),
(12), (12), (12),
(13), (13),
(14), (14), (14), (14),
(15),
(16), (16),
(17), (17), (17), (17),
(18), (18),
(19), (19), (19),
(20), (20), (20), (20), (20);`);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
