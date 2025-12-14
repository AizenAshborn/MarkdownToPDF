'use client';

import { Menu, Rss } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { usePro } from '@/providers/pro-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AppHeader = () => {
  const { isPro } = usePro();
  const pathname = usePathname();

  const isPdfToMdPage = pathname === '/pdf-to-markdown';
  const toggleLinkUrl = isPdfToMdPage ? '/' : '/pdf-to-markdown';
  const toggleLinkText = isPdfToMdPage ? 'MD → PDF' : 'PDF → MD';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 mr-2 sm:mr-6">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="shrink-0" />
            <span className="font-bold font-headline text-sm sm:text-xl leading-none truncate max-w-[200px] sm:max-w-none">MarkdownPDFConverter.com</span>
            {isPro && (
              <span className="ml-1 sm:ml-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                Pro
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-2 sm:space-x-4 ml-0 sm:ml-2">
            <Link href={toggleLinkUrl} className="font-bold font-headline text-sm sm:text-xl text-primary hover:underline transition-colors shrink-0 whitespace-nowrap">
              {toggleLinkText}
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" asChild>
                <Link href="/#pricing">Pricing</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/blog">Blog</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/docs">Docs</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/cheatsheet" className="text-sm font-medium hover:text-primary transition-colors">
                  Cheatsheet
                </Link>
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/#pricing" className="w-full cursor-pointer">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog" className="w-full cursor-pointer">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/docs" className="w-full cursor-pointer">Docs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/cheatsheet" className="w-full cursor-pointer">Cheatsheet</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
