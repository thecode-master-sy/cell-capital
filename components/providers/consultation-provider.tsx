"use client";
import React, { createContext, useContext, useState } from "react";

interface IConsultationFormContext {
  isOpen: boolean;
  bookerOpen: boolean;
  clientDetails: {
    name: string;
    email: string;
  };
  toggleConsultationForm: () => void;
  toggleBooker: () => void;
  addClientDetails: (
    data: Partial<IConsultationFormContext["clientDetails"]>
  ) => void;
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
  const [bookerOpen, setBookerOpen] = useState(false);
  const [clientDetails, setClientDetails] = useState({
    email: "",
    name: "",
  });

  function toggleConsultationForm() {
    setIsOpen(!isOpen);
  }

  function toggleBooker() {
    setBookerOpen(!bookerOpen);
  }

  function addClientDetails(
    data: Partial<IConsultationFormContext["clientDetails"]>
  ) {
    setClientDetails((prev) => ({ ...prev, ...data }));
  }

  return (
    <ConsultaionFormContext.Provider
      value={{
        isOpen,
        bookerOpen,
        toggleConsultationForm,
        toggleBooker,
        clientDetails,
        addClientDetails,
      }}
    >
      {children}
    </ConsultaionFormContext.Provider>
  );
}
