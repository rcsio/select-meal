import Star from "@/icons/star";

export default function Rating({ value }: { value: number }) {
  return (
    <span className="ml-5 flex items-center gap-x-0.5 text-sm font-semibold text-[#79E003]">
      {value} <Star className="h-3" />
    </span>
  );
}
