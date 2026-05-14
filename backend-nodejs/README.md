mi-backend/
│
├── package.json
├── pnpm-lock.yaml
├── index.js               # Punto de entrada del servidor
├── .env                   # Variables de entorno (opcional)
│
├── src/                   # Código fuente principal
│   ├── controllers/       # Lógica de controladores (responde a rutas)
│   │   └── ticketController.js
│   │
│   ├── routes/            # Definición de endpoints / rutas
│   │   └── ticketRoutes.js
│   │
│   ├── models/            # Modelo de datos (aunque sea en memoria)
│   │   └── ticketModel.js
│   │
│   ├── services/          # Lógica de negocio adicional (opcional)
│   │   └── ticketService.js
│   │
│   └── utils/             # Utilidades / helpers
│       └── validation.js  # Ejemplo: validar payload de tickets
│
└── tests/                 # Tests (opcional)
    └── ticket.test.js