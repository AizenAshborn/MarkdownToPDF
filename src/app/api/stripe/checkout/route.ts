import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
    try {
        const { priceId } = await req.json();

        if (!priceId) {
            return new NextResponse("Price ID is required", { status: 400 });
        }

        if (!process.env.STRIPE_SECRET_KEY) {
            return new NextResponse("Stripe Secret Key is missing in server env", { status: 500 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/#pricing`,
        });

        return NextResponse.json({ url: session.url }, { headers: corsHeaders });
    } catch (error: any) {
        console.error("[STRIPE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
