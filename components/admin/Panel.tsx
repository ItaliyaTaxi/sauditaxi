export function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5">
      <h2 className="text-sm font-semibold text-neutral-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
