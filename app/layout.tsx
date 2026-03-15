import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import PortfolioNavigator from "./_components/PortfolioNavigator";
import ProfileSidebar from "./_components/ProfileSidebar";
import { ThemeToggle } from "./_components/ThemeToggle";
import { Toaster } from "./_components/ui/sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Danny Mousa - Frontend Developer",
  description:
    "Portfolio of Danny Mousa, a Frontend Developer specializing in modern web technologies",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className} font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
          <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
            <ThemeToggle />
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
              <ProfileSidebar />
              <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
                <PortfolioNavigator />
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">{children}</div>
              </main>
            </div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
