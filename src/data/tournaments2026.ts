export type TournamentStatus = "gold" | "platinum" | "diamond" | "custom";

export type Tournament = {
  date: string;        // e.g. "26", "16-17", "22-23"
  weekday: string;     // e.g. "СБ-ВС"
  month: string;       // e.g. "Апрель"
  monthIndex: number;  // 0-11
  name: string;
  subtitle?: string;
  status: TournamentStatus;
  coefficient?: string; // e.g. "1,5"
};

export const STATUS_META: Record<TournamentStatus, { label: string; chipClass: string; dotClass: string }> = {
  gold:     { label: "Gold",     chipClass: "bg-gold/15 text-gold ring-gold/30",                       dotClass: "bg-gold" },
  platinum: { label: "Platinum", chipClass: "bg-foreground/8 text-foreground ring-foreground/20",     dotClass: "bg-foreground/70" },
  diamond:  { label: "Diamond",  chipClass: "bg-teal/15 text-teal ring-teal/30",                       dotClass: "bg-teal" },
  custom:   { label: "Closed",   chipClass: "bg-primary/12 text-primary ring-primary/30",              dotClass: "bg-primary" },
};

export const TOURNAMENTS_2026: Tournament[] = [
  // Апрель
  { date: "26",    weekday: "СБ-ВС", month: "Апрель", monthIndex: 3, name: "III Весенний Кубок им. Н. Ермашова", subtitle: "by БСБК", status: "platinum", coefficient: "1,5" },

  // Май
  { date: "9",     weekday: "СБ",    month: "Май",    monthIndex: 4, name: "Hole in One Challenge", subtitle: "Академическое поле", status: "gold", coefficient: "1,2" },
  { date: "16-17", weekday: "СБ-ВС", month: "Май",    monthIndex: 4, name: "Whitebird Spring Open Cup", status: "platinum", coefficient: "1,7" },
  { date: "22-23", weekday: "ПТ-СБ", month: "Май",    monthIndex: 4, name: "Международные соревнования", subtitle: "Minsk Golf Invitational 2026", status: "custom" },
  { date: "31",    weekday: "ВС",    month: "Май",    monthIndex: 4, name: "Международный детский гольф-турнир «Луч»", status: "gold", coefficient: "1,5" },

  // Июнь
  { date: "7",     weekday: "ВС",    month: "Июнь",   monthIndex: 5, name: "XVIII Rookie Cup 2026", status: "gold", coefficient: "1,2" },
  { date: "12",    weekday: "ПТ",    month: "Июнь",   monthIndex: 5, name: "Hardy Cup", status: "custom" },
  { date: "13",    weekday: "СБ",    month: "Июнь",   monthIndex: 5, name: "Pets Day", status: "platinum", coefficient: "1,3" },
  { date: "26-28", weekday: "ПТ-ВС", month: "Июнь",   monthIndex: 5, name: "PRIME LINE CUP", status: "diamond", coefficient: "1,4" },

  // Июль
  { date: "4",     weekday: "СБ",    month: "Июль",   monthIndex: 6, name: "BELAVIA Golf Open 2026", status: "gold", coefficient: "1,5" },
  { date: "5",     weekday: "ВС",    month: "Июль",   monthIndex: 6, name: "XIX Rookie Cup 2026", status: "gold", coefficient: "1,2" },
  { date: "10-12", weekday: "ПТ-ВС", month: "Июль",   monthIndex: 6, name: "VIII Кубок Гольф-клуба Минск", status: "platinum", coefficient: "1,9" },
  { date: "19",    weekday: "ВС",    month: "Июль",   monthIndex: 6, name: "ФУТГОЛЬФ. Belarus Open", status: "gold" },
  { date: "24",    weekday: "ПТ",    month: "Июль",   monthIndex: 6, name: "II Кубок Братства", subtitle: "Беларусь — Россия by WhiteBird", status: "custom" },
  { date: "25-26", weekday: "СБ-ВС", month: "Июль",   monthIndex: 6, name: "Лига Гольфа (РФ) 3 этап, Минск", status: "custom" },
];
