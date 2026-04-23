export const LiveDot = ({ label = "LIVE" }: { label?: string }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-live rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      {label}
    </span>
  );
};

export default LiveDot;
