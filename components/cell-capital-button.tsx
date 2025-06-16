import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function CellCapitalPrimaryButton({
  children,
  color,
  className,
  size,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  color: "primary" | "white";
  className?: string;
  size?: "sm" | "lg" | "default" | null;
  onClick?: () => void;
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
      onClick={onClick}
      {...props}
      className={cn(
        "text-sm cursor-pointer mx-auto text-foreground rounded-sm font-bold",
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
  onClick,
  asChild,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  asChild?: boolean;
}) {
  return (
    <Button
      size="sm"
      {...props}
      className={cn(
        "text-caption bg-cellcapital-light rounded-sm cursor-pointer",

        className
      )}
      onClick={onClick}
      asChild={asChild}
    >
      {children}
    </Button>
  );
}
