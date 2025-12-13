import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://markdownpdfconverter.com';

    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    return [...routes, ...posts];
}
