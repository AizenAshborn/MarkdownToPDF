
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import { placeholderAds } from '@/lib/placeholder-images';
import { getPostById, blogPosts } from '@/lib/blog-content';
import { marked } from 'marked';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { JsonLd } from '@/components/json-ld';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostById(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            images: [
                {
                    url: post.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostById(slug);

    if (!post) {
        notFound();
    }

    const htmlContent = await marked.parse(post.content);
    const footerAd = placeholderAds[6];

    // Schema.org Article Structured Data
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [post.imageUrl],
        datePublished: new Date(post.date).toISOString(),
        author: [{
            '@type': 'Person',
            name: post.author,
        }],
        description: post.description,
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={articleSchema} />
            <AppHeader />

            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <article className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <Badge variant="outline" className="mb-4">{post.tags[0]}</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-muted-foreground">
                            <span>{post.author}</span>
                            <span>&bull;</span>
                            <span>{post.date}</span>
                            <span>&bull;</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[21/9] mb-12 rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0">
                            <div
                                className="prose prose-lg dark:prose-invert max-w-none mx-auto
                        prose-headings:font-headline prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-lg prose-img:shadow-md"
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        </CardContent>
                    </Card>

                    <div className="mt-12 pt-8 border-t">
                        <h4 className="font-bold mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <AppFooter ad={footerAd} />
        </div>
    );
}
