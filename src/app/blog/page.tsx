import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { placeholderAds } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 'mastering-markdown',
    title: 'Mastering Markdown: A Beginner\'s Guide to Professional Documents',
    description: 'Learn the fundamentals of Markdown and how to create beautifully formatted documents for any purpose.',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    readTime: '7 min read',
    tags: ['Markdown', 'Productivity', 'Writing'],
    imageUrl: 'https://picsum.photos/seed/blog1/800/400',
    imageHint: 'desk writing',
  },
  {
    id: 'pdf-templates',
    title: 'Why Professional PDF Templates Matter for Your Business',
    description: 'Discover how using high-quality templates can elevate your brand and make your documents stand out.',
    author: 'John Smith',
    date: 'October 24, 2023',
    readTime: '5 min read',
    tags: ['Business', 'Design', 'Templates'],
    imageUrl: 'https://picsum.photos/seed/blog2/800/400',
    imageHint: 'design templates',
  },
  {
    id: 'seo-with-markdown',
    title: 'Boost Your SEO: Leveraging Markdown for Content Marketing',
    description: 'A deep dive into how writing in Markdown can streamline your content workflow and improve search engine rankings.',
    author: 'Emily White',
    date: 'October 20, 2023',
    readTime: '9 min read',
    tags: ['SEO', 'Marketing', 'Markdown'],
    imageUrl: 'https://picsum.photos/seed/blog3/800/400',
    imageHint: 'analytics chart',
  },
   {
    id: 'advanced-styling',
    title: 'Advanced PDF Styling with AI',
    description: 'Explore how MarkdownToPDF.ca uses AI to give you fine-grained control over the look and feel of your documents.',
    author: 'Chris Green',
    date: 'October 18, 2023',
    readTime: '6 min read',
    tags: ['AI', 'Styling', 'PDF'],
    imageUrl: 'https://picsum.photos/seed/blog4/800/400',
    imageHint: 'ai technology',
  },
];

const allTags = [...new Set(blogPosts.flatMap(p => p.tags))];

export default function BlogPage() {
  const footerAd = placeholderAds[6];

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
            The MarkdownToPDF.ca Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tips, tricks, and insights on document creation, productivity, and design.
          </p>
        </div>

        <div className="mb-8">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="secondary">All Posts</Badge>
                {allTags.map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                    </div>
                    <h3 className="font-bold text-xl leading-tight mb-2 font-headline">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                    <div className="text-xs text-muted-foreground">
                      <span>{post.author} &bull; {post.date} &bull; {post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <AppFooter ad={footerAd} />
    </div>
  );
}
