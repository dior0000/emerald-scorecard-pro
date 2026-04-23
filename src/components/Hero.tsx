import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import { LiveDot } from "./LiveDot";
import { LeaderPreviewCard } from "./LeaderPreviewCard";
import golfCourseBg from "@/assets/golf-course-bg.webp";

const today = new Date().toLocaleDateString("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background: golf course photo + dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={golfCourseBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(1.1) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(0 0% 100% / 0.78) 0%, hsl(0 0% 100% / 0.85) 45%, hsl(150 30% 99% / 0.98) 100%), radial-gradient(900px 600px at 25% 20%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(700px 500px at 80% 30%, hsl(var(--teal) / 0.14), transparent 65%), radial-gradient(600px 500px at 60% 90%, hsl(var(--gold) / 0.14), transparent 65%)",
          }}
        />
        <svg
          className="absolute -right-32 top-10 h-[640px] w-[640px] opacity-[0.07]"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden
        >
          <path
            d="M80 360 C 140 200, 320 120, 460 200 S 560 460, 380 500 S 80 520, 80 360 Z"
            stroke="hsl(var(--primary))"
            strokeWidth="1.2"
          />
          <path
            d="M150 360 C 200 240, 340 180, 440 240 S 500 440, 360 470 S 150 460, 150 360 Z"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
          />
          <circle cx="430" cy="220" r="4" fill="hsl(var(--gold))" />
          <line x1="430" y1="220" x2="430" y2="160" stroke="hsl(var(--gold))" strokeWidth="1.2" />
          <path d="M430 160 L 460 168 L 430 176 Z" fill="hsl(var(--gold))" />
        </svg>
      </div>

      <div className="container relative z-10 grid grid-cols-1 items-center gap-14 pb-24 pt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-10 lg:pb-32 lg:pt-24">
        {/* Left column */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <LiveDot label="Live" />
            <span className="overline text-xs text-muted-foreground">
              {today}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="display-hero mt-6"
            style={{ fontSize: "clamp(3.25rem, 10vw, 8rem)" }}
          >
            <span className="text-gradient-emerald block">Live</span>
            <span className="text-gradient-emerald block">Scoring</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ui-label mt-7 max-w-[480px] text-[15px] text-muted-foreground"
          >
            Записывайте счёт раунда в реальном времени, следите за лидербордом турниров Minsk Golf
            и делитесь результатами одним нажатием.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              className="group glow-primary inline-flex h-[52px] items-center gap-3 rounded-xl bg-primary px-6 text-[15px] font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Войти и записать счёт
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex h-[52px] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-6 text-[15px] font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/[0.05] active:scale-[0.98]">
              <BarChart3 className="h-4 w-4 text-gold" />
              Смотреть лидерборд
            </button>
          </motion.div>

          {/* Subtle stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 pt-2"
          >
            {[
              { v: "12", l: "Турниров", c: "text-foreground" },
              { v: "184", l: "Игроков", c: "text-teal" },
              { v: "9.6k", l: "Сыграно лунок", c: "text-gold" },
            ].map((s) => (
              <div key={s.l}>
                <div className={`font-mono-tab text-2xl font-semibold ${s.c}`}>{s.v}</div>
                <div className="overline mt-1.5 text-[10px] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — leader preview, hidden on mobile */}
        <div className="hidden justify-self-end lg:block">
          <LeaderPreviewCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
