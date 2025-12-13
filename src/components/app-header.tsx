import { Rss } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-md" />
          <span className="font-bold font-headline text-xl">MarkdownPDFConverter.com</span>
        </Link>
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/cheatsheet">Cheatsheet</Link>
          </Button>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#">
              <Rss className="h-5 w-5" />
              <span className="sr-only">RSS Feed</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
