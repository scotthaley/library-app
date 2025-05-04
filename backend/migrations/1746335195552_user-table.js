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
  pgm.createTable("users", {
    id: "id",
    card_number: {
      type: "varchar(5)",
      notNull: true,
    },
    pin_number: {
      type: "varchar(3)",
      notNull: true,
    },
  });

  pgm.sql(
    `INSERT INTO users (card_number, pin_number) VALUES ('12345', '678');`,
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {};
