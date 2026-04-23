import { motion } from "framer-motion";
import { Flag } from "lucide-react";

export const LeaderPreviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-full max-w-sm overflow-hidden rounded-2xl p-5 shadow-[0_30px_60px_-25px_hsl(150_30%_8%/0.55),0_12px_24px_-12px_hsl(150_30%_8%/0.35)] ring-1 ring-black/40"
      style={{
        background:
          "linear-gradient(160deg, hsl(150 35% 10%) 0%, hsl(158 45% 14%) 60%, hsl(150 30% 8%) 100%)",
      }}
    >
      <div className="relative flex items-center justify-between">
        <span className="overline text-[10px] font-medium text-white/55">
          Текущий лидер
        </span>
        <span className="overline inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-semibold text-primary-glow ring-1 ring-primary/40">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" />
          Live
        </span>
      </div>

      <div className="relative mt-5 flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold text-primary-foreground ring-2 ring-white/10"
          style={{
            background:
              "linear-gradient(140deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%)",
            letterSpacing: "-0.02em",
          }}
        >
          АК
        </div>
        <div className="flex-1 min-w-0">
          <div className="ui-label text-base font-semibold text-white">Александр Климов</div>
          <div className="ui-label text-xs text-white/60">Раковский Гольф-Клуб · Раунд 1</div>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 rounded-xl border border-white/10 bg-black/30 py-3">
        <div className="flex flex-col items-center">
          <span className="overline text-[10px] text-white/55">Поз.</span>
          <span className="font-mono-tab mt-1.5 text-lg font-semibold text-gold">T1</span>
        </div>
        <div className="flex flex-col items-center border-x border-white/10">
          <span className="overline text-[10px] text-white/55">Счёт</span>
          <span className="font-mono-tab mt-1.5 text-lg font-semibold text-primary-glow">−4</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="overline text-[10px] text-white/55">Лунка</span>
          <span className="font-mono-tab mt-1.5 inline-flex items-center gap-1 text-lg font-semibold text-white">
            <Flag className="h-3.5 w-3.5 text-gold" /> 14<span className="text-white/50">/18</span>
          </span>
        </div>
      </div>

      {/* corner accents */}
      <div className="pointer-events-none absolute -right-px -top-px h-20 w-20 rounded-tr-2xl bg-[radial-gradient(circle_at_top_right,hsl(var(--gold)/0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-px -left-px h-20 w-20 rounded-bl-2xl bg-[radial-gradient(circle_at_bottom_left,hsl(var(--teal)/0.28),transparent_70%)]" />
    </motion.div>
  );
};

export default LeaderPreviewCard;
