'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { usePro } from '@/providers/pro-provider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PartyPopper } from 'lucide-react';

export const PaymentSuccessHandler = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { setProConfig } = usePro();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (searchParams.get('success') === 'true') {
            setProConfig(true);
            setShowModal(true);
            // Clean URL without reloading
            router.replace('/', { scroll: false });
        }
    }, [searchParams, setProConfig, router]);

    return (
        <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="sm:max-w-md text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <PartyPopper className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">Welcome to Pro!</DialogTitle>
                    <DialogDescription className="text-center text-lg">
                        Thank you for your support. You now have full access to:
                    </DialogDescription>
                </DialogHeader>
                <div className="text-left py-4 px-8">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <span className="text-primary">✨</span>
                            <span className="font-medium">Ad-Free Experience</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">🚀</span>
                            <span className="font-medium">Priority Conversions</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-primary">💎</span>
                            <span className="font-medium">Pro Badge</span>
                        </li>
                    </ul>
                </div>
                <DialogFooter className="sm:justify-center">
                    <Button onClick={() => setShowModal(false)} className="w-full" size="lg">
                        Start Creating
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
