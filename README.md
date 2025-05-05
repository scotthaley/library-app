# The Library 📚

**The Library** is a demo application showcasing a typical full-stack web app setup using **React**, **Node/Express**, **PostgreSQL**, and **Docker**. It’s designed to be simple to run, inspect, and modify—ideal for learning or bootstrapping your own projects.

---

## 🧱 Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js with Express
- **Database**: PostgreSQL
- **Migrations**: node-pg-migrate
- **Admin UI**: pgAdmin
- **Containerization**: Docker + Docker Compose

---

## 🚀 Getting Started

### Option 1: Run Everything with Docker (Recommended)

```bash
docker compose up
```

This will:

- Start a PostgreSQL database
- Start the Express backend server
- Run database migrations and seed data
- Start the React frontend app
- Start a pgAdmin instance

### App Access

- **Frontend + API**: [http://localhost:3000](http://localhost:3000)
  - API routes under: `/api/`
- **pgAdmin**: [http://localhost:5050](http://localhost:5050)

#### pgAdmin Login

- **Email**: `you@email.com`
- **Password**: `pgadmin`

After logging in:

1. Right-click on **Servers**
2. Choose **Register > Server**
3. Enter a name (anything)
4. Under the **Connection** tab
   - set **Host** to `postgres`
   - set **Username** to `pgadmin`
   - set **Password** to `pgadmin`

---

### Option 2: Run Frontend and Backend Separately

#### Backend Setup

Create a `.env` file with:

```env
DATABASE_URL=postgres://pgadmin:pgadmin@localhost:5432/library
```

```bash
cd backend
yarn
yarn start
```

> Note: You will need to manually run a Postgres server and apply migrations if not using Docker.

#### Frontend Setup

Create a `.env` file with:

```env
VITE_API_HOSTNAME=http://localhost:3000
```

```bash
cd frontend
yarn
yarn dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🔧 Database & Migrations

The design of the schema is set up so that books with details can be stored in the database even if there are no copies of the book.
When a user checks out a book, they are actually checking out a specific copy of the book, which is then associated with that user.
The checkout endpoint takes the generic book id, but then tries to find a book copy of that book that is not currently checked out.

Checkout date and due date are not really used at this point, except due date is displayed when looking at your list of checked out books.

![CleanShot 2025-05-05 at 03 22 51@2x](https://github.com/user-attachments/assets/b10dc414-5f00-40ca-8bdd-1a27b06af675)

This project uses **[node-pg-migrate](https://github.com/salsita/node-pg-migrate)** to manage database migrations.

When running with Docker, migrations are applied automatically on startup.

The default migrations will:

- Create tables for users, books, and book copies
- Seed **20 demo books**
- Seed **1 demo user**

### Default User

- **Card Number**: `12345`
- **PIN**: `678`

---

## 🧪 Features

- Full-stack demo: React + Express + Postgres
- RESTful API design
- Dockerized development environment
- pgAdmin for database inspection
- Postman collection for testing
- Lightweight authentication via card number + PIN
- Pre-seeded data for easy testing

---

## 🔐 Authentication Notes

This project uses a **lightweight auth mechanism** based on a **library card number** and **PIN**. There is no full authentication system implemented yet.

A future enhancement could include:

- Proper login/auth flow
- Token-based auth
- Remembering user credentials in local storage

---

## 📬 API Testing with Postman

A Postman collection (`TheLibrary.postman_collection.json`) is included for convenience.

1. Open Postman
2. Click **Import**
3. Load the collection file
4. Use card number + PIN (`12345` / `678`) where required
5. Base URL: `http://localhost:3000/api/`

---

## 🔌 API Endpoints

All routes are prefixed with `/api`

### `GET /api/featured`

Returns a list of featured books (`featured = true`)

### `GET /api/books`

Returns a list of all books (supports query filters)

### `GET /api/books/:id`

Returns detailed info about a specific book

### `GET /api/user/books`

Returns books checked out by a user  
**Requires:** `cardNumber` and `pin`

### `POST /api/checkout`

Checks out a book copy

**Body:**

```json
{
  "card": "12345",
  "pin": "678",
  "id": 1
}
```

### `POST /api/return`

Returns a book copy

**Body:**

```json
{
  "card": "12345",
  "pin": "678",
  "id": 42
}
```

---

## 📂 Project Structure

```
/
├── backend/                        # Express API & migrations
├── frontend/                       # React app (Vite)
├── docker-compose.yml              # Orchestration
├── Dockerfile
├── backend-postman-collection.json
└── README.md
```
