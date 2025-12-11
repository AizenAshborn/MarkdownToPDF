'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

type VideoAdModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdFinished: () => void;
};

export const VideoAdModal = ({ isOpen, onClose, onAdFinished }: VideoAdModalProps) => {
  const [countdown, setCountdown] = useState(5);
  const [isSkippable, setIsSkippable] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when modal is closed
      setCountdown(5);
      setIsSkippable(false);
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsSkippable(true);
    }
  }, [isOpen, countdown]);

  const handleSkipAd = () => {
    onClose();
    onAdFinished();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Your download will begin shortly...</DialogTitle>
          <DialogDescription>
            Our sponsors make free conversions possible.
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video bg-black text-white flex items-center justify-center rounded-md">
            <p>Video Ad Playing...</p>
        </div>
        <DialogFooter className="sm:justify-end">
            <Button 
                onClick={handleSkipAd}
                disabled={!isSkippable}
            >
                {isSkippable ? 'Skip Ad & Download' : (
                    <>
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                        Skip in {countdown}s
                    </>
                )}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
