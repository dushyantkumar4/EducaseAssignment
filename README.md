# School Management API System

# Tech Stack

- Node.js
- Express.js
- MySQL
- Joi Validation
- Aiven MySQL

GitHub Repo => https://github.com/dushyantkumar4/EducaseAssignment

After cloning the repository, install the dependencies and create a `.env` file for the database credentials.

```env
PORT=5000

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

- Need to provide the above credentials.
- After that, run the server.

```bash
npm run dev
```

OR

```bash
npm start
```

# OR we can directly use the live URL with endpoints

## Base URL => https://educaseassignment-vqrj.onrender.com

## Endpoints

### 1. Add New School

```bash
POST /api/addSchool
```

### Request Body

```json
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

---

### 2. Get Nearest School List According to User's Latitude & Longitude

```bash
GET /api/listSchools?latitude=28.7041&longitude=77.1025
```

- Returns the nearest schools list.

---

## Postman Collection Link =>

```bash
https://futisedev.postman.co/workspace/Public-work-space~afad00c3-c7a0-4a2e-a0bb-05082ed8b3bc/collection/40408902-d3cc7df0-e1ea-4430-9bd1-90b5eac7bafb?action=share&creator=40408902
```