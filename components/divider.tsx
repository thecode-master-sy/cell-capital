"use client";
import { cn } from "@/lib/utils";

export default function Divider({
  label,
  className,
  dark,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn("text-caption uppercase self-end px-4", className)}
      >{`[ ${label} ]`}</span>
      <div
        className={cn("w-full border-t ", dark && "border-cellcapital-light")}
      ></div>
    </div>
  );
}
