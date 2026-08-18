import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ouassim Hammadi — Full Stack Engineer',
  description:
    'Portfolio of Ouassim Hammadi, Full Stack Engineer specializing in microservices, AI-powered platforms, and scalable systems.',
  openGraph: {
    title: 'Ouassim Hammadi — Full Stack Engineer',
    description:
      'Portfolio of Ouassim Hammadi, Full Stack Engineer specializing in microservices, AI-powered platforms, and scalable systems.',
    url: siteUrl,
    siteName: 'Ouassim Hammadi Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
