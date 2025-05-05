const request = require("supertest");
const app = require("../dist/app.js");
const db = require("../dist/db.js");

jest.mock("../dist/db.js", () => ({
  getUserBooks: jest.fn(),
  checkoutBook: jest.fn(),
  returnBook: jest.fn(),
}));

describe("basic error handling", () => {
  describe("api/user/books", () => {
    it("should return the list of books if the user is authorized", async () => {
      db.getUserBooks.mockResolvedValue({ error: null, books: [{ id: 1 }] });
      const response = await request(app).post("/api/user/books").send({
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual([{ id: 1 }]);
    });

    it("should return 401 when unauthorized", async () => {
      db.getUserBooks.mockResolvedValue({ error: 401 });
      const response = await request(app).post("/api/user/books").send({
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(401);
      expect(response.text).toBe("Unauthorized");
    });
  });

  describe("api/checkout", () => {
    it("should return the book id on success", async () => {
      db.checkoutBook.mockResolvedValue({ error: null, book: 1 });
      const response = await request(app).post("/api/checkout").send({
        id: 1,
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toBe(1);
    });

    it("should return 401 when unauthorized", async () => {
      db.checkoutBook.mockResolvedValue({ error: 401 });
      const response = await request(app).post("/api/checkout").send({
        id: 1,
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(401);
      expect(response.text).toBe("Unauthorized");
    });

    it("should return 404 when not found", async () => {
      db.checkoutBook.mockResolvedValue({ error: 404 });
      const response = await request(app).post("/api/checkout").send({
        id: 1,
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe("Not Found");
    });
  });

  describe("api/return", () => {
    it("should return { success: true }", async () => {
      db.returnBook.mockResolvedValue({ error: null });
      const response = await request(app).post("/api/return").send({
        id: 1,
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual({ success: true });
    });

    it("should return 401 when unauthorized", async () => {
      db.returnBook.mockResolvedValue({ error: 401 });
      const response = await request(app).post("/api/return").send({
        id: 1,
        card: "12345",
        pin: "678",
      });
      expect(response.statusCode).toBe(401);
      expect(response.text).toBe("Unauthorized");
    });
  });
});
