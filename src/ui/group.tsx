import { Category, Product } from "@/types";
import MenuItem from "@/ui/menu-item";
import { Fragment } from "react";

type Props = {
  name: Category["name"];
  items: Product[];
};

export default function Group({ name, items }: Props) {
  return (
    <fieldset>
      <div className="flex items-center justify-between">
        <legend className="flex flex-row-reverse items-center gap-x-3">
          <span className="rouded-full flex aspect-square h-7 items-center justify-center rounded-full bg-[#020A05] text-white">
            5
          </span>
          <span className="text-xl font-bold">{name}</span>
        </legend>

        <p className="text-sm font-medium text-[#2F3333A6]">Select</p>
      </div>

      <div className="mt-3.5 space-y-2">
        {items.map((item) => (
          <Fragment key={item.id}>
            <MenuItem data={item} />
            <div className="h-[1px] bg-[#E0E8E4]" />
          </Fragment>
        ))}
      </div>
    </fieldset>
  );
}
