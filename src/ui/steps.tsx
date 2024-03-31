type Props = {
  count: number;
  current: number;
};

export default function Steps({ count, current }: Props) {
  return (
    <div className="flex h-12 items-center gap-x-8 rounded-full border border-[#D3DBDA] px-6 font-bold text-brand-indigo">
      <p className="text-sm leading-[16px]">
        Step {current}/{count}
      </p>

      <div className="flex gap-x-2">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${i + 1 <= current ? "bg-brand-indigo" : "bg-[#E0E8E4]"}`}
          />
        ))}
      </div>
    </div>
  );
}
