export type BrandMode = 'empire' | 'photography' | 'makeup';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'fashion' | 'bridal' | 'traditional' | 'celebrity' | 'commercial' | 'makeup';
  imageUrl: string;
  rawImageUrl?: string;
  client: string;
  year: string;
  location: string;
  ceremonyType?: string;
  description: string;
  featuredIn?: string;
  facebookPostUrl?: string;
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
    lighting: string;
  };
  makeupDetails?: {
    skinPrep: string;
    foundation: string;
    eyes: string;
    lips: string;
    leadArtist: string;
  };
}

export interface LightingPreset {
  id: string;
  name: string;
  type: string;
  description: string;
  keyLight: string;
  fillLight: string;
  rimLight: string;
  backgroundLight: string;
  bestFor: string;
  mood: string;
  ratio: string;
  imageUrl: string;
  diagramSvg: string;
}

export interface MakeupLook {
  id: string;
  name: string;
  vibe: string;
  styleCategory: 'bridal' | 'traditional' | 'editorial' | 'redcarpet' | 'avantgarde';
  skinToneMatch: 'fair' | 'medium' | 'olive' | 'deep' | 'all';
  paletteColors: {
    base: string;
    accent: string;
    lip: string;
    highlight: string;
  };
  description: string;
  imageUrl: string;
  steps: string[];
  productsUsed: string[];
}

export interface PricingService {
  id: string;
  name: string;
  type: 'photography' | 'makeup' | 'combo';
  tagline: string;
  basePriceUSD: number;
  duration: string;
  deliverables: string[];
  popular?: boolean;
  vipTier?: boolean;
}

export interface AddOnOption {
  id: string;
  name: string;
  category: 'gear' | 'glam' | 'deliverable' | 'licensing';
  priceUSD: number;
  description: string;
}

export interface MarketingCampaignTemplate {
  id: string;
  platform: 'Facebook (@GHOPzambia)' | 'Instagram/Meta' | 'WhatsApp VIP' | 'TikTok' | 'Google Search & SEO';
  title: string;
  hook: string;
  adCopy: string;
  targetAudience: string;
  visualDirection: string;
  estimatedRoas: string;
  callToAction: string;
}

export interface KnowledgeModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  iconName: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
    bulletPoints?: string[];
    proTip?: string;
    formulaOrTemplate?: string;
  }[];
}

export interface StudioLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  squareFeet: string;
  timezone: string;
  leadProducer: string;
  features: string[];
  imageUrl: string;
  phone: string;
  whatsapp: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrEvent: string;
  quote: string;
  avatar: string;
  rating: number;
  revenueImpact?: string;
  pressLogo?: string;
  location: string;
}
