import useApp from "@/hooks/useApp";
import { Product } from "@/types";
import QuickView from "@/ui/quick-view";
import Rating from "@/ui/rating";
import { useState } from "react";

type Props = {
  data: Product;
};

export default function MenuItem({ data }: Props) {
  const [preview, setPreview] = useState(false);
  const { add, remove } = useApp();
  const { selections } = useApp();

  return (
    <label className="flex cursor-pointer items-center rounded-xl p-3 transition-all ease-in-out hover:ring-1 hover:ring-brand-indigo has-[:checked]:bg-[#F5F2FF] has-[:checked]:ring has-[:checked]:ring-brand-indigo">
      <img
        src="https://source.unsplash.com/random/?food"
        alt={data.name}
        className="aspect-square h-[72px] shrink-0 self-start rounded-lg object-cover"
      />

      <span className="ml-3 w-full">
        <span className="text-lg font-semibold leading-[21px] text-[#020A05]">
          {data.name}
        </span>

        <span className="flex items-center justify-between">
          <span className="flex items-center">
            <span className="shrink-0 text-sm font-semibold">
              AED {data.price}
            </span>
            <Rating value={data.rating} />
            <span className="sr-only text-sm font-medium leading-[18px] text-[#2F3333A6] sm:not-sr-only sm:ml-8 sm:line-clamp-1">
              {data.description}
            </span>
          </span>

          <span className="relative">
            <span className="flex items-center">
              <i
                className="fi fi-rr-eye sr-only ml-[14px] text-2xl lg:not-sr-only"
                onClick={(e) => {
                  e.preventDefault();
                  setPreview((prevState) => !prevState);
                }}
              />
              <input
                type="checkbox"
                name="meal"
                id={data.id}
                className="peer sr-only"
                checked={selections.some(({ id }) => id === data.id)}
                onChange={(e) =>
                  e.currentTarget.checked ? add(data) : remove(data)
                }
              />
              <i className="fi fi-rr-check ml-[18px] h-6 w-6 shrink-0 rounded-full border border-[#020A05] text-transparent transition ease-in-out peer-checked:border-0 peer-checked:bg-brand-indigo peer-checked:text-white peer-focus:border-brand-indigo peer-focus:ring-2 peer-focus:ring-brand-indigo peer-focus:ring-offset-2 peer-focus:ring-offset-white" />

              {preview && (
                <div className="absolute z-50 lg:-left-[calc(375px+8px)] lg:-top-7">
                  <QuickView data={data} onClose={() => setPreview(false)} />
                </div>
              )}
            </span>
          </span>
        </span>
      </span>
    </label>
  );
}
