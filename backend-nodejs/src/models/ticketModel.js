import { connection } from "../config/db.js";


export const TicketModel = {
  async getAllTickets() {
    const [rows] = await connection.query("SELECT * FROM tickets");
    return rows;
  },

  async getById(id) {
    const [rows] = await connection.query("SELECT * FROM tickets WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  async getByTitle(title) {
    const [rows] = await connection.query(
      "SELECT * FROM tickets WHERE titulo = ?",
      [title],
    );
    return rows[0];
  },

  async create({ titulo, descripcion, estado = "Abierto" }) {
    const [result] = await connection.query(
      "INSERT INTO tickets (titulo, descripcion, estado) VALUES (?,?,?)",
      [titulo, descripcion, estado],
    );
    return { id: result.insertId, titulo, descripcion, estado };
  },

  async updateStatus(id, estado) {
    const [result] = await connection.query(
      "UPDATE tickets SET estado = ? WHERE id = ?",
      [estado, id],
    );
    return result.affectedRows;
  },

  async delete(id) {
    const [result] = await connection.query("DELETE FROM tickets WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  },
};
