'use client';

import { useEffect, useRef } from 'react';
import { SimulatedAd } from './simulated-ad';
import { PlaceholderAd } from '@/lib/placeholder-images';

type AdProps = {
    slotId?: string; // Google AdSense Slot ID
    format?: 'auto' | 'fluid' | 'rectangle';
    style?: React.CSSProperties;
    placeholderProps?: PlaceholderAd; // Fallback for dev mode
    className?: string;
};

const PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || 'ca-pub-1494650266840512';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const AdUnit = ({ slotId, format = 'auto', style, placeholderProps, className }: AdProps) => {
    // If we are in dev mode OR we don't have a Pub ID yet, show the Simulator.
    const shouldShowAdSense = IS_PRODUCTION && PUB_ID && slotId;

    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        if (shouldShowAdSense && adRef.current && typeof window !== 'undefined') {
            try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
                console.error('AdSense error', err);
            }
        }
    }, [shouldShowAdSense]);

    if (!shouldShowAdSense) {
        return placeholderProps ? <SimulatedAd {...placeholderProps} /> : null;
    }

    return (
        <div className={className} style={{ minHeight: '250px', width: '100%', overflow: 'hidden' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client={PUB_ID}
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
                ref={adRef}
            />
        </div>
    );
};
