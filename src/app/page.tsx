export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-16 xl:p-24">
      {children}
    </main>
  );
}
