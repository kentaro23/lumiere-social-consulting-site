import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { contactEmail, siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: '規約配慮×世界観設計のInstagram運用支援 | Lumiere Social',
    template: '%s | Lumiere Social'
  },
  description: siteConfig.description,
  openGraph: {
    title: '規約配慮×世界観設計のInstagram運用支援 | Lumiere Social',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/og-placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Lumiere Social'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '規約配慮×世界観設計のInstagram運用支援 | Lumiere Social',
    description: siteConfig.description,
    images: ['/images/og-placeholder.svg']
  }
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  email: contactEmail,
  sameAs: [],
  description: siteConfig.description,
  areaServed: 'JP'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="min-h-screen bg-black/40">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
