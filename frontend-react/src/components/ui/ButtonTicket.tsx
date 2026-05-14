import { cn } from "../../lib/utils";

interface ButtonTicketProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  type?: "submit" | "reset" | "button";
}

const ButtonTicket: React.FC<ButtonTicketProps> = ({
  className,
  text,
  type = "submit",
  ...props
}: ButtonTicketProps) => {
  return (
    <button className={cn(baseStyle, className)} type={type} {...props}>
      {text}
    </button>
  );
};

const baseStyle: string = `
    w-full
    p-2
    rounded-xs
    bg-ink-mute
    border-1
    hover:bg-bg-1
    transition ease-in-out duration-300
`;

export default ButtonTicket;
