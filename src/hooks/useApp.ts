import { AppContext } from "@/contexts/app";
import { useContext } from "react";

export default function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be within AppProvider");
  return context;
}
