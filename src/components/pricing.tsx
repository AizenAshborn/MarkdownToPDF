'use client';

import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const tiers = [
    {
        name: "Starter",
        price: "$0",
        priceDetails: "/month",
        features: [
            "Unlimited conversions per month",
            "Access to Basic Templates",
            "High-quality PDF output",
            "No watermarks",
            "10MB file size limit",
            "Community support",
            "Sponsored by ads",
        ],
        cta: "Get Started",
        isPopular: false,
        stripePriceId: null, // Free plan
    },
    {
        name: "Pro",
        price: "$9",
        priceDetails: "/month",
        features: [
            "Everything in Starter",
            "Access to Intelligent AI Styling",
            "All Premium Templates (Resume, Legal)",
            "Ad-free experience (No waiting)",
            "Priority Rendering Queue",
            "50MB file size limit",
            "Save custom themes",
        ],
        cta: "Upgrade to Pro",
        isPopular: true,
        // Use environment variable or fallback placeholder. 
        // User MUST set NEXT_PUBLIC_STRIPE_PRICE_ID_PRO in .env.local
        stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
    },
];

const Pricing = () => {
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
    const { toast } = useToast();

    const handleSubscribe = async (tier: typeof tiers[0]) => {
        if (!tier.stripePriceId) {
            // Free plan logic (maybe redirect to convert page)
            const element = document.getElementById('editor');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        setLoadingPlan(tier.name);

        try {
            const response = await fetch('/api/stripe/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId: tier.stripePriceId }),
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(text || "Checkout failed");
            }

            const data = await response.json();
            window.location.href = data.url;
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Something went wrong. Please check your Stripe config.",
                variant: "destructive",
            });
            setLoadingPlan(null);
        }
    };

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                            <Button
                                className="w-full"
                                variant={tier.isPopular ? 'default' : 'outline'}
                                onClick={() => handleSubscribe(tier)}
                                disabled={!!loadingPlan}
                            >
                                {loadingPlan === tier.name ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : tier.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Pricing;
