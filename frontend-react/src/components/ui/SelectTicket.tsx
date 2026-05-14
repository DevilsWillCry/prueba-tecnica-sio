import { cn } from "../../lib/utils";

interface SelectTicketProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  text: string;
  className?: string;
  options?: string[];
}

const SelectTicket: React.FC<SelectTicketProps> = ({
  className,
  text,
  options = ["Abierto", "Cerrado"],
  ...props
}: SelectTicketProps) => {
  return (
    <select className={cn(baseStyle, className)} {...props}>  
      {text}
      {options.map((option) => (
        <option className="text-ink bg-bg-2" key={option}>{option}</option>
      ))}
    </select>
  );
};

const baseStyle: string = `
    w-full
    p-2
    rounded-xs
    border-b-1
    text-ink
`;
export default SelectTicket;
