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
