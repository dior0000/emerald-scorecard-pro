import { motion } from "framer-motion";
import { Calendar, Diamond, Sparkles, Lock, Trophy } from "lucide-react";
import { TOURNAMENTS_2026, STATUS_META, type TournamentStatus } from "@/data/tournaments2026";

const STATUS_ICON: Record<TournamentStatus, typeof Trophy> = {
  gold: Trophy,
  platinum: Sparkles,
  diamond: Diamond,
  custom: Lock,
};

export const TournamentSchedule = () => {
  // Group by month preserving original order
  const byMonth = TOURNAMENTS_2026.reduce<Record<string, typeof TOURNAMENTS_2026>>((acc, t) => {
    (acc[t.month] ||= []).push(t);
    return acc;
  }, {});
  const months = Object.keys(byMonth);

  return (
    <div className="glass relative overflow-hidden rounded-[24px] p-6 sm:p-10">
      {/* header */}
      <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="overline text-[11px] font-medium text-primary">
            Календарь
          </div>
          <h3 className="display-h2 mt-1 text-3xl text-foreground sm:text-4xl">
            Расписание турниров 2026
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 text-primary" />
          16 событий · апрель — июль
        </div>
      </div>

      {/* months */}
      <div className="mt-6 space-y-8">
        {months.map((month, mi) => (
          <motion.div
            key={month}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: mi * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overline mb-3 text-[11px] font-semibold text-foreground/80">
              {month}
            </div>

            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background/70">
              {byMonth[month].map((t, idx) => {
                const Icon = STATUS_ICON[t.status];
                const meta = STATUS_META[t.status];
                return (
                  <li
                    key={`${month}-${idx}`}
                    className="group flex flex-col items-start gap-3 px-4 py-4 transition-colors hover:bg-muted/60 sm:flex-row sm:items-center sm:gap-5 sm:px-5"
                  >
                    {/* date */}
                    <div className="flex w-full shrink-0 items-baseline gap-2 sm:w-32">
                      <span className="font-mono-tab text-2xl font-semibold text-foreground">
                        {t.date}
                      </span>
                      <span className="overline text-[10px] text-muted-foreground">
                        {t.weekday}
                      </span>
                    </div>

                    {/* name */}
                    <div className="min-w-0 flex-1">
                      <div className="text-[15px] font-semibold leading-snug text-foreground">
                        {t.name}
                      </div>
                      {t.subtitle && (
                        <div className="mt-0.5 text-[13px] text-muted-foreground">
                          {t.subtitle}
                        </div>
                      )}
                    </div>

                    {/* status + coefficient */}
                    <div className="flex shrink-0 items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ring-1 ${meta.chipClass}`}
                      >
                        <Icon className="h-3 w-3" strokeWidth={2.4} />
                        {meta.label}
                      </span>
                      {t.coefficient && (
                        <span className="font-mono-tab min-w-[2.5rem] rounded-md bg-foreground/5 px-2 py-1 text-right text-xs font-semibold text-foreground ring-1 ring-border">
                          ×{t.coefficient}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* legend */}
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
        <span className="overline text-[10px] font-semibold text-foreground/70">Статус турнира:</span>
        {(Object.keys(STATUS_META) as TournamentStatus[]).map((k) => {
          const m = STATUS_META[k];
          const Icon = STATUS_ICON[k];
          const labelRu =
            k === "gold" ? "Золотой" :
            k === "platinum" ? "Платиновый" :
            k === "diamond" ? "Бриллиантовый" : "Закрытый турнир";
          return (
            <span key={k} className="inline-flex items-center gap-1.5">
              <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ${m.chipClass}`}>
                <Icon className="h-2.5 w-2.5" strokeWidth={2.6} />
              </span>
              {labelRu}
            </span>
          );
        })}
        <span className="ml-auto text-[11px] text-muted-foreground/80">
          *Дата турнира может быть изменена
        </span>
      </div>
    </div>
  );
};

export default TournamentSchedule;
