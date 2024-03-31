"use client";

import clsx from "clsx";
import { useState } from "react";

export default function PayButton() {
  const [hovered, setHovered] = useState(false);

  function handleClick() {
    alert(
      "Thank you for checking out this project. I had fun working on it. Let's work together.",
    );
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={(e) => setHovered(true)}
      onMouseLeave={(e) => setHovered(false)}
      className="flex h-14 w-[407px] items-center justify-center gap-x-3 rounded-full bg-brand-indigo text-white"
    >
      <span className="text-lg font-medium leading-[21px]">Payment</span>
      <i
        className={clsx(
          "fi fi-rr-arrow-right text-2xl transition-transform",
          hovered && "translate-x-1",
        )}
      />
    </button>
  );
}
