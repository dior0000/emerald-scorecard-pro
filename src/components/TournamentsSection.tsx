import { useState } from "react";
import { motion } from "framer-motion";
import { TournamentsEmpty } from "./TournamentsEmpty";
import golfParallax from "@/assets/golf-parallax.webp";

const FILTERS = ["Все", "Активные", "Предстоящие", "Завершённые"] as const;
type Filter = (typeof FILTERS)[number];

export const TournamentsSection = () => {
  const [active, setActive] = useState<Filter>("Все");

  return (
    <section className="relative overflow-hidden pb-32 pt-8">
      {/* Background image + dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={golfParallax}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          style={{ filter: "saturate(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(150 25% 6% / 0.95) 0%, hsl(150 25% 6% / 0.55) 30%, hsl(150 25% 6% / 0.7) 70%, hsl(150 25% 6% / 0.98) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            Активные события
          </div>
          <h2 className="font-display mt-2 text-5xl font-bold text-foreground sm:text-6xl">
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

      <div className="container relative z-10 mt-10">
        <TournamentsEmpty />
      </div>
    </section>
  );
};

export default TournamentsSection;
