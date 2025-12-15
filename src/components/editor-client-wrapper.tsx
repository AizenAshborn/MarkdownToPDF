'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Editor = dynamic(() => import('@/components/editor'), {
    loading: () => (
        <div className="h-[600px] w-full bg-muted/20 animate-pulse rounded-xl border border-dashed border-muted-foreground/20 flex flex-col items-center justify-center text-muted-foreground gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <p>Loading Editor...</p>
        </div>
    ),
    ssr: false
});

export default function EditorClientWrapper() {
    return <Editor />;
}
