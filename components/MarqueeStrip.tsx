const ITEMS = [
  "Est. 1989",
  "16 branches island-wide",
  "Sri Lankan owned",
  "Beyond Tradition",
  "Menswear · Womenswear · Kidswear",
];

export default function MarqueeStrip() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-paper-dim py-3.5">
      <div className="flex w-max marquee-track">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center shrink-0">
            {loop.map((item, i) => (
              <span key={`${set}-${i}`} className="flex items-center">
                <span className="px-6 text-sm font-medium text-clay whitespace-nowrap">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-crimson/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
