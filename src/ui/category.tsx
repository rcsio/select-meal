import clsx from "clsx";
import { MouseEventHandler } from "react";

type Props = {
  active?: boolean;
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Category({ active, name, onClick }: Props) {
  return (
    <li className="shrink-0">
      <button
        onClick={onClick}
        className={clsx(
          "flex h-12 cursor-pointer items-center rounded-full px-6 text-sm font-medium transition ease-in-out",
          active
            ? "bg-brand-indigo text-white"
            : "border-2 border-brand-indigo text-brand-indigo",
        )}
      >
        {name}
      </button>
    </li>
  );
}
