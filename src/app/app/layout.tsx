export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[20rem_1fr] gap-4">
      <main>{children}</main>
    </div>
  );
}
