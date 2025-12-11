import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { cn } from '@/lib/utils';

const tiers = [
    {
        name: "Starter",
        price: "$0",
        priceDetails: "/month",
        features: [
            "Up to 5 conversions per month",
            "Basic templates only (3 templates)",
            "Standard PDF quality",
            "Watermarked output",
            "10MB file size limit",
            "Community support",
            "Video ads on download",
        ],
        cta: "Get Started",
        isPopular: false,
    },
    {
        name: "Creator",
        price: "$9",
        priceDetails: "/month",
        features: [
            "Up to 100 conversions per month",
            "All premium templates (25+)",
            "High-quality PDF output",
            "No watermarks",
            "Custom styling options",
            "50MB file size limit",
            "Priority email support",
            "Ad-free experience",
        ],
        cta: "Upgrade Now",
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        priceDetails: "/month",
        features: [
            "Unlimited conversions",
            "All templates + custom design",
            "Maximum quality settings",
            "Unlimited team members",
            "Batch processing (unlimited)",
            "Dedicated support",
            "Custom integrations",
            "Unlimited file size",
            "SLA guarantee",
        ],
        cta: "Contact Sales",
        isPopular: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-16 md:py-20">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                    Find the perfect plan
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                    Start for free and scale up as you grow. All plans include our powerful markdown editor and real-time preview.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">Annual billing saves you 25%</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                {tiers.map((tier) => (
                    <Card key={tier.name} className={cn("flex flex-col shadow-lg", tier.isPopular ? 'border-primary ring-2 ring-primary' : '')}>
                         {tier.isPopular && (
                            <div className="absolute top-0 right-4 -mt-3">
                                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase">Most Popular</div>
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{tier.name}</CardTitle>
                            <CardDescription className="flex items-baseline">
                                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                                <span className="ml-1 text-muted-foreground">{tier.priceDetails}</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-4">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
                                {tier.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Pricing;
