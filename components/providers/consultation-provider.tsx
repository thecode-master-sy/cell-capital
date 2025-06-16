"use client";
import React, { createContext, useContext, useState } from "react";

interface IConsultationFormContext {
  isOpen: boolean;
  toggleConsultationForm: () => void;
}

const ConsultaionFormContext = createContext<IConsultationFormContext | null>(
  null
);

export function useConsultationFormContext() {
  const consultationFormContext = useContext(ConsultaionFormContext);

  if (!consultationFormContext)
    throw new Error("consultation form context must be inside a provider");

  return consultationFormContext;
}

export default function ConsultationFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleConsultationForm() {
    setIsOpen(!isOpen);
  }

  return (
    <ConsultaionFormContext.Provider value={{ isOpen, toggleConsultationForm }}>
      {children}
    </ConsultaionFormContext.Provider>
  );
}
