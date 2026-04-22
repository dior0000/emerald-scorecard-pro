import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Play, BarChart3, User } from "lucide-react";

const items = [
  { id: "live", label: "Live", icon: Play },
  { id: "tournaments", label: "Турниры", icon: Trophy },
  { id: "stats", label: "Статистика", icon: BarChart3 },
  { id: "profile", label: "Профиль", icon: User },
] as const;

export const BottomNav = () => {
  const [active, setActive] = useState<string>("live");

  return (
    <nav
      className="glass fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-md items-center justify-between rounded-3xl px-2 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] md:hidden"
      aria-label="Главная навигация"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-medium"
          >
            {isActive && (
              <motion.span
                layoutId="bottom-nav-active"
                className="absolute inset-0 -z-10 rounded-2xl bg-primary/15 ring-1 ring-inset ring-primary/30"
                style={{ boxShadow: "0 0 24px -6px hsl(var(--primary) / 0.45)" }}
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
              />
            )}
            <Icon
              size={22}
              strokeWidth={isActive ? 2.4 : 1.8}
              className={isActive ? "text-primary" : "text-muted-foreground"}
              fill={isActive ? "hsl(var(--primary) / 0.18)" : "none"}
            />
            <span className={isActive ? "text-foreground" : "text-muted-foreground"}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
