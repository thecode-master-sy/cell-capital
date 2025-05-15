"use client";
import React, { createContext, useContext, useState } from "react";

interface INavBarContext {
  isOpen: boolean;
  toggleNav: () => void;
}

const NavBarContext = createContext<INavBarContext | null>(null);

export function useNavBarContext() {
  const navBarContext = useContext(NavBarContext);

  if (!navBarContext)
    throw new Error("navbar context must be inside a provider");

  return navBarContext;
}

export default function NavBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <NavBarContext.Provider value={{ isOpen, toggleNav }}>
      {children}
    </NavBarContext.Provider>
  );
}
