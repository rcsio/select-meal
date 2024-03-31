"use client";

import useApp from "@/hooks/useApp";
import Heart from "@/icons/heart";
import { Product } from "@/types";
import Rating from "@/ui/rating";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type Props = {
  data: Product;
  onClose(): void;
};

export default function QuickView({ data, onClose }: Props) {
  const [pos, setPos] = useState(0);
  const { add, remove, selections } = useApp();
  const [liked, setLiked] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: () => {},
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setPos(emblaApi.selectedScrollSnap));
  }, [emblaApi]);

  return (
    <div
      onClick={(e) => e.preventDefault()}
      className="w-[375px] cursor-default overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xl"
    >
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="https://source.unsplash.com/random/375×233/?food"
                alt={data.name}
                className="h-[233px] w-[375px] shrink-0 object-cover"
              />
            ))}
          </div>
        </div>

        <div className="absolute right-1 top-6 flex gap-x-2">
          <button
            onClick={() => setLiked((prevState) => !prevState)}
            className={clsx(
              "flex aspect-square h-[35px] items-center justify-center rounded-full bg-[#ABC8C8]/50 transition ease-in-out",
              liked ? "text-[#ED3A57]" : "text-white",
            )}
          >
            <span className="sr-only">Like</span>
            <Heart />
          </button>
          <button
            onClick={onClose}
            className="flex aspect-square h-[35px] items-center justify-center rounded-full border border-[#F6F6F6] bg-black"
          >
            <span className="sr-only">Close</span>
            <i className="fi fi-rr-cross-small text-2xl text-white" />
          </button>
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute bottom-20 left-[18px] flex aspect-square h-10 items-center justify-center rounded-full border border-black bg-white"
        >
          <span className="sr-only">Previous</span>
          <i className="fi fi-rr-angle-small-left text-2xl" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute bottom-20 right-[8px] flex aspect-square h-10 items-center justify-center rounded-full border border-black bg-white"
        >
          <span className="sr-only">Next</span>
          <i className="fi fi-rr-angle-small-right text-2xl" />
        </button>
      </div>

      <div className="mt-[9px] flex justify-center gap-x-1.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={clsx(
              "h-1.5 w-3 cursor-pointer rounded-[3px] transition ease-in-out",
              i === pos ? "bg-brand-indigo" : "bg-[#F3F3F3]",
            )}
          />
        ))}
      </div>

      <div className="p-[18px]">
        <dl>
          <div className="flex items-center justify-between">
            <dt className="sr-only">Name</dt>
            <dd className="font-bold leading-[19px]">{data.name}</dd>

            <dt className="sr-only">Rating</dt>
            <dd className="text-[#79E003]">
              <Rating value={data.rating} />
            </dd>
          </div>

          <dt className="sr-only">Price</dt>
          <dd className="mt-[9px] text-sm font-semibold leading-[18px] text-brand-indigo">
            AED 30
          </dd>

          <dt className="sr-only">Description</dt>
          <dd className="mt-6 line-clamp-3 text-xs leading-[18px] text-[#2F333399]">
            {data.description}
          </dd>
        </dl>

        {selections.some((d) => d.id === data.id) ? (
          <button
            onClick={() => remove(data)}
            className="mt-8 flex h-[38px] w-full items-center justify-center rounded-md bg-brand-indigo px-6 text-sm text-white"
          >
            Remove meal
          </button>
        ) : (
          <button
            onClick={() => add(data)}
            className="mt-8 flex h-[38px] w-full items-center justify-center rounded-md bg-brand-indigo px-6 text-sm text-white"
          >
            Add meal
          </button>
        )}
      </div>
    </div>
  );
}
