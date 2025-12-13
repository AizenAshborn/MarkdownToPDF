import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AdSenseScript } from '@/components/adsense-script';
import { ConsentBanner } from '@/components/consent-banner';
import { ProProvider } from "@/providers/pro-provider";
export const metadata: Metadata = {
  metadataBase: new URL('https://markdownpdfconverter.com'),
  title: {
    default: 'AI Markdown to PDF & PDF to Markdown | Free Artificial Intelligence Converter',
    template: '%s | AI Markdown to PDF Tool',
  },
  description: 'Convert Markdown to PDF and PDF to Markdown using advanced AI. Free online tool with Artificial Intelligence styling, live preview, and smart document analysis.',
  keywords: [
    'markdown to pdf',
    'pdf to markdown',
    'ai converter',
    'artificial intelligence tool',
    'gemini pdf',
    'extract markdown',
    'markdown converter',
    'md to pdf',
    'free pdf converter',
    'online markdown editor',
    'smart document conversion',
    'Best ai markdown to pdf converter free',
    'Ai markdown to pdf converter free without watermark',
    'Ai markdown to pdf converter free download',
    'Markdown to PDF online',
    'MD to PDF converter free',
    'Markdown to PDF VSCode alternative',
    'Best Markdown to PDF converter',
  ],
  authors: [{ name: 'MarkdownPDFConverter' }],
  creator: 'MarkdownPDFConverter',
  publisher: 'MarkdownPDFConverter',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://markdownpdfconverter.com',
    siteName: 'AI MarkdownPDFConverter',
    title: 'AI Markdown to PDF & PDF to Markdown | Free Tool',
    description: 'Convert Markdown to PDF and PDF to Markdown using advanced Artificial Intelligence. Free online tool with live preview and smart formatting.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MarkdownPDFConverter - Convert Markdown to PDF',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown to PDF Converter | Free Online Tool',
    description: 'Transform your Markdown documents into beautifully styled PDFs instantly. Free online converter with live preview and custom templates.',
    images: ['/og-image.png'],
    creator: '@markdownpdf',
  },
  alternates: {
    canonical: 'https://markdownpdfconverter.com',
  },
  category: 'Technology',
  icons: {
    icon: [
      { url: '/icon.png?v=2' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png?v=2',
    apple: [
      { url: '/apple-icon.png?v=2' },
    ],
  },
  verification: {
    google: 'googled0d8e1d4eba1f7f4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2D3748" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="googled0d8e1d4eba1f7f4" />
        <meta name="google-adsense-account" content="ca-pub-1494650266840512" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1494650266840512"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body antialiased">
        <ProProvider>
          <ConsentBanner publisherId={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || 'ca-pub-1494650266840512'} showReject={true} />
          {children}
          <Toaster />
        </ProProvider>
      </body>
    </html>
  );
}
