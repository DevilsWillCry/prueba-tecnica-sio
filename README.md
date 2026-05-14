# Ticket System

## Installation

### 1. Clone repository

```bash
git clone URL
```

### 2. Install dependencies

Frontend:

```bash
cd frontend-react
pnpm install
```

Backend:

```bash
cd backend-nodejs
pnpm install
```

---

## Database Setup

### 1. Create database

```sql
CREATE DATABASE tickets_db;
USE tickets_db;
```

### 2. Execute schema.sql

Import:

```txt
backend-nodejs/database/schema.sql
```

using MySQL Workbench.

---

## Environment Variables

Create:

```txt
backend-nodejs/.env
```

using:

```txt
backend-nodejs/.env
```

---

## Run backend

```bash
pnpm run dev
```

---

## Run frontend

```bash
pnpm run dev
```