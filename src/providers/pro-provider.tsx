'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type ProContextType = {
    isPro: boolean;
    setProConfig: (status: boolean) => void;
};

const ProContext = createContext<ProContextType>({
    isPro: false,
    setProConfig: () => { },
});

export const usePro = () => useContext(ProContext);

export const ProProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPro, setIsPro] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('mdpdf_pro_status');
        if (stored === 'true') {
            setIsPro(true);
        }
    }, []);

    const setProConfig = (status: boolean) => {
        setIsPro(status);
        if (status) {
            localStorage.setItem('mdpdf_pro_status', 'true');
        } else {
            localStorage.removeItem('mdpdf_pro_status');
        }
    };

    // Avoid hydration mismatch by rendering nothing or default until mounted?
    // Or just render children. isPro defaults to false.
    // If we want to prevent flash of ads for Pro users, we might want to wait?
    // But rendering children immediately is better for LCP.

    return (
        <ProContext.Provider value={{ isPro, setProConfig }}>
            {children}
        </ProContext.Provider>
    );
};
