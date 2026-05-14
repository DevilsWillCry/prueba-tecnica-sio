import { TicketModel } from "../models/ticketModel.js";

export const TicketService = {

    async getAllTickets() {
        return await TicketModel.getAllTickets();
    },

    async createTicket(data){
       const { titulo, descripcion, estado } = data;

       const validateStates = ['Abierto', 'Cerrado'];
       const ticketState = validateStates.includes(estado) ? estado : 'Abierto';

       const getTicket = await TicketModel.getByTitle(titulo);
       if(getTicket) throw new Error('El ticket ya existe');

        const ticket = {
            titulo,
            descripcion,
            estado: ticketState,
        }
        return await TicketModel.create(ticket);
    },

    async updateTicket(id, estado){
        const validateStates = ['Abierto', 'Cerrado'];
        if(!validateStates.includes(estado)){
            throw new Error('El estado del ticket debe ser Abierto o Cerrado');
        }

        const affectedRows = await TicketModel.updateStatus(id, estado);

        if (affectedRows === 0) {
            throw new Error('El ticket no fue encontrado');
        }
        return affectedRows;
    },

    async deleteTicket(id){
        const affectedRows = await TicketModel.delete(id);
        if(affectedRows === 0)  throw new Error('El ticket no fue encontrado')
        return affectedRows;
    }
}; 