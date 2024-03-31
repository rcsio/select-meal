import { EmblaCarouselType } from "embla-carousel";

export function preventExcessiveScroll(emblaApi: EmblaCarouselType) {
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
