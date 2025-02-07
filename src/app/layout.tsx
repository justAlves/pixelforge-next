import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import TitleBar from "@/components/title-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle-mode";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: "PixelForge",
  description: "Onde Criadores e Jogadores se Encontram!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TitleBar/>
            <Header/>
            {children}
            <footer className="w-full h-16 bg-background/90 flex flex-col items-center justify-center">
              <p className="text-sm font-inter">© 2025 <span className="text-app_primary">Pixel</span>Forge</p>
              <p className="text-sm font-inter ml-4">Todos os direitos reservados</p>
            </footer>
            <Toaster/>  
          </ThemeProvider>
      </body>
    </html>
  );
}
