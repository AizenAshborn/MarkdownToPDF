import data from './placeholder-images.json';

export type PlaceholderAd = {
  id: string;
  advertiser: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  ctaText: string;
  href: string;
};

export const placeholderAds: PlaceholderAd[] = data.ads;
