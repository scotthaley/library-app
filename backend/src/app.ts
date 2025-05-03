import express from "express";
import { searchBooks } from "./db";
const app = express();
const port = 3000;

app.get("/api/books", async (req, res) => {
  const term = (req.query.search as string) || "";
  const books = await searchBooks(term);
  res.send(books);
});

app.listen(port, () => {
  return console.log(`Backend listening on port ${port}`);
});
