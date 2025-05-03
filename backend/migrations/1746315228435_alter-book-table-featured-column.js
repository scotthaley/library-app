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
  pgm.addColumn("books", {
    featured: {
      type: "boolean",
      default: false,
    },
  });

  pgm.sql("UPDATE books SET featured = true WHERE id = 2");
  pgm.sql("UPDATE books SET featured = true WHERE id = 4");
  pgm.sql("UPDATE books SET featured = true WHERE id = 7");
  pgm.sql("UPDATE books SET featured = true WHERE id = 9");
  pgm.sql("UPDATE books SET featured = true WHERE id = 10");
  pgm.sql("UPDATE books SET featured = true WHERE id = 12");
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
