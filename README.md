# GitHub Profile Analyzer API

## Overview

GitHub Profile Analyzer API is a backend service built using Node.js, Express.js, and MySQL. It fetches public GitHub profile information using the GitHub API, analyzes useful profile insights, and stores the results in a MySQL database.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub REST API

---

## Features

* Analyze a GitHub profile using username
* Fetch public profile data from GitHub
* Store analyzed profile data in MySQL
* Calculate useful insights:

  * Followers
  * Following
  * Public Repositories
  * Total Stars
  * Top Programming Language
  * Account Age (Days)
  * Profile Score
* Fetch all analyzed profiles
* Fetch a single analyzed profile
* Compare two analyzed GitHub profiles

---

## Project Structure

```text
src/
├── Config/
├── Controllers/
├── Models/
├── Routes/
├── Services/

server.js
package.json
README.md
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Bhooveshvyas/Github-Profile-Analyaser.git
```

Move into project directory:

```bash
cd Github-Profile-Analyaser
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

---

## API Endpoints

### Analyze a GitHub Profile

```http
POST /api/analyze/:username
```

Example:

```http
POST /api/analyze/octocat
```

---

### Get All Profiles

```http
GET /api/profiles
```

---

### Get Single Profile

```http
GET /api/profiles/:username
```

Example:

```http
GET /api/profiles/octocat
```

---

### Compare Two Profiles

```http
GET /api/compare/:user1/:user2
```

Example:

```http
GET /api/compare/octocat/Bhooveshvyas
```

---

## Database

The application stores analyzed GitHub profile information in a MySQL database.

Main fields stored:

* github_id
* username
* name
* followers
* following
* public_repos
* total_stars
* top_language
* account_age_days
* profile_score
* profile_url

---

## Author

**Bhoovesh Vyas**