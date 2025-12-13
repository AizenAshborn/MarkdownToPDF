import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://markdownpdfconverter.com'),
  title: {
    default: 'Markdown to PDF Converter | Free Online Tool - MarkdownPDFConverter.com',
    template: '%s | MarkdownPDFConverter.com',
  },
  description: 'Transform your Markdown documents into beautifully styled PDFs instantly. Free online converter with live preview, custom templates, and professional formatting options.',
  keywords: [
    'markdown to pdf',
    'markdown converter',
    'md to pdf',
    'free pdf converter',
    'online markdown editor',
    'markdown preview',
    'pdf generator',
    'document converter',
    'markdown formatting',
    'export markdown',
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
    siteName: 'MarkdownPDFConverter',
    title: 'Markdown to PDF Converter | Free Online Tool',
    description: 'Transform your Markdown documents into beautifully styled PDFs instantly. Free online converter with live preview, custom templates, and professional formatting.',
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
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
