//* ticketController.js -> Controlador de tickets
//? 1. Validaciones de estado o datos antes de crear o actualizar tickets.
//? 2. Transformación de datos de tickets, añadir timestamps, limpiar campos

import { TicketService } from "#services/ticketService.js";

export const TicketController = {
  async listTickets(req, res) {
    try {
      const tickets = await TicketService.getAllTickets();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createTicket(req, res) {
    try {
      const ticket = await TicketService.createTicket(req.body);
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const { estado } = req.body;
      const affectedRows = await TicketService.updateTicket(id, estado);
      res.json({ message: "Ticket actualizado correctamente" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      await TicketService.deleteTicket(id);
      res.json({ message: "Ticket eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
