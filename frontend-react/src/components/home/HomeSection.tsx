import FormTicket from "../ui/FormTicket";
import ListTicket from "../ui/ListTicket";
import HeaderTicket from "./HeaderTicket";

function HomeSection() {

  return (
    <main className="w-full h-screen flex flex-row items-center justify-center font-serif tracking-widest gap-5 bg-bg-0 p-5 text-bone">
      <section className="flex flex-col items-center justify-center gap-5">
        <HeaderTicket />
        <FormTicket />
      </section>
      <ListTicket />
    </main>
  );
}

export default HomeSection;
