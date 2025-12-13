'use client';

import Script from 'next/script';

type AdSenseScriptProps = {
    pId: string;
};

export function AdSenseScript({ pId }: AdSenseScriptProps) {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}
