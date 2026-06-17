// Shared section header: a monospace eyebrow + a display-face title.
function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <>
      <p className="font-mono text-xs tracking-[0.16em] uppercase text-verified flex items-center gap-2.5 mb-5">
        <span className="w-5 h-px bg-verified inline-block" />
        {label}
      </p>
      <h2 className="font-display font-bold text-ink text-[clamp(1.5rem,3.4vw,2.1rem)] tracking-tight">
        {title}
      </h2>
    </>
  );
}

export default SectionHead;
