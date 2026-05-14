import { useState } from "react";
import { cn } from "../../lib/utils";

interface InputTicketProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const InputTicket: React.FC<InputTicketProps> = ({
  className,
  text,
  ...props
}: InputTicketProps) => {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      className={cn(baseStyle, className)}
      value={value}
      onChange={onChange}
      placeholder={text}
      {...props}
    />
  );
};

const baseStyle: string = `
    w-full
    p-2
    rounded-xs
    border-b-1
    text-ink
`;

export default InputTicket;
