import express from "express";
import { featuredBooks, getBookById, searchBooks } from "./db";
import cors from "cors";
const app = express();
const port = 3000;

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api/featured", async (_, res) => {
  const books = await featuredBooks();
  res.send(books);
});

app.get("/api/books", async (req, res) => {
  const term = (req.query.search as string) || "";
  const books = await searchBooks(term);
  res.send(books);
});

app.get("/api/books/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  res.send(book);
});

app.listen(port, () => {
  return console.log(`Backend listening on port ${port}`);
});
