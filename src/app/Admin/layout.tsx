export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-[lexend] bg-gray-50 min-h-screen p-10">
      {children}
    </main>
  );
}