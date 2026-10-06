import type { Metadata, Viewport } from 'next';
import { Allura, Archivo, IBM_Plex_Mono, Playfair_Display, Cormorant_Garamond, DM_Sans, Great_Vibes } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer/Footer';
import { CinematicLoader } from '@/components/loader/CinematicLoader';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { Header } from '@/components/navigation/Header';
import { Grain } from '@/components/ui/Grain';
import { SkipLink } from '@/components/ui/SkipLink';
import { siteConfig } from '@/lib/site.config';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400'],
});

const allura = Allura({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-allura',
  weight: ['400'],
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plex-mono',
  weight: ['400'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: ['400'],
});

const title = `${siteConfig.brandName} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.brandName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.brandName,
    title,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.shortDescription,
  },
  robots: { index: true, follow: true },
  category: 'photography',
};

export const viewport: Viewport = {
  themeColor: '#08080a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${allura.variable} ${archivo.variable} ${plexMono.variable} ${cormorant.variable} ${dmSans.variable} ${greatVibes.variable}`}
    >
      <body style={{ margin: 0 }}>
        <CinematicLoader />
        <Header />
        {children}
        <Footer />
        <Grain />
        <SkipLink />
        <SmoothScroll />
      </body>
    </html>
  );
}
