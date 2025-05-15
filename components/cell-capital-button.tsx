import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function CellCapitalPrimaryButton({
  children,
  color,
  className,
  size,
}: {
  children: React.ReactNode;
  color: "primary" | "white";
  className?: string;
  size?: "sm" | "lg" | "default" | null;
}) {
  const containerStyles = {
    primary: "bg-primary",
    white: "bg-white",
  };
  const objectStyles = {
    white: "bg-primary",
    primary: "hidden",
  };
  return (
    <Button
      size={size}
      className={cn(
        "uppercase text-caption cursor-pointer mx-auto text-foreground rounded-full",
        containerStyles[color],
        className
      )}
    >
      <span>{children}</span>
      <span
        className={cn("h-2 w-2 rounded-full bg-primary", objectStyles[color])}
      ></span>
    </Button>
  );
}

export function CellCapitalSecondaryButton({
  children,
  className,
  onClick
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void
}) {
  return (
    <Button
      size="sm"
      className={cn(
        "uppercase text-caption bg-cellcapital-light rounded-sm cursor-pointer",

        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
