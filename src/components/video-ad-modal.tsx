'use client';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { AdUnit } from './ad-unit';
import { placeholderAds } from '@/lib/placeholder-images';

type VideoAdModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdFinished: () => void;
  adSlotId?: string;
};

export const VideoAdModal = ({ isOpen, onClose, onAdFinished, adSlotId }: VideoAdModalProps) => {
  const [countdown, setCountdown] = useState(5);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5);
      setIsReady(false);
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
      // Optional: Auto-finish after timer? No, let user click "Continue" or "Download"
      // But for better UX, maybe auto-close? 
      // User pattern: Wait 5s -> "Continue" button enables.
    }
  }, [isOpen, countdown]);

  const handleContinue = () => {
    onClose();
    onAdFinished();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-card" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Converting Document...</DialogTitle>
          <DialogDescription>
            Please wait while we process your PDF using AI.
          </DialogDescription>
        </DialogHeader>

        {/* Ad Unit Area */}
        <div className="flex justify-center py-4 bg-muted/30 rounded-lg min-h-[280px]">
          <AdUnit
            slotId={adSlotId}
            format="rectangle"
            placeholderProps={placeholderAds[5]}
            style={{ width: '300px', height: '250px' }}
          />
        </div>

        <DialogFooter className="sm:justify-center flex-col sm:flex-col gap-2">
          <p className="text-center text-xs text-muted-foreground mb-2">
            Advertisement helps keep this tool free.
          </p>
          <Button
            onClick={handleContinue}
            disabled={!isReady}
            className="w-full"
            size="lg"
          >
            {!isReady ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Processing ({countdown}s)
              </>
            ) : (
              "View Result & Download"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
