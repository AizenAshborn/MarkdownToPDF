import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { placeholderAds } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { blogPosts, getAllTags } from '@/lib/blog-content';

export default function BlogPage() {
  const allTags = getAllTags();

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
