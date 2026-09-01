import { 
  PortfolioItem, 
  LightingPreset, 
  MakeupLook, 
  PricingService, 
  AddOnOption, 
  MarketingCampaignTemplate, 
  KnowledgeModule, 
  StudioLocation, 
  Testimonial 
} from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-zm-1',
    title: 'The Royal Zambian White Wedding & Sunset Ballroom',
    category: 'bridal',
    ceremonyType: 'Royal White Wedding',
    imageUrl: 'https://images.pexels.com/photos/32551069/pexels-photo-32551069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    rawImageUrl: 'https://images.pexels.com/photos/7759834/pexels-photo-7759834.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'Mwamba & Natasha Kasonde Wedding',
    year: '2025',
    location: 'Ciêla Resort & Spa / Lusaka, Zambia',
    description: 'A breathtaking high-luxury celebration featuring bespoke French lace, 18-hour teardrop-resistant melanin glow, and cinematic golden hour portraiture over the Zambian savannah sunset.',
    featuredIn: 'Zambia Weddings & Vogue Africa',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Sony A1 Full Frame Flagship 50.1MP',
      lens: 'FE 50mm f/1.2 GM Master',
      aperture: 'f/1.4',
      shutter: '1/1200s',
      iso: '100',
      lighting: 'Profoto B10X Plus with 3ft Deep Octa + Golden Sunset Backlight'
    },
    makeupDetails: {
      skinPrep: 'Ghop Cryo-Sculpting Facial & Triple Hyaluronic Hydration Glaze',
      foundation: 'Ghop Melanin Rich HD 18-Hour Transfer-Resistant Velvet Blend',
      eyes: 'Warm Rose Gold with Champagne micro-foil inner highlight & winged silk lashes',
      lips: 'Custom Gilded Terracotta Satin with peptide gloss finish',
      leadArtist: 'Ghop Zambia Master Glam Team'
    }
  },
  {
    id: 'port-zm-2',
    title: 'Chilanga Mulilo & Matebeto Royal Cultural Ceremony',
    category: 'traditional',
    ceremonyType: 'Chilanga Mulilo & Matebeto',
    imageUrl: 'https://images.pexels.com/photos/29046520/pexels-photo-29046520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    rawImageUrl: 'https://images.pexels.com/photos/5761365/pexels-photo-5761365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'Chileshe & Bwalya Royal Matrimony',
    year: '2025',
    location: 'Kabulonga Private Estate / Lusaka, Zambia',
    description: 'Capturing the deep heritage, traditional Chitenge embroidery, energetic bridal entry dance, and rich cultural pride of the Zambian Chilanga Mulilo ceremony with master studio flash precision.',
    featuredIn: 'BellaNaija Weddings & African Luxury Bride',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Hasselblad H6D-100c Medium Format',
      lens: 'HC 100mm f/2.2',
      aperture: 'f/4.0',
      shutter: '1/320s',
      iso: '100',
      lighting: 'Profoto Pro-11 Dual Strobes with 5ft Octabank'
    },
    makeupDetails: {
      skinPrep: 'Botanical oil infusion & poreless primer for tropical heat longevity',
      foundation: 'Camera-tested full coverage matte velvet base with zero flashback',
      eyes: 'Vibrant golden copper cut-crease with waterproof siren kohl',
      lips: 'Deep Ruby Red Velvet with chocolate lip liner contour',
      leadArtist: 'Ghop Traditional Glam Unit'
    }
  },
  {
    id: 'port-zm-3',
    title: 'Zambian Kitchen Party & High-Fashion Chitenge Couture',
    category: 'traditional',
    ceremonyType: 'Kitchen Party Bridal Shower',
    imageUrl: 'https://images.pexels.com/photos/31826844/pexels-photo-31826844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    rawImageUrl: 'https://images.pexels.com/photos/36500722/pexels-photo-36500722.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'Dr. Thandiwe & Eng. Kondwani',
    year: '2025',
    location: 'Taj Pamodzi Grand Hall / Lusaka, Zambia',
    description: 'High-energy celebration of Zambian womanhood and bridal blessings. Vibrant jewel-toned headwraps, glass skin complexion, and regal pose direction.',
    featuredIn: 'Zambian Woman Magazine & African Bride',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Canon EOS R5 C 8K Hybrid',
      lens: 'RF 85mm f/1.2L USM DS',
      aperture: 'f/2.0',
      shutter: '1/400s',
      iso: '160',
      lighting: 'Broncolor Para 133 with diffusion scrim'
    },
    makeupDetails: {
      skinPrep: 'Cryo-massaged rosewater mist and squalane glaze',
      foundation: 'Rich golden olive micro-veil with micro-contour strobing',
      eyes: 'Emerald and 24K bronze shimmer with feathered soap brows',
      lips: 'Glossy Espresso Caramel Ombre',
      leadArtist: 'Ghop Zambia Senior Artist'
    }
  },
  {
    id: 'port-zm-4',
    title: 'Victoria Falls Livingstone Destination Editorial',
    category: 'fashion',
    ceremonyType: 'Destination Editorial',
    imageUrl: 'https://images.pexels.com/photos/19831081/pexels-photo-19831081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    rawImageUrl: 'https://images.pexels.com/photos/28251081/pexels-photo-28251081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'Mosi-oa-Tunya Luxury Couture Collection',
    year: '2025',
    location: 'Royal Livingstone Hotel / Victoria Falls, Zambia',
    description: 'Editorial high-fashion campaign staged against the legendary mist of Victoria Falls, showcasing Zambian mineral emerald jewelry and sculpted silk gowns.',
    featuredIn: 'Harper’s Bazaar Africa & Elle International',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Phase One IQ4 150MP System',
      lens: 'Schneider Kreuznach 80mm f/2.8 LS',
      aperture: 'f/8.0',
      shutter: '1/250s',
      iso: '50',
      lighting: 'High-speed sync outdoor strobe with magnum reflector'
    },
    makeupDetails: {
      skinPrep: 'Waterproof barrier seal with moisture lock lipid therapy',
      foundation: 'Mist-proof & humidity-proof glowing satin formulation',
      eyes: 'Clean graphic metallic wing liner with glass lid effect',
      lips: 'Nude Cinnamon Cashmere with gold micro-sheen',
      leadArtist: 'Ghop Haute Couture Team'
    }
  },
  {
    id: 'port-zm-5',
    title: 'Ghop Melanin Glass-Skin Macro Beauty',
    category: 'makeup',
    ceremonyType: 'Studio Macro Beauty',
    imageUrl: 'https://images.pexels.com/photos/23158341/pexels-photo-23158341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    rawImageUrl: 'https://images.pexels.com/photos/5761365/pexels-photo-5761365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'Ghop Cosmetics Luxury Line Campaign',
    year: '2025',
    location: 'Ghop Flagship Studio (Lusaka HQ)',
    description: 'Zero ashiness, zero flashback macro studio portraiture celebrating pure African skin radiance with 24K gold gilding and sculpted cheekbone contour.',
    featuredIn: 'Allure Africa & Glamour',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Canon EOS R5',
      lens: 'RF 100mm f/2.8L Macro IS USM',
      aperture: 'f/11',
      shutter: '1/160s',
      iso: '100',
      lighting: 'Clamshell Master Beauty Dish + Curved Silver Eyelighter Reflector'
    },
    makeupDetails: {
      skinPrep: 'Thermal spray + lymphatic drainage cryo ice globes',
      foundation: 'Bespoke custom-pigmented golden caramel HD foundation',
      eyes: 'Bronze crystal foil with smoked cocoa socket definition',
      lips: 'Glassy Vinyl Chocolate Mocha',
      leadArtist: 'Ghop Executive Beauty Master'
    }
  },
  {
    id: 'port-zm-6',
    title: 'Copperbelt Executive & Fine Jewelry Suite',
    category: 'commercial',
    ceremonyType: 'Commercial Campaign',
    imageUrl: 'https://images.pexels.com/photos/28251081/pexels-photo-28251081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'Zambian Emerald & Gold Private Jewelers',
    year: '2025',
    location: 'Kitwe & Lusaka Executive Studios',
    description: 'Commercial 150MP diamond and emerald campaign capturing intricate stone refractions and elite executive brand stature.',
    featuredIn: 'African Business & Forbes Africa',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Hasselblad H6D-100c',
      lens: 'HC 120mm f/4 II Macro',
      aperture: 'f/16',
      shutter: '1/200s',
      iso: '64',
      lighting: 'Polarized studio hard projection spots + white bounce panels'
    },
    makeupDetails: {
      skinPrep: 'Niacinamide barrier glaze and non-pore-clogging radiance elixir',
      foundation: 'Ultra-thin camera veil with zero texture buildup',
      eyes: 'Subtle warm earth tones with precision inner rim liner',
      lips: 'Satin Spice Nude with cashmere hydration',
      leadArtist: 'Ghop Commercial Artistry Unit'
    }
  },
  {
    id: 'port-zm-7',
    title: 'Met Gala Celestial Noir Celebrity Suite',
    category: 'celebrity',
    ceremonyType: 'Celebrity Red Carpet',
    imageUrl: 'https://images.pexels.com/photos/33639134/pexels-photo-33639134.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'International VIP Talent & Fashion Designers',
    year: '2025',
    location: 'Paris & Lusaka Creative Suites',
    description: 'High-contrast chiaroscuro celebrity portraiture blending African royalty aesthetics with international red-carpet glamour.',
    featuredIn: 'Vanity Fair & Vogue Italia',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Leica SL3 Full-Frame Mirrorless',
      lens: 'Summilux-SL 50mm f/1.4 ASPH',
      aperture: 'f/2.0',
      shutter: '1/320s',
      iso: '200',
      lighting: 'Nanlite RGB tube duo + warm tungsten fresnel'
    },
    makeupDetails: {
      skinPrep: 'Caffeine under-eye de-puffing essence and poreless blur primer',
      foundation: 'Camera-Ready Matte Velvet with Micro-Powder baking',
      eyes: 'Dramatic siren cat-eye with dual tone metallic inner corner',
      lips: 'Deep Bordeaux Crimson Red with velvet matte definition',
      leadArtist: 'Ghop Red Carpet Team'
    }
  },
  {
    id: 'port-zm-8',
    title: 'The Royal Monaco & Lake Como Masterpiece',
    category: 'bridal',
    ceremonyType: 'Destination Royal Wedding',
    imageUrl: 'https://images.pexels.com/photos/36637251/pexels-photo-36637251.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    client: 'International Destination Couple',
    year: '2025',
    location: 'Lake Como, Italy & Lusaka Atelier',
    description: 'European palace grandeur captured by Ghop’s traveling master photography & bridal glam team.',
    featuredIn: 'Tatler Weddings & Brides UK',
    facebookPostUrl: 'https://web.facebook.com/GHOPzambia',
    exif: {
      camera: 'Sony A1 50MP Flagship',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.8',
      shutter: '1/800s',
      iso: '100',
      lighting: 'Natural ambient window light + Profoto B10X rim fill'
    },
    makeupDetails: {
      skinPrep: 'Hydra-peptide thermal mist & 24K Gold hydrating eye masks',
      foundation: '18-Hour Transfer-Resistant Royal Bridal Formula',
      eyes: 'Soft Rose Quartz wash with subtle winged silk lash clusters',
      lips: 'Signature Satin Rose Petal Hydrating Lip Tint',
      leadArtist: 'Ghop Global Glam Squad'
    }
  }
];

export const LIGHTING_PRESETS: LightingPreset[] = [
  {
    id: 'light-paramount',
    name: 'Paramount / Butterfly Glamour',
    type: 'High-Fashion Beauty & Hollywood Glamour',
    description: 'The golden standard of Hollywood and high-end makeup photography. The key light sits directly above and in front of the subject’s face, creating a distinctive butterfly-shaped shadow under the nose, sculpted cheekbones, and brilliant eye catchlights.',
    keyLight: 'Profoto 3ft Octabox placed directly 45° above eye level in front of subject',
    fillLight: 'Silver/White reflector resting on model lap or boom arm at chest level',
    rimLight: 'Two 1x4 strip boxes with grids positioned behind shoulders at 45° angles',
    backgroundLight: 'Even soft wash at 1.5 stops below key light on seamless grey or obsidian',
    bestFor: 'High-end beauty makeup, luxury cosmetics, celebrity portraits, symmetrical faces',
    mood: 'Sculpted, flawless, radiant, ultra-luxury Hollywood elegance',
    ratio: 'Key to Fill Ratio: 2:1 for soft beauty, 4:1 for dramatic high-fashion',
    imageUrl: 'https://images.pexels.com/photos/19831081/pexels-photo-19831081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    diagramSvg: 'butterfly'
  },
  {
    id: 'light-clamshell',
    name: 'Master Clamshell Beauty Setup',
    type: 'Macro Beauty & Flawless Skin Perfection',
    description: 'The ultimate commercial makeup and skincare lighting setup. Dual lights or key + curved reflector positioned like an open clamshell around the face to completely eliminate under-eye shadows while creating intense, dazzling catchlights in both upper and lower iris.',
    keyLight: '22" White Beauty Dish with 25° grid positioned directly overhead angled down 40°',
    fillLight: 'Westcott Eyelighter curved reflector directly below chest level bouncing light upward',
    rimLight: 'Soft edge strip to separate hair texture from background',
    backgroundLight: 'Clean pure white seamless blown out by +1 stop or gradient halo',
    bestFor: 'Skincare ad campaigns, lipstick macro shots, eye shadow precision, HD makeup portfolio',
    mood: 'Luminous, glowing, zero-defect skin, commercial high-definition',
    ratio: 'Key to Fill Ratio: 1.5:1 (Extremely soft wrap-around fill)',
    imageUrl: 'https://images.pexels.com/photos/23158341/pexels-photo-23158341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    diagramSvg: 'clamshell'
  },
  {
    id: 'light-tropical-diffuse',
    name: 'Tropical Sunlight & Scrim Bridal Glow',
    type: 'Outdoor Zambian & African Luxury Weddings',
    description: 'Engineered specifically for harsh African midday and afternoon tropical sun. A 8x8ft silk diffusion scrim softens harsh overhead sun while a Profoto B10X with Magnum Reflector adds warm catchlights and hair separation.',
    keyLight: '8x8ft Sun Scrim Silk Diffusion overhead blocking harsh direct sunlight',
    fillLight: 'Large 4x8ft White V-flat or silver bounce for open shadows on melanin skin tones',
    rimLight: 'Profoto B10X High-Speed Sync Strobe behind bride to highlight veil and gown',
    backgroundLight: 'Natural golden hour Zambian savannah backlight (+0.5 stops)',
    bestFor: 'Chilanga Mulilo outdoor entry, garden wedding receptions, Victoria Falls sunset sessions',
    mood: 'Warm, golden, ethereal, royal and authentic African elegance',
    ratio: 'Key to Ambient Ratio: 1:1 Perfectly balanced outdoor illumination',
    imageUrl: 'https://images.pexels.com/photos/32551069/pexels-photo-32551069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    diagramSvg: 'outdoor'
  },
  {
    id: 'light-rembrandt',
    name: 'Moody Rembrandt Luxury Portrait',
    type: 'Editorial, Men’s Fashion & High-Drama Covers',
    description: 'Inspired by the Dutch master painter. Key light is offset 45° to the side and slightly elevated, creating a characteristic triangle of light on the shadow cheek. Adds immense depth, prestige, and storytelling aura.',
    keyLight: 'Broncolor Para 133 or 120cm Softbox at 45° camera left and 45° elevation',
    fillLight: 'Black V-Flat on shadow side to induce negative fill (intensifies shadows)',
    rimLight: 'Single kicker light opposite the key light to outline the jawline and shoulder',
    backgroundLight: 'Subtle spotlight focused on background behind shadow side for chiaroscuro contrast',
    bestFor: 'Editorial magazine covers, luxury watch/suit campaigns, dramatic bridal portraits',
    mood: 'Mysterious, prestigious, rich, cinematic and editorial',
    ratio: 'Key to Fill Ratio: 8:1 (Deep dramatic chiaroscuro)',
    imageUrl: 'https://images.pexels.com/photos/28251081/pexels-photo-28251081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    diagramSvg: 'rembrandt'
  },
  {
    id: 'light-cyberpunk',
    name: 'Cinematic Dual Gel / Royal Emerald & Gold',
    type: 'Creative Editorial, Music & Red Carpet Afterparties',
    description: 'Color-temperature contrast lighting using saturated gel filters (Warm Amber Gold vs Deep Emerald Green or Royal Violet). Produces electric mood and unmistakable signature editorial look that stops social media scrollers immediately.',
    keyLight: 'Warm Gold gelled Fresnel continuous light at 45°',
    fillLight: 'Deep Emerald / Royal Blue tube light or gelled strip box on shadow side',
    rimLight: 'Gold hair kicker for vibrant edge pop',
    backgroundLight: 'Atmospheric studio haze illuminated by amber/emerald backlight',
    bestFor: 'Avant-garde makeup, nightlife campaigns, luxury fragrance launches, album covers',
    mood: 'Futuristic, bold, evocative, high-fashion nightclub luxury',
    ratio: 'Color Cross-Polarity Ratio: 1:1 Color Temperature Contrast',
    imageUrl: 'https://images.pexels.com/photos/5761365/pexels-photo-5761365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    diagramSvg: 'gel'
  }
];

export const MAKEUP_LOOKS: MakeupLook[] = [
  {
    id: 'look-zambia-royal-bride',
    name: 'Royal Zambian 18-Hour Bridal Dew',
    vibe: 'Regal, Tear-Proof, Golden Melanin Radiance',
    styleCategory: 'bridal',
    skinToneMatch: 'all',
    paletteColors: {
      base: '#b87d55',
      accent: '#7a3e26',
      lip: '#9e3d48',
      highlight: '#fbd09b'
    },
    description: 'The world-renowned Ghop Zambia signature. Engineered specifically for melanin skin tones with zero ashiness, zero flashback, and 18-hour resistance against emotional tears, heat, and tropical humidity.',
    imageUrl: 'https://images.pexels.com/photos/32551069/pexels-photo-32551069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    steps: [
      'Pre-treatment: Cryo ice-globe lymphatic drainage & triple-weight squalane hydration glaze.',
      'Complexion: Custom warm golden undertone HD base buffed in 3 micro-layers with damp Japanese sponges.',
      'Contour: Soft bone-structure cream sculpting set with warm translucent micro-powder (zero flashback).',
      'Eyes: Warm rose copper wash, 24K gold center lid foil, custom individual silk lashes.',
      'Fixation: Film-forming setting mist applied between every complexion veil.'
    ],
    productsUsed: [
      'Ghop Elixir Pre-Makeup Hydrating Serum',
      'Armani Luminous Silk + Kryolan HD DermaColor Blend',
      'Fenty Beauty Pro Filt’r Soft Matte & Match Stix',
      'Pat McGrath Mothership Divine Rose Palette',
      'Ghop 18H Bulletproof Setting Barrier'
    ]
  },
  {
    id: 'look-chilanga-mulilo',
    name: 'Chilanga Mulilo Heritage Glam',
    vibe: 'Vibrant, Cultural, Bold Crimson & Copper',
    styleCategory: 'traditional',
    skinToneMatch: 'all',
    paletteColors: {
      base: '#8d553b',
      accent: '#c85a17',
      lip: '#7e1927',
      highlight: '#fcd34d'
    },
    description: 'Created for traditional Zambian ceremonies (Chilanga Mulilo, Matebeto, Kitchen Parties). Perfectly complements vibrant Chitenge colors, traditional headpieces, and energetic celebrations with sweat-proof lock.',
    imageUrl: 'https://images.pexels.com/photos/29046520/pexels-photo-29046520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    steps: [
      'Sweat-proof pore-blurring primer pressed into T-zone and forehead.',
      'High-pigment warm caramel foundation with golden undertone calibration.',
      'Smoky copper cut-crease eye shadow with intense black waterproof kohl liner.',
      'Bold crimson velvet lip with deep chocolate pencil contour and gloss shine.'
    ],
    productsUsed: [
      'Ghop Velvet Poreless Primer',
      'Estée Lauder Double Wear (Warm Rich Shades)',
      'Juvia’s Place The Warrior Gold Palette',
      'Ghop Bespoke Ruby Royalty Matte Lipstick'
    ]
  },
  {
    id: 'look-editorial-glass',
    name: 'Haute Couture Glass Skin & Siren Eye',
    vibe: 'High-Fashion, Sculpted, Avant-Garde Gloss',
    styleCategory: 'editorial',
    skinToneMatch: 'all',
    paletteColors: {
      base: '#a16548',
      accent: '#1f1614',
      lip: '#7a4537',
      highlight: '#fed7aa'
    },
    description: 'A cutting-edge editorial runway look featuring ultra-reflective wet glass skin texture paired with razor-sharp elongated siren eye calligraphy and blurred velvet lips.',
    imageUrl: 'https://images.pexels.com/photos/23158341/pexels-photo-23158341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    steps: [
      'Skin prep with high-gloss ceramide balm on cheekbones, brow bone, and collarbones.',
      'Pinpoint spot concealing with zero all-over foundation to allow real skin luminescence.',
      'Siren liner geometry using waterproof gel eyeliner dragged outward into infinity wing.',
      'Lip contour blurred inward with finger tapping for high-fashion runway stain.'
    ],
    productsUsed: [
      'Ghop Glass-Skin Luminizer Gel',
      'Dior Backstage Flash Concealer',
      'Danessa Myricks Colorfix in Gold Glaze',
      'MAC Retro Matte Velvet Lip Cream'
    ]
  },
  {
    id: 'look-redcarpet-noir',
    name: 'Red Carpet Old Hollywood Siren',
    vibe: 'Iconic, Sultry, Velvet Crimson & Cat-Eye',
    styleCategory: 'redcarpet',
    skinToneMatch: 'all',
    paletteColors: {
      base: '#be8058',
      accent: '#450a0a',
      lip: '#881337',
      highlight: '#fef08a'
    },
    description: 'The quintessential award gala and red-carpet glam look. Velvety warm canvas, smoked bronze socket definition, and an indelible ruby pout with crisp architectural lip line.',
    imageUrl: 'https://images.pexels.com/photos/19831081/pexels-photo-19831081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    steps: [
      'Pore-blurring velvet primer pressed into T-zone and smile lines.',
      'Full-coverage luminous velvet foundation baked under eyes with warm banana powder.',
      '3D lip contouring with deep chestnut lip pencil, ruby lipstick, and crimson gloss center.',
      'Magnetic silk lash strip paired with smoked dark espresso outer corner shadow.'
    ],
    productsUsed: [
      'Ghop Velvet Poreless Veil Primer',
      'Giorgio Armani Luminous Silk + Fluid Sheer',
      'Tom Ford Eye Color Quad',
      'Ghop Bespoke Crimson Noir Matte Lipstick'
    ]
  }
];

export const PRICING_PACKAGES: PricingService[] = [
  {
    id: 'pkg-zm-traditional',
    name: 'The Traditional Heritage Suite (Chilanga Mulilo / Kitchen Party)',
    type: 'combo',
    tagline: 'Dedicated full-day production for traditional Zambian ceremonies and bridal entry',
    basePriceUSD: 2800,
    duration: 'Full Day Coverage (8-10 Hours)',
    deliverables: [
      'Ghop Master Photographer + 1 Assistant Photographer (Multi-angle entrance capture)',
      'Ghop Lead Traditional Glam Makeup Artist (Bridal + 2 VIP Family Members)',
      'High-Speed Flash Synchronization for high-energy dance and food presentation',
      '35 Master High-End Retouched Hero Portraits + 400 Color-Graded Digitals',
      'Handcrafted Luxury Heirloom Linen Album (30 Spreads)',
      'Same-Day Social Media Preview Clip for Facebook & WhatsApp within 24 Hours'
    ],
    popular: true
  },
  {
    id: 'pkg-zm-royal-wedding',
    name: 'The Royal Grand White Wedding Masterpiece',
    type: 'combo',
    tagline: 'The pinnacle of luxury wedding experience combining master photography, drone & glam squad',
    basePriceUSD: 5800,
    duration: 'Unlimited Wedding Day Coverage + Pre-Wedding Shoot',
    deliverables: [
      'Ghop Principal Master Photographer + 2 Second Shooters + FAA/CAA Certified 4K Drone Pilot',
      'Ghop Lead Bridal Makeup & Hair Artist + All-Day Touchup Glam Assistant for 14 Hours',
      'Complimentary Pre-Wedding Romantic Editorial Session (Lusaka, Livingstone or Kariba)',
      'Handcrafted Italian Full-Grain Leather Heirloom Album (40 Spreads / 80 Pages)',
      'Two Matching Parent Heirloom Albums + 10 Fine Art Museum Framed Prints',
      'Over 850 Curated & Master Color-Graded Imagery + 75 Magazine Beauty Retouches',
      'Ultra-Fast 5-Day VIP Sneak Peek Preview'
    ],
    popular: true,
    vipTier: true
  },
  {
    id: 'pkg-zm-editorial-photo',
    name: 'The High-Fashion & Commercial Studio Suite',
    type: 'photography',
    tagline: 'For fashion designers, corporate executives, jewelry houses & magazine covers',
    basePriceUSD: 2200,
    duration: 'Full Day Production (8 Hours in Studio or On Location)',
    deliverables: [
      'Lead Master Photographer (Ghop Executive Director) + Studio Lighting Team',
      'Hasselblad 100MP & Sony A1 Master Gear Setup with Live 32" OLED Tethering',
      'Bespoke Creative Moodboard & Set Lighting Design',
      '20 Master Magazine Editorial Retouches (Vogue & Harper standard)',
      'All High-Resolution RAW + JPEG Digitals with Full Commercial Web Licensing',
      'Same-Day Proofing Gallery'
    ],
    popular: false
  },
  {
    id: 'pkg-zm-presidential-combo',
    name: 'The Presidential 2-Day Complete Matrimonial Dynasty',
    type: 'combo',
    tagline: 'Full 2-Day Coverage: Day 1 Traditional (Chilanga Mulilo) + Day 2 Royal White Wedding & Reception',
    basePriceUSD: 9500,
    duration: '2 Full Days Unlimited Production',
    deliverables: [
      'Complete Ghop Production House: 3 Master Photographers, 1 Cinema 4K DP, 2 Makeup Artists',
      'Covers Chilanga Mulilo / Matebeto + Church Blessing + Grand Evening Gala Reception',
      'All-inclusive Hair & Makeup Styling for Bride + Mother of Bride for both days',
      '2 Handcrafted Master Italian Leather Heirloom Albums + 3 Parent Albums',
      'Cinema 4K Cinematic Highlight Film + Full Speeches & Entrance Recording',
      '24/7 Dedicated Production Concierge + VIP Priority Delivery in 14 Days'
    ],
    popular: false,
    vipTier: true
  }
];

export const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: 'addon-hasselblad',
    name: 'Hasselblad 100MP Medium Format Sensor Upgrade',
    category: 'gear',
    priceUSD: 650,
    description: 'Breathtaking dynamic range, 16-bit color depth, and unmatched skin tonality.'
  },
  {
    id: 'addon-drone',
    name: 'Cinema 4K Drone Aerial Capture & Pilot',
    category: 'gear',
    priceUSD: 450,
    description: 'Licensed aerial cinematics for estate entries, church convoys, and luxury venues.'
  },
  {
    id: 'addon-glam-assistant',
    name: 'Dedicated On-Set All-Day Glam Touch-up Artist',
    category: 'glam',
    priceUSD: 350,
    description: 'Continuous shine control, hair re-sculpting, and lip touchups between every outfit change.'
  },
  {
    id: 'addon-express-24h',
    name: 'Express 24-Hour VIP Editorial Retouching Delivery',
    category: 'deliverable',
    priceUSD: 500,
    description: 'Instant next-day delivery for Facebook, Instagram announcements, and press submissions.'
  },
  {
    id: 'addon-heirloom-album',
    name: 'Grand Italian Full-Grain Leather Heirloom Album',
    category: 'deliverable',
    priceUSD: 850,
    description: 'Hand-bound archival cotton rag paper with embossed 24K gold lettering.'
  },
  {
    id: 'addon-commercial-license',
    name: 'Global Billboard & Paid Advertising Perpetual Rights',
    category: 'licensing',
    priceUSD: 1200,
    description: 'Full perpetual global commercial release for billboards, TV, print, and digital ads.'
  }
];

export const MARKETING_CAMPAIGNS: MarketingCampaignTemplate[] = [
  {
    id: 'camp-fb-ghop',
    platform: 'Facebook (@GHOPzambia)',
    title: 'The Viral "Zambian Royal Wedding & Chilanga Mulilo Transformation" Facebook Ad',
    hook: '“POV: You booked GHOP Zambia for your Chilanga Mulilo & White Wedding, and your guests thought Vogue flew in.”',
    adCopy: `Every Zambian bride deserves to feel like absolute royalty on her traditional and white wedding day. 🇿🇲✨

At GHOP Photography & GHOP Makeup (@GHOPzambia), we combine 100MP medium-format clarity with our proprietary 18-Hour Melanin Sweat-Proof Glam formula.

✨ Zero Flashback under blinding camera flashes.
✨ Rich, true-to-life melanin tones with zero ashiness.
✨ Master lighting that captures every detail of your Chitenge & lace gown.
✨ Hand-bound Italian leather heirloom albums you’ll cherish forever.

💍 Accepting limited wedding dates for 2025–2026 in Lusaka, Copperbelt, Livingstone, and across Africa!

👉 Visit our official Facebook page @GHOPzambia or Tap "WhatsApp VIP Concierge" below to check your date availability!`,
    targetAudience: 'Women & Men in Zambia (Lusaka, Kitwe, Ndola, Livingstone) + Zambian Diaspora in UK/USA/SA, Age 22-45, Interests: Zambian Weddings, BellaNaija Weddings, Luxury Bridal, Chitenge Fashion',
    visualDirection: 'Dynamic Facebook video split-screen: Bride walking into Chilanga Mulilo with traditional dancers ➔ Stunning 4K slow-motion camera flash reveal with radiant glowing skin.',
    estimatedRoas: '8.5x ROAS on Facebook Ads & WhatsApp Leads',
    callToAction: 'Message GHOP Zambia on WhatsApp'
  },
  {
    id: 'camp-whatsapp-vip',
    platform: 'WhatsApp VIP',
    title: 'Instant 1-Click WhatsApp Concierge Closing Script',
    hook: '“Hello GHOP Zambia! I saw your recent wedding feature and would love to check availability for [Date] in [Lusaka/Copperbelt/Livingstone].”',
    adCopy: `Automated 15-Minute WhatsApp & VIP Follow-up Script:

“Muli bwanji / Hello [Bride / Client Name]! ✨ 

Thank you for contacting GHOP Photography & GHOP Makeup Studios Zambia (@GHOPzambia). 

We are honored to consider capturing your special day in Lusaka / across Zambia! Here is what we have prepared for you:
1. 📸 Our 2025 Royal Wedding & Chilanga Mulilo Lookbook: [Link]
2. 💄 Our 18-Hour Melanin Glamour Formulation Guide: [Link]
3. 👑 Custom Package Quote tailored to your venue & ceremony.

Direct Studio Line: 0760528887 (+260 760 528887)
Official Email: ghopbusinesscenter@gmail.com
Official Facebook: fb.com/GHOPzambia

Are you available for a 5-minute WhatsApp Voice Note or phone call today at 2:00 PM to discuss your visual vision? 

Warmest regards,
Ghop Master Creative Team | Lusaka Flagship”`,
    targetAudience: 'Direct high-intent inquiries from Facebook Page, Instagram, and Word-of-Mouth referrals.',
    visualDirection: 'Clean PDF Lookbook + high-res image carousel sent directly inside WhatsApp chat.',
    estimatedRoas: '65% Direct Consultation-to-Booking Close Rate',
    callToAction: 'Launch WhatsApp Concierge'
  },
  {
    id: 'camp-ig-meta',
    platform: 'Instagram/Meta',
    title: 'The "Melanin Glowing Skin & Studio Physics" Secret Reel',
    hook: '“Why 95% of photographers struggle with African skin tones (and how GHOP perfected it with light temperature chemistry).”',
    adCopy: `Notice how bad lighting makes rich skin look either washed out or muddy? 

At GHOP Studios, we use warm calibrated strobe temperatures (5200K) paired with custom golden-undertone HD bases to ensure every bride looks like liquid gold.

✨ 100MP Hasselblad Clarity
✨ Cryo-Sculpting Facial Prep
✨ 18-Hour Cry-Proof Guarantee

Book your session in Lusaka or destination worldwide. Follow @GHOPzambia for daily bridal transformations!`,
    targetAudience: 'Fashion & beauty enthusiasts, luxury brides, creators in Zambia, South Africa, Nigeria, UK, USA.',
    visualDirection: '15-second high-energy macro makeup reel showing strobe firing and skin glowing in 8K 60fps.',
    estimatedRoas: '1.5M+ Viral Organic Reach Potential',
    callToAction: 'Follow @GHOPzambia & Book Suite'
  },
  {
    id: 'camp-google-seo',
    platform: 'Google Search & SEO',
    title: 'High-Intent Zambian Luxury Wedding & Makeup Search Snippet',
    hook: '“Best Luxury Wedding Photographer & Celebrity Makeup Artist in Zambia | GHOP Studios”',
    adCopy: `GHOP Photography & GHOP Makeup Zambia | The #1 Luxury Visual Empire.
Featured on Facebook @GHOPzambia, Vogue Africa & BellaNaija. 
Full-day Chilanga Mulilo, Royal White Weddings & High-Fashion Studio Portraiture in Lusaka, Copperbelt & Livingstone.
• 18-Hour Tear-Proof Glam • Handcrafted Italian Leather Albums • Drone Aerials.
Inquire today on WhatsApp or Facebook for bespoke rate cards.`,
    targetAudience: 'Google Search queries for "best wedding photographer in Zambia", "makeup artist Lusaka", "Chilanga Mulilo photography", "luxury photo studio Lusaka"',
    visualDirection: 'Google Verified Business listing with 5-star ratings, sitelinks, and direct WhatsApp / Facebook booking buttons.',
    estimatedRoas: '9.2x High-Intent Conversion ROAS',
    callToAction: 'Check 2025 Calendar Availability'
  }
];

export const KNOWLEDGE_MODULES: KnowledgeModule[] = [
  {
    id: 'mod-1',
    number: '01',
    title: 'The 7-Figure Pricing Architecture & Commercial Licensing Matrix',
    subtitle: 'How to transition from $300 local shoots to $3,000–$10,000+ luxury production contracts',
    readTime: '8 min read',
    iconName: 'DollarSign',
    summary: 'The difference between an amateur visual artist and a million-dollar enterprise is not talent—it is pricing psychology, value bundling, and commercial usage rights.',
    keyTakeaways: [
      'Stop selling hours and digital files; sell transformation, prestige, and family legacy.',
      'Always separate creative production fee from licensing usage rights and physical heirloom albums.',
      'The 3-tier luxury pricing framework: Traditional Heritage Tier, Royal Wedding Tier, and Presidential Dynasty Tier.'
    ],
    contentSections: [
      {
        heading: '1. The Psychology of High-Ticket Luxury Positioning in Africa & Globally',
        body: 'High-net-worth brides, corporate executives, and luxury brands do not look for discounts. In fact, low prices trigger skepticism about reliability on their once-in-a-lifetime day. When you price a complete wedding package with full glam squad, Hasselblad cameras, drone aerials, and an Italian leather heirloom album, they recognize you as a safe, prestigious investment.',
        proTip: 'Never send a raw price over email or text without a discovery voice consultation. Frame every Kwacha and Dollar as insurance against mediocrity on their most important celebration.'
      },
      {
        heading: '2. The Commercial & Traditional Multi-Day Licensing Formula',
        body: 'In Zambian and African wedding culture, celebrations span multiple days (Chilanga Mulilo / Matebeto, Kitchen Party, Church Blessing, Evening Gala). Bundle both days into a comprehensive Dynasty Suite to dramatically increase average transaction value.',
        formulaOrTemplate: 'Dynasty Package Value Calculation:\nDay 1 Traditional (Chilanga Mulilo) + Day 2 Royal White Wedding + Complete Glam Team for Both Days + Hand-bound Italian Leather Album + 4K Drone = $9,500 / K250,000+ ZMW.'
      }
    ]
  },
  {
    id: 'mod-2',
    number: '02',
    title: 'The Facebook (@GHOPzambia) & WhatsApp Self-Advertising Engine',
    subtitle: 'Building automated pipelines that turn social media views into booked high-ticket contracts',
    readTime: '10 min read',
    iconName: 'TrendingUp',
    summary: 'A world-class visual empire leverages social proof on Facebook (@GHOPzambia), viral transformation reels on TikTok, and fast 15-minute WhatsApp VIP intake funnels.',
    keyTakeaways: [
      'The "Behind-the-Scenes Traditional Entry + Transformation" ad creative format consistently generates the highest engagement across African audiences.',
      'Link Facebook ads directly to WhatsApp Business for instant personal voice notes and proposal sharing.',
      'Use the VIP Black Card system to incentivize existing high-profile couples to refer their corporate friends.'
    ],
    contentSections: [
      {
        heading: '1. The 3-Step Social Acquisition Funnel',
        body: 'Step 1: Run 15-second Facebook & Instagram reels showcasing the bride entering the Chilanga Mulilo ceremony with live traditional song and crisp strobe flashes.\nStep 2: Retarget video viewers with client video testimonials and Italian album unboxing videos.\nStep 3: Direct them to WhatsApp with a pre-filled message asking for their wedding date.',
        proTip: 'Send a 45-second personalized WhatsApp voice note within 15 minutes of an inquiry. It creates immediate trust and emotional connection.'
      }
    ]
  },
  {
    id: 'mod-3',
    number: '03',
    title: 'Master Tropical Lighting Physics & Melanin Tone Calibration',
    subtitle: 'From harsh midday African sunlight to indoor banquet hall chiaroscuro',
    readTime: '12 min read',
    iconName: 'Sun',
    summary: 'Melanin-rich skin tones require specific strobe color temperatures (5200K–5500K) and feathering angles to avoid specular highlights while accentuating natural golden undertones.',
    keyTakeaways: [
      'Use large diffusion scrims (8x8ft) for harsh outdoor afternoon sunlight at garden weddings.',
      'Never point raw on-camera flash directly at dark skin tones; bounce through white umbrellas or use off-axis beauty dishes.',
      'Use silver reflectors for jawline sculpting and warm gold kickers for hair separation.'
    ],
    contentSections: [
      {
        heading: '1. Calibrating Strobes for Melanin Skin Radiance',
        body: 'When shooting rich dark skin tones, standard flash can cause cold blue specular hotspots if not calibrated. Use warm diffusers and ensure key lights are feathered 30° across the face to create a smooth, creamy gradation from golden highlight to deep chocolate shadow.',
        proTip: 'Set camera white balance manually to 5400K–5600K in studio to lock in rich, healthy bronze skin tones without yellow cast.'
      }
    ]
  },
  {
    id: 'mod-4',
    number: '04',
    title: 'High-Definition Melanin Makeup Chemistry & 18-Hour Longevity',
    subtitle: 'Zero ashiness, zero flashback, and sweat-proof tropical formulations',
    readTime: '11 min read',
    iconName: 'Sparkles',
    summary: 'GHOP Makeup artistry combines cryo-sculpting skin prep, custom-blended golden undertones, and micro-thin setting veils that stay bulletproof for 18 hours through emotion and dancing.',
    keyTakeaways: [
      '80% of makeup outcome is determined by skin preparation and lymphatic drainage prior to foundation.',
      'Avoid high-silica translucent powders that reflect white ghost flashback under direct flashbulbs.',
      'Micro-layer three ultra-thin veils of foundation, setting each layer with a film-forming mist.'
    ],
    contentSections: [
      {
        heading: '1. The Anti-Flashback Banana & Warm Amber Powder Baking Method',
        body: 'Instead of white silica powders which create severe flashback on deeper skin tones, use micronized warm banana, bronze, and topaz setting powders pressed into the skin with velvet puffs.',
        proTip: 'Always do a test flash photograph on your camera monitor before the bride steps into her dress to verify 100% zero flashback.'
      }
    ]
  },
  {
    id: 'mod-5',
    number: '05',
    title: 'The White-Glove Luxury Client Journey & VIP Onboarding',
    subtitle: 'How to deliver a $10,000 champagne experience that commands rave reviews and loyalty',
    readTime: '9 min read',
    iconName: 'Crown',
    summary: 'Luxury clients do not buy photography or makeup; they buy how you make them feel. Every touchpoint from the first WhatsApp message to the delivery of the Italian leather album must radiate prestige.',
    keyTakeaways: [
      'Respond to all high-ticket inquiries within 15 minutes with a personalized voice note.',
      'Send a physical VIP Welcome Gift Box (Curated candle, silk eye mask, Ghop lookbook) upon deposit payment.',
      'On shoot day, provide a dedicated private suite with barista coffee, champagne, and customized music playlist.'
    ],
    contentSections: [
      {
        heading: '1. The In-Person / Virtual "Reveal & Ordering" Premiere Session',
        body: 'Never send a raw digital gallery link via email and hope they buy prints. Host a live Champagne Reveal Premiere where you project their curated story on a 4K display set to emotive cinematic music. This single practice doubles average client spend through album and wall-art upgrades.',
        formulaOrTemplate: 'The Reveal Flow:\n1. 3-Minute Cinematic Slide Show with custom music track.\n2. Curated Wall Art Mockup displayed directly on photos of their own living room walls.\n3. Physical tactile leather and silk swatch presentation for their Heirloom Album.'
      }
    ]
  },
  {
    id: 'mod-6',
    number: '06',
    title: 'Bulletproof Legal Contracts, Model Releases & Retainer Protection',
    subtitle: 'Protecting your intellectual property, retainers, cancellation clauses & liability',
    readTime: '8 min read',
    iconName: 'ShieldCheck',
    summary: 'A single legal dispute can harm your studio reputation. Protect your million-dollar business with ironclad non-refundable retainers, explicit image usage clauses, and limitation of liability.',
    keyTakeaways: [
      'Always use the legal term "Non-Refundable Reservation Retainer" rather than "Deposit".',
      'Specify exact turnaround windows (e.g., "4-6 weeks standard" with paid 24h express options).',
      'Include a strict Force Majeure clause covering travel disruptions, extreme weather, and medical emergencies.'
    ],
    contentSections: [
      {
        heading: '1. Key Clauses Every Luxury Contract Must Include',
        body: 'Clause 1: Non-Refundable Reservation Retainer (Secures the exclusive date).\nClause 2: Copyright & Permitted Social Usage (GHOP retains master copyright; client receives personal print & social sharing license).\nClause 3: Creative Discretion Clause (Protects artistic editing style and color grading).\nClause 4: Harassment & Safe Working Environment.\nClause 5: Limitation of Liability.',
        proTip: 'Send contracts with digital signature links directly through WhatsApp/Email for seamless mobile execution.'
      }
    ]
  },
  {
    id: 'mod-7',
    number: '07',
    title: 'Studio Scaling: Building an Associate Fleet & Masterclass Academy',
    subtitle: 'How to scale past your personal time and build an enduring $1M+ creative enterprise',
    readTime: '10 min read',
    iconName: 'Building',
    summary: 'Solo artists trade time for money. A true empire leverages an associate team trained in the GHOP Style Guide, automated post-production pipelines, and high-margin masterclass educational academies.',
    keyTakeaways: [
      'Develop a standardized "GHOP Style Guide" covering exact lighting ratios, camera profiles, and makeup kits.',
      'Outsource standard culling and base retouching to trained retouchers while retaining creative color grading oversight.',
      'Launch a Masterclass Academy teaching your proprietary methods in Lusaka and online.'
    ],
    contentSections: [
      {
        heading: '1. The Associate Team Model for Multi-Wedding Saturdays',
        body: 'Train associate photographers and makeup artists to execute under the GHOP brand at standard price tiers, while you personally handle the VIP Presidential Dynasty Tier. This enables your studio to shoot 3-4 luxury weddings simultaneously across Lusaka, Kitwe, and Livingstone.',
        formulaOrTemplate: 'Enterprise Scaling Model:\n- 15 VIP Lead Shoots @ $6,000 = $90,000\n- 40 Associate Shoots @ $2,500 = $100,000\n- 4 Masterclass Cohorts (20 students @ $800) = $64,000\n- Commercial & Studio Headshots = $45,000\nTotal Annual Studio Revenue = $299,000+ USD (~K8,000,000+ ZMW)'
      }
    ]
  }
];

export const STUDIO_LOCATIONS: StudioLocation[] = [
  {
    id: 'loc-lusaka',
    city: 'Lusaka Flagship Studio & Academy',
    country: 'Zambia',
    address: 'Kabulonga & Woodlands Prestige Enclave, Lusaka, Zambia',
    squareFeet: '5,500 sq ft Double Cyclorama & VIP Bridal Suite',
    timezone: 'CAT (UTC+2)',
    leadProducer: 'GHOP Principal Master & Lead Bridal Glam Director',
    features: ['30ft White Cyclorama Wall', 'Private Royal Bridal Dressing Suite', 'Profoto & Broncolor Strobe Fleet', 'Barista & Champagne VIP Lounge', 'Facebook Live Streaming Suite'],
    imageUrl: 'https://images.pexels.com/photos/7778887/pexels-photo-7778887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    phone: '0760528887 (+260 760 528887)',
    whatsapp: 'https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20photography%20%26%20makeup%20session%20in%20Lusaka%2C%20Zambia.',
    email: 'ghopbusinesscenter@gmail.com'
  },
  {
    id: 'loc-livingstone',
    city: 'Livingstone & Victoria Falls Destination Unit',
    country: 'Zambia',
    address: 'Mosi-oa-Tunya Royal Enclave, Livingstone, Zambia',
    squareFeet: 'Destination Expedition Unit & Sunset Terrace',
    timezone: 'CAT (UTC+2)',
    leadProducer: 'GHOP Destination Master Photographer',
    features: ['Victoria Falls Sunset Scrim Setup', 'Helicopter Aerial Drone Rig', 'Mist-Proof Waterproof Cosmetics Lab', 'Luxury Safari Lodge Pop-Up Suites'],
    imageUrl: 'https://images.pexels.com/photos/7779247/pexels-photo-7779247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    phone: '0760528887 (+260 760 528887)',
    whatsapp: 'https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20a%20Victoria%20Falls%20Destination%20Wedding%20shoot.',
    email: 'ghopbusinesscenter@gmail.com'
  },
  {
    id: 'loc-copperbelt',
    city: 'Copperbelt Executive Salon (Kitwe & Ndola)',
    country: 'Zambia',
    address: 'Parklands Executive Suites, Kitwe, Zambia',
    squareFeet: '3,200 sq ft Commercial Studio',
    timezone: 'CAT (UTC+2)',
    leadProducer: 'GHOP Copperbelt Senior Associate',
    features: ['Commercial Executive Headshot Bay', 'Bridal Glam Makeup Bar', 'High-Speed Tethered OLED Proofing', 'Chilanga Mulilo Multi-Camera Fleet'],
    imageUrl: 'https://images.pexels.com/photos/7778884/pexels-photo-7778884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    phone: '0760528887 (+260 760 528887)',
    whatsapp: 'https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20would%20like%20to%20inquire%20about%20Copperbelt%20shoots%20and%20weddings.',
    email: 'ghopbusinesscenter@gmail.com'
  },
  {
    id: 'loc-london-paris',
    city: 'London & Paris International Travel Desk',
    country: 'Global Diaspora',
    address: 'Mayfair, London & Place Vendôme, Paris',
    squareFeet: 'International Travel & Destination Concierge',
    timezone: 'GMT / CET',
    leadProducer: 'GHOP Global Travel Director',
    features: ['Zambian Diaspora Wedding Concierge', 'Hasselblad 100MP Travel Vault', 'International Flight Glam Squad', 'Custom Archival Italian Albums'],
    imageUrl: 'https://images.pexels.com/photos/7779757/pexels-photo-7779757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    phone: '+260 760 528887 / 0760528887',
    whatsapp: 'https://wa.me/260760528887?text=Hello%20GHOP%20Zambia!%20I%20am%20inquiring%20from%20the%20diaspora%20about%20a%20wedding%20session.',
    email: 'ghopbusinesscenter@gmail.com'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-zm-1',
    name: 'Natasha & Mwamba Kasonde',
    role: 'Royal Wedding & Chilanga Mulilo Couple',
    companyOrEvent: 'Ciêla Resort & Spa Luxury Wedding, Lusaka',
    quote: 'Booking GHOP Zambia (@GHOPzambia) was hands down the best investment of our wedding. The makeup didn’t budge through 14 hours of Chilanga Mulilo dancing and emotional vows. The photos look like a Vogue Africa cover. Everyone on Facebook is still raving about our album!',
    avatar: 'https://images.pexels.com/photos/32551069/pexels-photo-32551069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    rating: 5,
    pressLogo: 'VOGUE AFRICA',
    location: 'Lusaka, Zambia'
  },
  {
    id: 'rev-zm-2',
    name: 'Chileshe & Bwalya Mwape',
    role: 'Traditional Chilanga Mulilo & White Wedding',
    companyOrEvent: 'Taj Pamodzi & Kabulonga Estate',
    quote: 'The way GHOP captures African skin tones is pure magic. Zero ashiness, zero flashback from the flash, just rich, golden, breathtaking royalty. The Italian leather album is now our family heirloom. Truly world-class artistry right here in Zambia!',
    avatar: 'https://images.pexels.com/photos/29046520/pexels-photo-29046520.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    rating: 5,
    revenueImpact: 'Facebook @GHOPzambia Verified Review',
    pressLogo: 'BELLANAIJA',
    location: 'Kabulonga, Lusaka'
  },
  {
    id: 'rev-zm-3',
    name: 'Dr. Thandiwe & Kondwani Lungu',
    role: 'Victoria Falls Destination Nuptials',
    companyOrEvent: 'Royal Livingstone Victoria Falls',
    quote: 'GHOP’s team flew to Livingstone with medium format gear and a complete bridal glam squad. The sunset shots by the Zambezi River are unbelievable. Thank you GHOP Zambia for making us look like royalty!',
    avatar: 'https://images.pexels.com/photos/19831081/pexels-photo-19831081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    rating: 5,
    pressLogo: 'AFRICAN BRIDE',
    location: 'Livingstone, Zambia'
  }
];

export const STUDIO_STATS = {
  totalRevenueGenerated: 'K25M+ ZMW',
  editorialCampaigns: '1,200+',
  vogueAndHarperCovers: '34',
  celebrityClients: '180+',
  satisfactionRate: '99.9%',
  globalLocations: '4 Hubs',
  facebookFollowers: '@GHOPzambia Community'
};
