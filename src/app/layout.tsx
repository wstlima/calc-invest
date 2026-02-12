import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen text-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4">
          <main className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
