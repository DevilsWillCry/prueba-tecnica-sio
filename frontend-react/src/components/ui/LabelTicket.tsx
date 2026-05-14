import { cn } from "../../lib/utils";

interface LabelTicketProps {
  className?: string;
  label: string;
}

const LabelTicket: React.FC<LabelTicketProps> = ({ className, label }: LabelTicketProps) => {
  return (
    <span className={cn(baseStyle, className)}>{label}</span>
  );
};

const baseStyle: string = `
    text-ink
    font-bold
    text-md
    tracking-widest
    w-full
    text-left
`;

export default LabelTicket;