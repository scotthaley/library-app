import express from "express";
import {
  checkoutBook,
  featuredBooks,
  getBookById,
  getUserBooks,
  returnBook,
  searchBooks,
} from "./db";
import cors from "cors";
const app = express();
const port = 3000;

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

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

app.post("/api/user/books", async (req, res) => {
  const card = req.body.card;
  const pin = req.body.pin;
  const result = await getUserBooks(card, pin);
  if (!result.error) {
    res.send(result.books);
  } else {
    switch (result.error) {
      case 401:
        res.status(result.error).send("Unauthorized");
        break;
    }
  }
});

app.post("/api/checkout", async (req, res) => {
  const id = parseInt(req.body.id);
  const card = req.body.card;
  const pin = req.body.pin;
  const result = await checkoutBook(id, card, pin);
  if (!result.error) {
    res.send(result.book);
  } else {
    switch (result.error) {
      case 404:
        res.status(result.error).send("Not Found");
        break;
      case 401:
        res.status(result.error).send("Unauthorized");
        break;
    }
  }
});

app.post("/api/return", async (req, res) => {
  const id = parseInt(req.body.id);
  const card = req.body.card;
  const pin = req.body.pin;
  const result = await returnBook(id, card, pin);
  if (!result.error) {
    res.send({ success: true });
  } else {
    switch (result.error) {
      case 401:
        res.status(result.error).send("Unauthorized");
        break;
    }
  }
});

app.listen(port, () => {
  return console.log(`Backend listening on port ${port}`);
});
