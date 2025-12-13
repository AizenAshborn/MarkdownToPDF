'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

// Simple consent banner that loads Google Funding Choices (CMP) script.
// It supports two modes:
//   - two choices: "Accept" and "Manage"
//   - three choices: "Accept", "Reject", "Manage"
// The mode is controlled by the `showReject` prop.
// Consent is stored in localStorage under 'gdpr_consent' to avoid showing repeatedly.

type ConsentBannerProps = {
    publisherId: string; // e.g. 'ca-pub-1494650266840512'
    showReject?: boolean; // true => 3‑button version, false => 2‑button version
};

export const ConsentBanner = ({ publisherId, showReject = false }: ConsentBannerProps) => {
    const [visible, setVisible] = useState(false);

    // Load Google Funding Choices script (Google CMP) once.
    useEffect(() => {
        // If consent already stored, do nothing.
        if (typeof window !== 'undefined' && localStorage.getItem('gdpr_consent')) {
            return;
        }
        // Show banner while script loads.
        setVisible(true);
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://fundingchoicesmessages.google.com/api/message?publisherId=${publisherId}`;
        script.onload = () => {
            // The script will render its own UI if the publisher has a custom message.
            // We keep our fallback UI visible until the user interacts.
        };
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, [publisherId]);

    const accept = () => {
        localStorage.setItem('gdpr_consent', 'accepted');
        setVisible(false);
        // Inform Google Consent Mode (if used elsewhere).
        // @ts-ignore
        if (window.gtag) window.gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted' });
    };

    const reject = () => {
        localStorage.setItem('gdpr_consent', 'rejected');
        setVisible(false);
        // @ts-ignore
        if (window.gtag) window.gtag('consent', 'update', { ad_storage: 'denied', analytics_storage: 'denied' });
    };

    const manage = () => {
        // Open the Google CMP UI (if available).
        // The Funding Choices script registers a global function `__tcfapi`.
        // We call it to open the UI.
        // @ts-ignore
        if (window.__tcfapi) {
            // The second argument is the version, third is the callback.
            // The UI will be shown automatically.
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            // @ts-ignore
            window.__tcfapi('showOverlay', 2, () => { });
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <Cookie className="h-5 w-5 text-primary" />
                <p className="text-sm text-gray-800 dark:text-gray-200">
                    We use cookies and similar technologies to improve your experience and show personalized ads. By clicking "Accept", you consent to the use of these technologies.
                </p>
            </div>
            <div className="flex space-x-2">
                <Button variant="default" onClick={accept}>Accept</Button>
                {showReject && <Button variant="destructive" onClick={reject}>Do not consent</Button>}
                <Button variant="outline" onClick={manage}>Manage</Button>
            </div>
        </div>
    );
};
