'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type SimulatedAdProps = {
  advertiser: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  ctaText: string;
  href: string;
};

export const SimulatedAd = ({
  advertiser,
  title,
  imageUrl,
  imageHint,
  ctaText,
  href,
}: SimulatedAdProps) => {
  const [width, height] = imageUrl.split('/').slice(-2).map(Number);
  
  return (
    <Card className="w-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <div className="relative w-full aspect-[300/250]">
             <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                data-ai-hint={imageHint}
              />
          </div>
          <div className="p-4">
            <p className="text-xs text-muted-foreground font-semibold uppercase">{advertiser}</p>
            <h4 className="font-bold text-sm text-foreground leading-tight mt-1">{title}</h4>
             <Button size="sm" className="w-full mt-4">
              {ctaText}
            </Button>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};
