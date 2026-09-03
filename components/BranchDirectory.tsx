"use client";

import { useMemo, useState } from "react";
import { branches, regions, type Branch } from "@/lib/branches";

export default function BranchDirectory() {
  const [region, setRegion] = useState<Branch["region"] | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return branches.filter((b) => {
      const matchesRegion = region === "All" || b.region === region;
      const matchesQuery = b.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesRegion && matchesQuery;
    });
  }, [region, query]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setRegion("All")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
              region === "All"
                ? "bg-crimson text-paper border-crimson"
                : "border-ink/15 text-ink/60 hover:border-crimson/40 hover:text-crimson"
            }`}
          >
            All provinces
          </button>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                region === r
                  ? "bg-crimson text-paper border-crimson"
                  : "border-ink/15 text-ink/60 hover:border-crimson/40 hover:text-crimson"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <label className="relative w-full lg:w-72">
          <span className="sr-only">Search branches</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by branch name…"
            className="w-full rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm outline-none focus:border-crimson transition-colors"
          />
        </label>
      </div>

      <p className="mb-8 text-sm text-clay/50">
        Showing {filtered.length} of {branches.length} branches
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-sm border border-dashed border-ink/20 py-16 text-center text-clay/60">
          No branches match &ldquo;{query}&rdquo;. Try another search or province.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((b) => (
            <div
              key={b.name}
              className="group rounded-sm border border-ink/10 bg-paper p-6 hover:border-crimson/40 hover:shadow-[0_8px_30px_-15px_rgba(150,24,42,0.35)] transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-medium leading-snug">
                  {b.name}
                </h3>
                <span className="shrink-0 rounded-full bg-paper-dim px-2.5 py-1 text-[11px] font-medium text-clay/60">
                  {b.region}
                </span>
              </div>
              <p className="mt-3 text-sm text-clay/70">{b.address}</p>
              <p className="mt-1.5 text-xs font-medium text-crimson">{b.hours}</p>
              <a
                href={b.mapUrl}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 group-hover:text-crimson transition-colors"
              >
                Get directions
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
