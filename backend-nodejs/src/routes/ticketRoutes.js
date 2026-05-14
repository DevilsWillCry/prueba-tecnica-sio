import express from "express";
const router = express.Router();

import { TicketController } from "../controllers/ticketController.js";
import { validateTicket } from "../utils/validation.js";

router.get("/tickets", TicketController.listTickets);
router.post("/tickets", [validateTicket], TicketController.createTicket);
router.put("/tickets/:id", TicketController.updateTicket);
router.delete("/tickets/:id", TicketController.deleteTicket);

export default router;
