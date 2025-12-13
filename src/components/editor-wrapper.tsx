'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Editor = dynamic(() => import('./editor'), {
    ssr: false,
    loading: () => (
        <div className="grid md:grid-cols-2 gap-6 min-h-[70vh] p-6">
            <Skeleton className="h-[600px] w-full rounded-xl" />
            <Skeleton className="h-[600px] w-full rounded-xl" />
        </div>
    )
});

export default function EditorWrapper() {
    return <Editor />;
}
