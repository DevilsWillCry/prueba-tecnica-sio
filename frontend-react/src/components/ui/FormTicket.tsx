import { cn } from "../../lib/utils";
import ButtonTicket from "./ButtonTicket";
import InputTicket from "./InputTicket";
import LabelTicket from "./LabelTicket";
import SelectTicket from "./SelectTicket";
import { useFetch } from "../../hooks/useFetch";
import { useTickets } from "../../context/TicketProvider";

interface formProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  created_at: string;
  updated_at: string;
}

function FormTicket({ className, ...props }: formProps) {
  const { data, loading, error, fetchData } = useFetch<Ticket>();

  const { setTickets, API_URL } = useTickets();

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues = Object.fromEntries(formData);

    const newTicket = await fetchData(`${API_URL}/api/tickets/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (newTicket) {
      setTickets((prevTickets) => [...prevTickets, newTicket]);
    }

    event.currentTarget.reset();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form
      {...props}
      onSubmit={handleSubmit}
      className={cn(BaseStyle, className)}
    >
      <LabelTicket className="w-full" label="Ticket" />

      <InputTicket
        name="titulo"
        className="w-full"
        text="Digite el titulo del ticket..."
        type="text"
      />

      <LabelTicket className="w-full" label="Descripcion" />

      <InputTicket
        name="descripcion"
        className="w-full"
        text="Descripción del ticket..."
        type="textarea"
      />

      <LabelTicket className="w-full" label="Estado" />

      <SelectTicket
        name="estado"
        className="w-full"
        text="Seleccione el estado del ticket..."
      />

      <ButtonTicket className="w-full" text="Guardar" type="submit" />

      {error && <p>{error.message}</p>}

      {data && <p>Ticket creado exitosamente</p>}
    </form>
  );
}

const BaseStyle: string = `
    flex 
    flex-col 
    items-start 
    justify-center 
    gap-5 
    bg-bg-2 p-5
    max-w-md w-100
    rounded-xl shadow-2xl 
    text-ink
`;

export default FormTicket;
