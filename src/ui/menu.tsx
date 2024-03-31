"use client";

import { Product } from "@/types";
import Category from "@/ui/category";
import Group from "@/ui/group";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Props = {
  data: { [key: string]: Product[] };
};

export default function Menu({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    duration: 20,
  });

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    align: "start",
    axis: "y",
    dragFree: true,
    duration: 20,
  });

  const handleSelect = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
      setTimeout(() => {
        emblaThumbsApi.scrollTo(index);
        setSelectedIndex(index);
      }, 200);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const preventExcessiveScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const {
      limit,
      target,
      location,
      offsetLocation,
      scrollTo,
      translate,
      scrollBody,
    } = emblaApi.internalEngine();

    let edge: number | null = null;

    if (limit.reachedMax(location.get())) edge = limit.max;
    if (limit.reachedMin(location.get())) edge = limit.min;

    if (edge !== null) {
      offsetLocation.set(edge);
      location.set(edge);
      target.set(edge);
      translate.to(edge);
      translate.toggleActive(false);
      scrollBody.useDuration(0).useFriction(0);
      scrollTo.distance(0, false);
    } else {
      translate.toggleActive(true);
    }
  }, []);

  useEffect(() => {
    if (emblaThumbsApi) emblaThumbsApi.on("scroll", preventExcessiveScroll);
  }, [emblaThumbsApi, preventExcessiveScroll]);

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    emblaMainApi.on("select", () => {
      setSelectedIndex(emblaMainApi.selectedScrollSnap());
      setTimeout(() => {
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
      }, 200);
    });
  }, [emblaMainApi, emblaThumbsApi]);

  return (
    <div className="min-w-0">
      <div
        ref={emblaThumbsRef}
        className="relative cursor-ew-resize overflow-hidden border-y border-brand-teal bg-white px-4 py-6 lg:rounded-t-xl lg:border lg:pl-14 lg:pr-[84px]"
      >
        <ul className="flex gap-x-3">
          {Object.keys(data).map((category, i) => (
            <Category
              key={i}
              name={category}
              active={i === selectedIndex}
              onClick={() => handleSelect(i)}
            />
          ))}
        </ul>

        <div className="absolute right-0 top-0 flex items-center bg-white lg:h-[96px] lg:w-12" />
        <button
          onClick={() => {
            emblaThumbsApi?.scrollTo(Object.keys(data).length);
          }}
          className="absolute right-6 top-6 flex aspect-square h-12 items-center justify-center rounded-full border border-[#E0E8E4] bg-white shadow"
        >
          <i className="fi fi-rr-arrow-right text-brand-indigo" />
        </button>
      </div>

      <div
        ref={emblaMainRef}
        className="cursor-ns-resize overflow-hidden border-brand-teal bg-white lg:rounded-b-xl lg:border lg:border-t-0"
      >
        <div className="h-[calc(100dvh-211px-96px-57px)] px-4 lg:h-[calc(100dvh-252px-96px-57px)] lg:min-h-[561px] lg:pl-14 lg:pr-12 lg:pt-0">
          {Object.keys(data).map((category, i) => (
            <div key={i} className="pt-8 last:pb-[60px] lg:pt-[60px]">
              <Group
                name={category}
                items={data[category].map((product) => product)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
