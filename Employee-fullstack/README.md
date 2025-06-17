# Employee Management Full-Stack App

> Full-Stack CRUD Assignment for Interns

This is a full-stack web application to manage employee records using a MERN stack approach with TypeScript. It has a form for creating and editing employees and a table for viewing, updating, and deleting records.

## Features

* View all employees in a table
* Add new employee records via a form
* Edit employee details
* Delete employee records with confirmation
* Input validation with helpful error messages
* Dakr and light mode toggle available

## Details: 

The app contains 2 pages.

1. Home page to view all the employee data in a table format. Pagination
2. Form page to add new employee record

The employee details are  - Name, Age, Email address and Job Role
 
The client and server are seperated



## Tech Stack

| Layer    | Tech                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------ |
| Frontend | React + TypeScript, Vite, Chakra UI v3, React Hook Form, TanStack Query, Axios, React Router DOM |
| Backend  | Node.js + Express, TypeScript, Mongoose (MongoDB Atlas), dotenv, cors                            |
| Database | MongoDB (hosted via Atlas, compatible with Local Compass)                                        |

## API Endpoints

* `GET /employees` - Get all employee records
* `POST /employees` - Create a new employee
* `PUT /employees/:id` - Update an existing employee
* `DELETE /employees/:id` - Delete an employee

## Requirements

* Required Fields: `name`, `age`, `email`, `role`
* Valid email format enforced

## Project Setup Instructions

### 1. Clone the Repository

```bash
git clone # (yet to be added)
cd Employee-Fullstack
```

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```

> Add The MongoDB URI in a `.env` file in the root folder:

```bash
MONGODB_URI= # mongodb_url
PORT=3000
```

To populate database with sample data:

```bash
npx ts-node src/util/sampleDataScript.ts
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

The app will be running at: [http://localhost:5173](http://localhost:5173)

## 📂 Project Structure

```
Employee-Fullstack/
├── client/      # React frontend
├── server/      # Express + MongoDB backend
```

## 📅 Demo

[Demo Video](https://drive.google.com/your-link-here)

---

