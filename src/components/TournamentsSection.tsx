import { useState } from "react";
import { motion } from "framer-motion";
import { TournamentsEmpty } from "./TournamentsEmpty";

const FILTERS = ["Все", "Активные", "Предстоящие", "Завершённые"] as const;
type Filter = (typeof FILTERS)[number];

export const TournamentsSection = () => {
  const [active, setActive] = useState<Filter>("Все");

  return (
    <section className="container pb-32 pt-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            Активные события
          </div>
          <h2 className="font-display mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Турниры
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors " +
                  (isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary shadow-[0_6px_20px_-10px_hsl(var(--primary)/0.7)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.02]" />
                )}
                {f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <TournamentsEmpty />
      </div>
    </section>
  );
};

export default TournamentsSection;
