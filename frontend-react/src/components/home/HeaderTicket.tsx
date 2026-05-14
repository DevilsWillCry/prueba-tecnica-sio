import { cn } from "../../lib/utils"
 
function HeaderTicket({ className }: { className?: string }) {
  return (
    <section className={cn(BaseStyle, className)}>
        <h1 className="italic font-bold text-2xl">Mini Gestor de incidencias</h1>
        <p className="text-xl">Prueba tecnica desarrollada con React + TypeScript + NodeJS + MySQL </p>
    </section>
  )
}

const BaseStyle: string = `
    flex 
    flex-col 
    gap-2 
    items-center 
    text-center
    justify-center
    max-w-md 
`


export default HeaderTicket