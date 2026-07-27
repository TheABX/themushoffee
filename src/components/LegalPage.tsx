export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-ink">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-sm text-ink-soft">Last updated: {updated}</p>
        )}
        <div className="prose-legal mt-10 space-y-6 text-sm sm:text-base leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </article>
  );
}
