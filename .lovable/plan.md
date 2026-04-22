
# Редизайн Minsk Golf — Live Scoring

Превратим текущий интерфейс в премиальное спортивное приложение в эстетике Masters / Apple Sports — с глубокой изумрудной палитрой, тонким золотом и матовым стеклом. Функциональность и навигация остаются прежними, меняется только визуал и UX-подача.

## Дизайн-система

**Палитра (HSL-токены в `index.css`)**
- `--background` #0A1410 — почти чёрный с зелёным подтоном
- `--surface` #0F1F18 — приподнятые поверхности
- `--card` rgba(20,40,30,0.6) + backdrop-blur
- `--primary` #15B87F — благородный зелёный
- `--gold` #D4B87A — акцент для победителей и hero
- `--foreground` #F5F7F5, `--muted-foreground` #8FA89B
- `--border` rgba(255,255,255,0.06)
- Радиальные градиенты в hero, едва заметный grain-overlay (2–3%)

**Типографика**
- Display: **Fraunces** (характер, для "LIVE SCORING")
- UI/Body: **Geist Sans** (или Inter fallback)
- Цифры счёта: **JetBrains Mono** + tabular-nums
- Подключение через Google Fonts с подмножествами latin + cyrillic

**Анимации:** Framer Motion — fade+slide для карточек (stagger 50ms), spring для bottom nav, пульсация LIVE-индикатора, hover-glow на CTA, scale 0.98 на active.

## Структура страниц и компонентов

**Верхний бар (`TopBar.tsx`)**
- Sticky с `backdrop-filter: blur(20px)`, тонкий бордер снизу
- Логотип: иконка кубка в зелёном gradient-квадрате с мягкой тенью; "MINSK GOLF" + золотистый "LIVE SCORING" под ним
- CTA "Войти" — pill-форма, primary green, hover-glow

**Hero (`Hero.tsx`)**
- Радиальный градиент тёмно-зелёный → почти чёрный, SVG-контур поля гольфа на фоне, мягкое световое пятно с лёгким parallax при скролле
- Бейдж `● LIVE` с пульсирующей точкой + дата
- Заголовок "LIVE SCORING" — clamp(4rem, 12vw, 9rem), tracking tight, gradient-fill (зелёный → белый → золото на последней букве)
- Подзаголовок узкой колонкой (max-width 480px)
- Primary CTA "Войти и записать счёт" (52px, radius 12px, glow + стрелка, сдвигающаяся на hover) + ghost CTA "Смотреть лидерборд"
- Справа на десктопе — живой превью-виджет лидера (аватар, счёт −4, позиция T1, лунка 14/18); скрыт на мобайле
- Асимметричная композиция, без центрирования всего

**Секция "Турниры" (`TournamentsSection.tsx`)**
- Overline "АКТИВНЫЕ СОБЫТИЯ" + крупный "Турниры"
- Фильтр-чипы: Все / Активные / Завершённые / Предстоящие
- Сетка карточек 1/2/3 колонки респонсивно
- `TournamentCard.tsx`: фон поля + dark overlay, статус-бейдж (LIVE/SOON/FINISHED), название, дата, участники, превью топ-3 аватаров; hover — приподнимается, появляется зелёный glow-бордер

**Empty State (`TournamentsEmpty.tsx`)**
- Кастомная SVG-иллюстрация: флаг на лунке с тенью
- Заголовок "Турниры скоро появятся" + подтекст
- Две кнопки: "Создать турнир" (primary) и "Уведомить меня" (ghost)
- Современный dashed border, radius 20px, щедрый padding

**Bottom Nav (`BottomNav.tsx`, мобайл)**
- Floating, отступ от краёв 16px, radius 24px, blur + тень
- Lucide иконки (Trophy, Play, BarChart3, User), 22px
- Активная: полупрозрачная зелёная подложка + glow, заполненная иконка
- Неактивные: outline, приглушённый цвет
- Spring-анимация переключения (Framer Motion layoutId)

**Утилиты**
- `LiveDot.tsx` — пульсирующий индикатор
- `GrainOverlay.tsx` — fixed SVG-noise на 2–3% opacity
- Skeleton-лоадеры для будущих состояний загрузки

## Файлы, которые меняем/создаём

- `index.html` — подключение Google Fonts (Fraunces, Geist Sans, JetBrains Mono с cyrillic)
- `tailwind.config.ts` — цветовые токены (gold, surface), font families, keyframes (pulse-live, glow, fade-up), tabular-nums
- `src/index.css` — HSL-переменные новой палитры, базовый фон, grain, scrollbar
- `src/pages/Index.tsx` — композиция: TopBar + Hero + TournamentsSection + BottomNav
- `src/components/TopBar.tsx`, `Hero.tsx`, `LeaderPreviewCard.tsx`, `TournamentsSection.tsx`, `TournamentCard.tsx`, `TournamentsEmpty.tsx`, `BottomNav.tsx`, `LiveDot.tsx`, `GrainOverlay.tsx`, `GoldButton.tsx` (опц.)
- Установка `framer-motion`

## Адаптивность
Mobile-first; на ≥1024px — двухколоночный hero, трёхколоночная сетка турниров, max-width 1280px с комфортными gutters. Bottom nav только на мобайле, на десктопе — навигация в TopBar.
