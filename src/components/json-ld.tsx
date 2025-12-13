'use client';

import Script from 'next/script';

interface JsonLdProps {
    data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            strategy="afterInteractive"
        />
    );
}

// Pre-built schema for the application
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MarkdownPDFConverter',
    url: 'https://markdownpdfconverter.com',
    description: 'Transform your Markdown documents into beautifully styled PDFs instantly. Free online converter with live preview, custom templates, and professional formatting options.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free tier with basic features',
    },
    featureList: [
        'Real-time Markdown Preview',
        'PDF Conversion and Export',
        'Template Selection',
        'Custom PDF Styling',
        'Statistics Dashboard',
    ],
    screenshot: 'https://markdownpdfconverter.com/og-image.png',
    softwareVersion: '1.0.0',
    creator: {
        '@type': 'Organization',
        name: 'MarkdownPDFConverter',
        url: 'https://markdownpdfconverter.com',
    },
};

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MarkdownPDFConverter',
    url: 'https://markdownpdfconverter.com',
    logo: 'https://markdownpdfconverter.com/logo.png',
    sameAs: [],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'English',
    },
};

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is MarkdownPDFConverter free to use?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! MarkdownPDFConverter offers a free tier that allows you to convert Markdown to PDF with basic templates. Premium features are available for advanced customization.',
            },
        },
        {
            '@type': 'Question',
            name: 'What markdown syntax is supported?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We support standard Markdown syntax including headers, lists, code blocks, tables, links, images, bold, italic, and more. GitHub Flavored Markdown (GFM) is also supported.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I customize the PDF output?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely! You can customize fonts, colors, margins, headers, footers, and choose from multiple professional templates to style your PDF output.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is my data secure?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Your documents are processed entirely in your browser. We do not store or transmit your content to external servers, ensuring complete privacy.',
            },
        },
    ],
};

export const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://markdownpdfconverter.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Editor',
            item: 'https://markdownpdfconverter.com/#editor',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Pricing',
            item: 'https://markdownpdfconverter.com/#pricing',
        },
    ],
};
