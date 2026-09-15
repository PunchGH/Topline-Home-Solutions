"use client";

import { useCity } from "./CityContext";

export default function CityToggle({ className }: { className?: string }) {
  const { city, setCity } = useCity();
  return (
    <div
      className={`city-toggle${className ? ` ${className}` : ""}`}
      data-city={city}
    >
      <span className="city-toggle__thumb" aria-hidden="true" />
      <button
        type="button"
        aria-pressed={city === "ottawa"}
        onClick={() => setCity("ottawa")}
      >
        Ottawa
      </button>
      <button
        type="button"
        aria-pressed={city === "calgary"}
        onClick={() => setCity("calgary")}
      >
        Calgary
      </button>
    </div>
  );
}
