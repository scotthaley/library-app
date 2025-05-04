import dayjs from "dayjs";
import "dotenv/config";
import pgp from "pg-promise";
const db = pgp()(process.env.DATABASE_URL);

export const searchBooks = (search: string) => {
  return db.any(
    `
SELECT b.*, count(bc.id) FROM books AS b 
LEFT JOIN book_copies AS bc ON b.id = bc.book 
WHERE lower(b.name) LIKE $1
OR b.isbn = $2
OR lower(b.author) LIKE $1
OR ARRAY_TO_STRING(b.keywords, '|') LIKE $1
OR ARRAY_TO_STRING(b.genre, '|') LIKE $1
GROUP BY b.id`,
    [`%${search.toLowerCase()}%`, search],
  );
};

export const featuredBooks = () => {
  return db.any(`
SELECT b.* FROM books AS b
WHERE b.featured = true
`);
};

export const getBookById = (id: number) => {
  return db.oneOrNone(
    `
SELECT b.*, count(bc.id) FROM books AS b
LEFT JOIN book_copies AS bc ON b.id = bc.book 
WHERE b.id = $1
GROUP BY b.id
`,
    id,
  );
};

const getAuthenticatedUser = async (card: string, pin: string) => {
  return (
    await db.oneOrNone(
      `
SELECT id FROM users
WHERE card_number = $1 AND pin_number = $2
`,
      [card, pin],
    )
  )?.id;
};

const getBookCopy = async (id: number) => {
  return (
    await db.oneOrNone(
      `
SELECT id FROM book_copies
WHERE book = $1
AND checked_out_by IS NULL
LIMIT 1
`,
      id,
    )
  )?.id;
};

export const checkoutBook: (
  id: number,
  card: string,
  pin: string,
) => Promise<{ error: null | number; book?: number }> = async (
  id,
  card,
  pin,
) => {
  const user = await getAuthenticatedUser(card, pin);

  if (user) {
    const book = await getBookCopy(id);

    if (book) {
      const today = dayjs().format("YYYY-MM-DD");
      const due = dayjs().add(3, "weeks").format("YYYY-MM-DD");

      await db.none(
        `
UPDATE book_copies
SET checked_out_by = $1,
check_out_date = $3,
due_date = $4
WHERE id = $2
`,
        [user, book, today, due],
      );

      return { error: null, book };
    }

    return { error: 404 };
  }

  return { error: 401 };
};

export const getUserBooks: (
  card: string,
  pin: string,
) => Promise<{ error: null | number; books?: any[] }> = async (card, pin) => {
  const user = await getAuthenticatedUser(card, pin);

  if (user) {
    const books = await db.manyOrNone(
      `
SELECT bc.id copy_id, b.* FROM book_copies AS bc
JOIN books AS b ON bc.book = b.id
WHERE bc.checked_out_by = $1
`,
      [user],
    );

    return { error: null, books };
  }

  return { error: 401 };
};

export const returnBook: (
  id: number,
  card: string,
  pin: string,
) => Promise<{ error: null | number }> = async (id, card, pin) => {
  const user = await getAuthenticatedUser(card, pin);

  if (user) {
    await db.none(
      `
UPDATE book_copies
SET checked_out_by = null,
check_out_date = null,
due_date = null
WHERE id = $1
`,
      [id],
    );

    return { error: null };
  }

  return { error: 401 };
};
