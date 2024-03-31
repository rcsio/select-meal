"use client";

import clsx from "clsx";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  options?: EmblaOptionsType;
  rubberBandEffect?: boolean;
};

export default function Carousel({
  children,
  className,
  options,
  rubberBandEffect = true,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const handleScroll = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!rubberBandEffect) {
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
      }
    },
    [rubberBandEffect],
  );

  useEffect(() => {
    if (emblaApi) emblaApi.on("scroll", handleScroll);
  }, [emblaApi, handleScroll]);

  return (
    <div className={clsx("overflow-hidden", className)} ref={emblaRef}>
      {children}
    </div>
  );
}
