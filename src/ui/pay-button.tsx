"use client";

import useApp from "@/hooks/useApp";
import clsx from "clsx";
import { useState } from "react";

export default function PayButton() {
  const [hovered, setHovered] = useState(false);
  const { selections } = useApp();

  function handleClick() {
    alert(
      "Thank you for checking out this project. I had fun working on it. Let's work together.",
    );
  }

  return (
    <button
      disabled={selections.length === 0}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex h-14 w-[407px] items-center justify-center gap-x-3 rounded-full bg-brand-indigo text-white transition-colors ease-in-out disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      <span className="text-lg font-medium leading-[21px]">Payment</span>
      <i
        className={clsx(
          "fi fi-rr-arrow-right text-2xl transition-transform ease-in-out",
          hovered && "translate-x-1",
        )}
      />
    </button>
  );
}
