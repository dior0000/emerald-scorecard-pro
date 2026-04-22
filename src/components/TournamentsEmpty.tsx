import { motion } from "framer-motion";
import { Bell, Plus } from "lucide-react";

export const TournamentsEmpty = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[20px] border border-dashed border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-10 sm:p-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 300px at 50% 0%, hsl(var(--primary) / 0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        {/* Custom flag-on-green SVG */}
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none" aria-hidden>
          <ellipse cx="100" cy="160" rx="78" ry="14" fill="hsl(var(--primary) / 0.18)" />
          <ellipse cx="100" cy="156" rx="60" ry="9" fill="hsl(var(--primary) / 0.10)" />
          <line x1="108" y1="40" x2="108" y2="156" stroke="hsl(var(--foreground) / 0.55)" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M108 42 L 162 56 L 108 74 Z"
            fill="hsl(var(--gold))"
          />
          <path d="M108 42 L 162 56" stroke="hsl(var(--gold) / 0.6)" strokeWidth="1" />
          <circle cx="108" cy="156" r="3.5" fill="hsl(var(--gold))" />
        </svg>

        <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Турниры скоро появятся
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Создайте первый турнир или дождитесь анонса от организатора — мы пришлём уведомление,
          когда стартует ближайшее событие.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button className="group glow-primary-soft inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
            <Plus className="h-4 w-4" />
            Создать турнир
          </button>
          <button className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/[0.05] active:scale-[0.98]">
            <Bell className="h-4 w-4 text-gold" />
            Уведомить меня
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TournamentsEmpty;
