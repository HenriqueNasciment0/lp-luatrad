import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Lua Abreu - Tradutora Profissional | Inglês ⇆ Português',
  description:
    'Traduções profissionais, legendagem de vídeos e interpretação simultânea online. Conectando pessoas e negócios através da comunicação.',
  keywords:
    'tradução, tradutor, inglês, português, legendagem, interpretação simultânea, freelancer',
  authors: [{ name: 'Lua abreu' }],
  openGraph: {
    title: 'Lua Abreu - Tradutora Profissional',
    description: 'Traduções profissionais que conectam pessoas e negócios',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
