import { motion } from "framer-motion";
import { Flag } from "lucide-react";

export const LeaderPreviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="glass relative w-full max-w-sm rounded-2xl p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Текущий лидер
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Live
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold text-primary-foreground"
          style={{
            background:
              "linear-gradient(140deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%)",
          }}
        >
          АК
        </div>
        <div className="flex-1">
          <div className="text-base font-semibold text-foreground">Александр Климов</div>
          <div className="text-xs text-muted-foreground">Раковский Гольф-Клуб · Раунд 1</div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-white/[0.06] rounded-xl border border-white/[0.06] bg-black/20 py-3">
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Поз.</span>
          <span className="font-mono-tab mt-1 text-lg font-semibold text-gold">T1</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Счёт</span>
          <span className="font-mono-tab mt-1 text-lg font-semibold text-primary">−4</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Лунка</span>
          <span className="font-mono-tab mt-1 inline-flex items-center gap-1 text-lg font-semibold text-foreground">
            <Flag className="h-3.5 w-3.5 text-gold" /> 14<span className="text-muted-foreground">/18</span>
          </span>
        </div>
      </div>

      {/* subtle gold corner accent */}
      <div className="pointer-events-none absolute -right-px -top-px h-16 w-16 rounded-tr-2xl bg-[radial-gradient(circle_at_top_right,hsl(var(--gold)/0.25),transparent_70%)]" />
    </motion.div>
  );
};

export default LeaderPreviewCard;
