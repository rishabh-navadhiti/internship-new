# Employee app Server

## Backend - Node + Express + Mongoose (TypeScript)

### Features

* RESTful API for employee management
* Connected to MongoDB Atlas
* Uses Mongoose for schema definition
* Includes sample data script for population

### File Structure

```
server/
├── src/
│   ├── index.ts                 # Entry point
│   ├── models/Employee.ts      # schema
│   ├── routes/employeeRoutes.ts # API routes
│   └── util/sampleDataScript.ts # DB scrpt
```

### Sample Data Script

The sampleData.json file has 20 sample employee records which can be used to populate the db using the script.
It forms a temporary connection to the database and writes all the data to the database.
To run the script:

```bash
npx ts-node src/util/sampleDataScript.ts
```

### Environment

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_uri
PORT=3000
```

### Dev Scripts

```bash
npm install
npm run dev
```

Server runs on `localhost:3000`

---

