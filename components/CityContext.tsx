"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { CityId } from "@/lib/content";

interface CityContextValue {
  city: CityId;
  setCity: (city: CityId) => void;
}

const CityContext = createContext<CityContextValue | null>(null);

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<CityId>("ottawa");
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error("useCity must be used within CityProvider");
  return ctx;
}
