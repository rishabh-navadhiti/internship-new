# React Client app for Employee Management

## Frontend - React + Chakra UI (TypeScript)

### Tools Used

* React with Vite
* Chakra UI v3
* React Hook Form
* React Router DOM
* Axios
* TanStack Query

### Pages

* **`EmployeeTable.tsx`** - Fetches and displays all employees in a table format
* **`EmployeeForm.tsx`** - Handles creation/editing of employees

### Data and API

Axios is used to make api calls to the servers.
The API calls and Async state management is handled by `react-query` library from Tanstack.
It automatically manages server state (i.e external to react).
Used for data fetching, caching and background updates/invalidation to automatically update the data in the raect app when changes are made in the server.


### Components


* Reusable `Header`, `Footer`, `Dialog`, `Toaster` components

### Dev Scripts

```bash
npm install
npm run dev
```

Runs on `localhost:5173`

---
