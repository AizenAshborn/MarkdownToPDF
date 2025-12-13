# AdSense Configuration Guide

You are currently on the right track! The screen you shared is where you create **Manual Ad Units**.

## Why create manual units?
While "Auto Ads" are great, Manual Units allow us to place ads in specific high-value spots, like the Sidebars and Top Banner we designed.

## How to setup:

1.  **Click "Display ads"** (Square icon).
2.  **Name your ad unit**:
    *   Example: `homepage_sidebar_left`
    *   Example: `homepage_top_banner`
3.  **Choose format**:
    *   For Sidebars: Choose **Vertical** or **Square**.
    *   For Top Banner: Choose **Horizontal**.
4.  **Create** and Copy the code.
5.  Look for `data-ad-slot="1234567890"`. That number is your **Slot ID**.

## Updating the Code
Once you have the ID, update `src/app/page.tsx`:

```tsx
// Inside src/app/page.tsx

// 1. Uncomment the AdUnit component
<AdUnit
  slotId="YOUR_NEW_SLOT_ID_HERE" // Paste your ID here
  format="rectangle"
  ...
/>

// 2. Remove or comment out the "Your Ad Here" fallback link
```

## Troubleshooting
- **Ads showing blank?** New ad units take 30-60 minutes to become active.
- **Still blank?** Ensure your `ads.txt` is validated in AdSense settings.
