import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { MobileNav } from '@/components/MobileNav';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  title: 'BlackTemple VPN Support',
  description: 'Knowledge base and support documentation for BlackTemple VPN.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased bg-zinc-950 text-zinc-300 min-h-screen flex flex-col md:flex-row" suppressHydrationWarning>
        <LanguageProvider>
          <Sidebar />
          <MobileNav />
          <main className="flex-1 md:ml-64 pt-16 md:pt-0">
            <div className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
              {children}
            </div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}

