"use client";

import { useEffect, useRef } from "react";

type Props = {
  percent: number;
};

export default function Progress({ percent }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = `${percent}%`;
    }
  }, [percent]);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 h-1.5 bg-brand-indigo transition-all delay-200 duration-500 ease-out"
      style={{ width: "0%" }}
    />
  );
}
