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
  pgm.addColumns("books", {
    author: {
      type: "varchar(100)",
      notNull: true,
    },
    isbn: {
      type: "varchar(20)",
      notNull: true,
    },
    keywords: "varchar(100)[]",
    genre: "varchar(100)[]",
    publisher: "varchar(100)",
    pages: "varchar(100)",
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
