"use client";

import { Product } from "@/types";
import { ReactNode, createContext, useState } from "react";

export const AppContext = createContext<{
  add: (data: Product) => void;
  remove: (data: Product) => void;
  isSelected: (data: Product) => boolean;
  selections: Product[];
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selections, setSelections] = useState<Product[]>([]);

  function add(data: Product) {
    if (selections.some((d) => d.id === data.id)) return;
    setSelections((prevState) => [...prevState, data]);
  }

  function remove(data: Product) {
    setSelections((prevState) => prevState.filter((d) => d.id !== data.id));
  }

  function isSelected(data: Product) {
    return selections.some(({ id }) => id === data.id);
  }

  return (
    <AppContext.Provider value={{ add, remove, selections, isSelected }}>
      {children}
    </AppContext.Provider>
  );
}
