# Stripe Subscription Configuration

To enable the "Upgrade to Pro" feature, you must configure Stripe in your Dashboard and Vercel.

## Step 1: Create the Product in Stripe
1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Toggle **"Test Mode"** (orange toggle) in the top right.
3. Go to **Products** -> **Add Product**.
4. Enter Details:
   - **Name**: `Pro Creator`
   - **Description**: `Monthly subscription for MarkdownToPDF Pro`
5. Pricing Information:
   - **Pricing Model**: Standard pricing
   - **Price**: `9`
   - **Currency**: `USD`
   - **Billing period**: `Monthly`
6. Click **Save product**.

## Step 2: Get Values
1. On the Product page, find the **Pricing** section.
2. Copy the **API ID** for the price. It looks like `price_1Pxy...` or `price_1Q5z...`.
   - SAVE THIS AS: `NEXT_PUBLIC_STRIPE_PRICE_ID_PRO`
3. Go to **Developers** -> **API Keys**.
4. Copy the **Publishable Key** (`pk_test_...`).
   - SAVE THIS AS: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
5. Copy the **Secret Key** (`sk_test_...`).
   - SAVE THIS AS: `STRIPE_SECRET_KEY`

## Step 3: Configure Environment
### For Vercel (Production)
Go to your Project Settings -> Environment Variables and add:

| Key | Value |
| :--- | :--- |
| `STRIPE_SECRET_KEY` | `sk_test_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` |
| `NEXT_PUBLIC_STRIPE_PRICE_ID_PRO` | `price_...` |
| `NEXT_PUBLIC_BASE_URL` | `https://markdownpdfconverter.com` |

### For Local Development (`.env.local`)
Add the same keys to your `.env.local` file to test locally:
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO=price_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Step 4: Verification
1. Redeploy your app (or restart local server).
2. Click "Upgrade to Pro".
3. You should be redirected to a Stripe Checkout page.
