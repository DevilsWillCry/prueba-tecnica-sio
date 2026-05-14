import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import { useFetch } from "../hooks/useFetch";

interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  created_at: string;
  updated_at: string;
}

interface TicketContextType {
  tickets: Ticket[];
  loading: boolean;
  error: Error | null;
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export function TicketProvider({ children }: { children: ReactNode }) {
  const { data, loading, error, fetchData } = useFetch<Ticket[]>();

  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetchData("http://localhost:8000/api/tickets/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  useEffect(() => {
    if (data) {
      setTickets(data);
    }
  }, [data]);

  return (
    <TicketContext.Provider
      value={{
        tickets,
        loading,
        error,
        setTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error("useTickets must be used within TicketProvider");
  }

  return context;
}
