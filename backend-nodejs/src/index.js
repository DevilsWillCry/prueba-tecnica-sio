import express from 'express';
import ticketRoutes from './routes/ticketRoutes.js';
import cors from "cors"

//* Instancia de express
const app = express();
const PORT = process.env.PORT || 8000;

//* Habilitar CORS
app.use(cors({
    origin: 'http://localhost:5173'
}));

//* parsear JSON mediante ese midleware
app.use(express.json());

//* Enrutamiento de tickets
app.use('/api', ticketRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

