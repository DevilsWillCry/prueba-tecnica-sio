import { useFetch } from "../../hooks/useFetch";
import ButtonTicket from "./ButtonTicket";
import { useTickets } from "../../context/TicketProvider";

interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  created_at: string;
  updated_at: string;
}
function ListTicket() {
  const {  loading, error } = useFetch<Ticket[]>();
  const { tickets, setTickets } = useTickets();

  const handleUpdateStateTicket = async (id: number, state: string) => {
    await fetch(`http://localhost:8000/api/tickets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: state }),
    });

    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, estado: state } : ticket,
      ),
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-7xl w-full h-auto flex flex-col items-center justify-center font-serif tracking-widest gap-5 bg-bg-0 p-10 text-bone">
      <h1 className="italic font-bold text-2xl">Tickets</h1>
      <table className="w-full table-auto border-collapse gap-3 ">
        <thead className="bg-bg-2 text-ink ">
          <tr>
            <th className="text-start">Título</th>
            <th className="text-start">Descripción</th>
            <th className="text-start">Estado</th>
            <th className="text-start">Fecha de creación</th>
          </tr>
        </thead>
        <tbody className="text-start text-ink items-center">
          {tickets?.map((ticket: Ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.titulo}</td>
              <td>{ticket.descripcion}</td>
              <td>
                <ButtonTicket
                  onClick={() =>
                    handleUpdateStateTicket(
                      ticket.id,
                      ticket.estado === "Abierto" ? "Cerrado" : "Abierto",
                    )
                  }
                  type="button"
                  className="w-4/5"
                  text={ticket.estado}
                />{" "}
              </td>
              <td>{ticket.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTicket;
