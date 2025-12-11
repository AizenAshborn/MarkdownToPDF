import { FileText, Rss } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <FileText className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl">Markdwn2PDF</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
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
