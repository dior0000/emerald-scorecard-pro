import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopBar = () => {
  return (
    <header className="glass-strong sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="group flex items-center gap-3">
          <span
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground shadow-[0_8px_24px_-10px_hsl(var(--primary)/0.7)]"
            style={{
              background:
                "linear-gradient(140deg, hsl(var(--primary)) 0%, hsl(var(--primary-glow)) 100%)",
            }}
          >
            <Trophy className="h-[18px] w-[18px]" strokeWidth={2.2} />
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="display-h3 text-[16px] text-foreground">
              Minsk Golf
            </span>
            <span className="overline mt-1 text-[10px] font-medium text-gold">
              Live Scoring
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {["Турниры", "Лидерборд", "Игроки", "О проекте"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          className="h-9 rounded-full bg-primary px-5 text-primary-foreground shadow-[0_6px_20px_-8px_hsl(var(--primary)/0.7)] transition-all hover:bg-primary/90 hover:shadow-[0_10px_28px_-8px_hsl(var(--primary)/0.85)] active:scale-[0.98]"
        >
          Войти
        </Button>
      </div>
    </header>
  );
};

export default TopBar;
