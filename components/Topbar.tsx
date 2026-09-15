"use client";

import { useCity } from "./CityContext";
import { offices } from "@/lib/content";
import CityToggle from "./CityToggle";

export default function Topbar() {
  const { city } = useCity();
  const office = offices[city];

  return (
    <div className="topbar">
      <div className="wrap">
        <span className="topbar__available">Available 24/7</span>
        <div className="topbar__right">
          <CityToggle />
          <a className="topbar__phone" href={office.phoneHref}>
            {office.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
