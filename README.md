# Mini Gestor de Incidencia

## Instalación

### 1. Clone repository

```bash
git clone https://github.com/DevilsWillCry/prueba-tecnica-sio.git
```

### 2. Instala las dependencias

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

## Configuración de la BD MySQL

### 1. Crea la BD

```sql
CREATE DATABASE tickets_db;
USE tickets_db;
```

### 2. Ejecuta schema.sql

Ve a:

```txt
backend-nodejs/database/schema.sql
```

usando MySQL Workbench.

---

## Variable de entorno

Crea:

```txt
backend-nodejs/.env
```

Toma de ejemplo:

```txt
backend-nodejs/.env.example
```

---

## Ejecuta el backend 

```bash
pnpm run dev
```

---

## Ejecuta el frontend

```bash
pnpm run dev
```