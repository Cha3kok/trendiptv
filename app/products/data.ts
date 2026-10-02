export type ProductFeature = {
  title: string
  description: string
}

export type Product = {
  id: string
  slug: string
  name: string
  shortName: string
  price: number
  priceFormatted: string
  period: string
  billingLabel: string
  pricePerMonth: string
  savings?: string
  savingsPercent?: number
  popular: boolean
  badge?: string
  tagline: string
  metaTitle: string
  metaDescription: string
  articleIntro: string
  features: ProductFeature[]
  included: string[]
  targetAudience: string[]
  faq: { question: string; answer: string }[]
  image: string
  sku: string
  accentClass: string
}

export const products: Product[] = [
  {
    id: '1-month',
    slug: '1-month-iptv-subscription',
    name: 'IPTV Trends 1 Month Plan',
    shortName: '1 Month',
    price: 19.99,
    priceFormatted: '$19.99',
    period: '1 month',
    billingLabel: 'Billed monthly',
    pricePerMonth: '$19.99',
    popular: false,
    tagline: 'Perfect for getting started — no commitment, full access.',
    metaTitle: 'IPTV 1 Month Subscription – $19.99 | IPTV Trends',
    metaDescription:
      'IPTV Trends 1-month plan for $19.99: 21,000+ live channels, 65,000+ movies and series in 4K, instant activation and a 7-day money-back guarantee.',
    articleIntro:
      'The IPTV Trends 1 Month Plan is the ideal entry point for anyone looking to experience premium IPTV streaming without a long-term commitment. For just $19.99, you get full access to our entire library of 21,000+ live channels and 65,000+ movies and series — all in stunning 4K UHD quality. Whether you\'re testing a new service or simply need IPTV for a short period, this plan delivers everything without compromise.',
    features: [
      { title: '21,000+ Live Channels', description: 'Sports, news, entertainment, and international channels from every country.' },
      { title: '65,000+ Movies & Series', description: 'Full on-demand library including the latest releases and classics.' },
      { title: '4K / UHD Streaming', description: 'Crystal-clear picture quality on all supported devices.' },
      { title: 'All Sports & PPV Events', description: 'Premium sports channels, live football, and all major PPV events included.' },
      { title: 'Anti-Freeze Technology', description: 'Proprietary buffering prevention for uninterrupted viewing.' },
      { title: '24/7 Customer Support', description: 'Instant WhatsApp support around the clock.' },
      { title: 'All Devices Compatible', description: 'Works on Smart TV, Firestick, Android, iOS, MAG Box, and PC.' },
      { title: 'Instant Activation', description: 'Your subscription goes live within minutes of payment.' },
    ],
    included: [
      '21,000+ live TV channels',
      '65,000+ VOD movies & series',
      '4K / UHD / HD / SD quality',
      'All sports & PPV events',
      'International & local channels',
      'Anti-freeze technology',
      '24/7 WhatsApp support',
      'Instant activation',
      'All-device compatibility',
      'Full EPG (Electronic Program Guide)',
    ],
    targetAudience: [
      'First-time IPTV users wanting to test the service',
      'Travelers needing short-term streaming access',
      'Users watching a specific sports event or series season',
      'Anyone who wants flexibility without long commitments',
    ],
    faq: [
      {
        question: 'Can I upgrade to a longer plan after my 1-month subscription?',
        answer: 'Yes. You can upgrade to any plan at any time via WhatsApp. Your new subscription will begin immediately upon payment.',
      },
      {
        question: 'Does the 1-month plan include all channels?',
        answer: 'Absolutely. All plans — including the 1-month plan — include the full channel lineup of 21,000+ channels, 65,000+ VOD, and all PPV events.',
      },
      {
        question: 'How many devices can I use simultaneously?',
        answer: 'The standard plan supports 1 simultaneous connection. Contact us via WhatsApp if you need multi-screen support.',
      },
      {
        question: 'Is there a free trial before I buy the 1-month plan?',
        answer: 'Yes! We offer a free 24-hour trial. Contact us on WhatsApp and we\'ll set up your trial within minutes.',
      },
    ],
    image: '/products/1-month-iptv.svg',
    sku: 'IPTV-1M',
    accentClass: 'from-primary/20 to-transparent',
  },
  {
    id: '3-months',
    slug: '3-month-iptv-subscription',
    name: 'IPTV Trends 3 Month Plan',
    shortName: '3 Months',
    price: 39.99,
    priceFormatted: '$39.99',
    period: '3 months',
    billingLabel: 'Billed every 3 months',
    pricePerMonth: '$13.33',
    savings: 'Save 33%',
    savingsPercent: 33,
    popular: false,
    tagline: 'Three months of premium streaming — great value, total flexibility.',
    metaTitle: 'IPTV 3 Month Subscription – $39.99 ($13.33/mo) | IPTV Trends',
    metaDescription:
      'IPTV Trends 3-month plan for $39.99 ($13.33/month): 21,000+ live channels, 4K UHD, TV guide (EPG), instant activation and 24/7 support.',
    articleIntro:
      'The IPTV Trends 3 Month Plan strikes the perfect balance between value and flexibility. At just $39.99 for three months — that\'s only $13.33 per month — you save 33% compared to monthly billing while keeping the freedom to reassess after your term. This plan is ideal for regular streamers who want meaningful savings without committing to a full year. With Full EPG support, priority customer service, and instant activation, it\'s the go-to choice for consistent, high-quality IPTV access.',
    features: [
      { title: '21,000+ Live Channels', description: 'Full channel lineup including sports, news, and entertainment.' },
      { title: '65,000+ Movies & Series', description: 'Complete on-demand library with new releases.' },
      { title: '4K / UHD Streaming', description: 'Highest video quality on all compatible devices.' },
      { title: 'Full EPG Guide', description: 'Complete 7-day electronic program guide for easy navigation.' },
      { title: 'All Sports & PPV Events', description: 'Every major sporting event and pay-per-view included.' },
      { title: 'Instant Activation', description: 'Live within minutes, on any device.' },
      { title: 'All Devices Compatible', description: 'Smart TV, Firestick, Android, iOS, MAG, PC.' },
      { title: 'Priority Support', description: 'Faster response times for 3-month subscribers.' },
    ],
    included: [
      'Everything in the 1-month plan',
      'Full EPG (7-day guide)',
      'Multi-language content',
      'Priority customer support',
      'No hidden fees',
      '33% savings vs monthly',
    ],
    targetAudience: [
      'Regular streamers wanting quarterly savings',
      'Sports fans following a full season',
      'Families replacing cable for a season',
      'Users who tried the 1-month plan and loved it',
    ],
    faq: [
      {
        question: 'What is included in the 3-month plan vs the 1-month plan?',
        answer: 'The 3-month plan includes everything in the 1-month plan plus Full EPG guide, multi-language content access, and priority customer support — all at 33% less per month.',
      },
      {
        question: 'Does the price stay the same when I renew?',
        answer: 'Yes. Your renewal price is the same as your initial purchase price. No surprise increases.',
      },
      {
        question: 'Can I use this plan on a Smart TV and a phone at the same time?',
        answer: 'The standard plan includes 1 active connection. For multi-screen use, contact us for a multi-connection package.',
      },
      {
        question: 'Is a free trial available before buying the 3-month plan?',
        answer: 'Yes. We offer a free 24-hour trial on WhatsApp so you can verify quality before purchasing any plan.',
      },
    ],
    image: '/products/3-month-iptv.svg',
    sku: 'IPTV-3M',
    accentClass: 'from-primary/20 to-transparent',
  },
  {
    id: '6-months',
    slug: '6-month-iptv-subscription',
    name: 'IPTV Trends 6 Month Plan',
    shortName: '6 Months',
    price: 55.99,
    priceFormatted: '$55.99',
    period: '6 months',
    billingLabel: 'Billed every 6 months',
    pricePerMonth: '$9.33',
    savings: 'Save 53%',
    savingsPercent: 53,
    popular: false,
    tagline: 'Six months of buffer-free 4K streaming at over half price.',
    metaTitle: 'IPTV 6 Month Subscription – $55.99 ($9.33/mo) | IPTV Trends',
    metaDescription:
      'IPTV Trends 6-month plan for $55.99 ($9.33/month, save 53%): 21,000+ channels, 65,000+ movies and series in 4K and 24/7 support.',
    articleIntro:
      'The IPTV Trends 6 Month Plan is designed for the committed cord-cutter who demands reliability and value. At $55.99 for six months — only $9.33/month — you save 53% compared to monthly billing. But savings are just the beginning: 6-month subscribers enjoy premium server priority, meaning your streams get routed to our fastest nodes first. Combined with our Zero Buffer Guarantee and Catch-Up TV, this plan delivers a truly cable-replacement experience.',
    features: [
      { title: '21,000+ Live Channels', description: 'Complete global channel lineup.' },
      { title: '65,000+ Movies & Series', description: 'Full VOD library access.' },
      { title: '4K / UHD Streaming', description: 'Maximum picture quality.' },
      { title: 'Premium Server Priority', description: 'Your connections are routed to our fastest servers.' },
      { title: 'Catch-Up TV (7 Days)', description: 'Go back up to 7 days on supported channels.' },
      { title: 'Zero Buffer Guarantee', description: 'Smooth, uninterrupted streaming or we fix it fast.' },
      { title: 'Multi-Language Subtitles', description: 'Subtitles available in 20+ languages.' },
      { title: 'All PPV & Boxing Events', description: 'Every pay-per-view event included at no extra cost.' },
    ],
    included: [
      'Everything in the 3-month plan',
      'Premium server priority routing',
      'Catch-Up TV (7-day lookback)',
      'Zero buffer guarantee',
      'Multi-language subtitles',
      'All PPV & boxing events',
      'Instant setup guide',
      '53% savings vs monthly',
    ],
    targetAudience: [
      'Cord-cutters replacing cable or satellite TV',
      'Heavy streamers watching 3–4 hours daily',
      'Sports fans following multiple leagues',
      'Households with multiple viewers',
    ],
    faq: [
      {
        question: 'What does "premium server priority" mean?',
        answer: 'Premium server priority means your connection is routed to our highest-capacity, lowest-latency servers first — resulting in faster channel loads and fewer interruptions during peak hours.',
      },
      {
        question: 'How does Catch-Up TV work?',
        answer: 'Catch-Up TV lets you replay content from the past 7 days on supported channels. Simply scroll back in the EPG to any past programme and press play.',
      },
      {
        question: 'Is the Zero Buffer Guarantee real?',
        answer: 'Yes. If you experience persistent buffering that we cannot resolve within 24 hours, we will extend your subscription at no charge.',
      },
      {
        question: 'Does this plan work outside my home country?',
        answer: 'Yes. IPTV Trends works on any internet connection worldwide. All 21,000+ channels are accessible regardless of your location.',
      },
    ],
    image: '/products/6-month-iptv.svg',
    sku: 'IPTV-6M',
    accentClass: 'from-primary/20 to-transparent',
  },
  {
    id: '12-months',
    slug: '12-month-iptv-subscription',
    name: 'IPTV Trends 12 Month Plan',
    shortName: '12 Months',
    price: 79.99,
    priceFormatted: '$79.99',
    period: '12 months',
    billingLabel: 'Billed annually',
    pricePerMonth: '$6.67',
    savings: 'Save 67%',
    savingsPercent: 67,
    popular: true,
    badge: 'BEST SELLER',
    tagline: 'The most popular plan — maximum features, minimum cost per month.',
    metaTitle: 'IPTV 12 Month Plan – $79.99 ($6.67/mo) | IPTV Trends',
    metaDescription:
      'IPTV Trends 12-month plan for $79.99 ($6.67/month, save 67%): 21,000+ channels in 4K, catch-up TV, full VOD library and VIP support.',
    articleIntro:
      'The IPTV Trends 12 Month Plan is our best-selling subscription and the smartest choice for anyone who has made IPTV their primary entertainment source. At $79.99 per year — just $6.67 per month — you save 67% compared to monthly billing. But value is only part of the story. The 12-month plan unlocks our most powerful infrastructure: Anti-Freeze v10 Engine, VIP Dedicated Support, and full Catch-Up TV. Over 12,000 customers chose this plan in the past year — and for good reason.',
    features: [
      { title: '21,000+ Live Channels', description: 'The most complete live TV lineup available.' },
      { title: '65,000+ Full VOD Library', description: 'Every movie and series, including new arrivals.' },
      { title: '4K / UHD / HDR Streaming', description: 'The best possible picture quality.' },
      { title: 'Anti-Freeze v10 Engine', description: 'Our most advanced buffer-prevention technology.' },
      { title: 'VIP Dedicated Support', description: 'Your own support channel with fastest response times.' },
      { title: 'Catch-Up TV (7 Days)', description: 'Never miss a show again — replay the last 7 days.' },
      { title: 'Full PPV & Sports Access', description: 'Every pay-per-view, boxing, and MMA event.' },
      { title: 'All Devices — Unlimited', description: 'Use on Smart TV, Firestick, Android, iOS, MAG, PC.' },
    ],
    included: [
      'Everything in the 6-month plan',
      'Anti-Freeze v10 Engine (exclusive)',
      'VIP dedicated support channel',
      'Full VOD library with new releases',
      'Catch-Up TV (7-day lookback)',
      'HDR content where available',
      '67% savings vs monthly',
      'Priority server allocation',
    ],
    targetAudience: [
      'Power users who stream daily',
      'Families replacing cable entirely',
      'Sports fans who watch all year round',
      'Anyone wanting the best price-per-month',
    ],
    faq: [
      {
        question: 'Why is the 12-month plan the best seller?',
        answer: 'It offers the best combination of price ($6.67/month), features (Anti-Freeze v10, VIP Support, full VOD), and commitment. Most customers who try our service switch to the annual plan for maximum value.',
      },
      {
        question: 'What is Anti-Freeze v10 Engine?',
        answer: 'Anti-Freeze v10 is our proprietary stream stability technology. It pre-buffers intelligently, reroutes around congested nodes in real time, and reduces freezing by 99.7% vs standard IPTV delivery.',
      },
      {
        question: 'What does VIP Dedicated Support include?',
        answer: 'VIP subscribers get a private WhatsApp line with sub-1-hour response times, a dedicated setup assistant for new devices, and proactive outage notifications.',
      },
      {
        question: 'Can I share this plan with family members?',
        answer: 'The standard 12-month plan includes 1 connection. We offer multi-screen packages — ask us on WhatsApp for family pricing.',
      },
      {
        question: 'Is renewal automatic?',
        answer: 'No. We will notify you before your plan expires and you renew manually via WhatsApp. No automatic charges.',
      },
    ],
    image: '/products/12-month-iptv.svg',
    sku: 'IPTV-12M',
    accentClass: 'from-primary/25 to-transparent',
  },
  {
    id: '24-months',
    slug: '24-month-iptv-subscription',
    name: 'IPTV Trends 24 Month Plan',
    shortName: '24 Months',
    price: 129.99,
    priceFormatted: '$129.99',
    period: '24 months',
    billingLabel: 'Billed every 2 years',
    pricePerMonth: '$5.42',
    savings: 'Save 73%',
    savingsPercent: 73,
    popular: false,
    badge: 'BEST VALUE',
    tagline: 'The ultimate IPTV deal — two full years at the lowest price per month.',
    metaTitle: 'IPTV 24 Month Plan – $129.99 ($5.42/mo) | IPTV Trends',
    metaDescription:
      'IPTV Trends 24-month plan for $129.99 ($5.42/month, save 73%): the lowest monthly price, with 21,000+ channels in 4K and 24/7 support.',
    articleIntro:
      'The IPTV Trends 24 Month Plan is the ultimate subscription for those who refuse to compromise on quality or price. Two full years of premium IPTV access for just $129.99 — that\'s $5.42 per month, a 73% saving versus monthly billing. This plan is built for dedicated streamers: it includes every feature in the 12-month plan plus Family Sharing Mode, Custom Channel Lists, and Premium VOD First Access, meaning you watch new releases before anyone else. If IPTV is your main entertainment platform, this is the plan that makes the most sense financially and technically.',
    features: [
      { title: '21,000+ Live Channels', description: 'The world\'s most complete IPTV channel lineup.' },
      { title: '65,000+ VOD — First Access', description: 'Watch new movie and series additions before other subscribers.' },
      { title: '4K / UHD / HDR Streaming', description: 'Maximum quality, always.' },
      { title: 'Anti-Freeze v10 Engine', description: 'Industry-leading stream stability technology.' },
      { title: 'Family Sharing Mode', description: 'Manage multiple profiles and preferences under one account.' },
      { title: 'Custom Channel Lists', description: 'Build and save personalized channel lists for each viewer.' },
      { title: 'Lifetime Update Access', description: 'All future features and improvements automatically included.' },
      { title: 'VIP Dedicated Support', description: 'Fastest response, dedicated support line.' },
    ],
    included: [
      'Everything in the 12-month plan',
      'Family sharing mode',
      'Custom channel lists',
      'Premium VOD first access',
      'Lifetime update access',
      '73% savings vs monthly',
      'Maximum server allocation priority',
      'Early access to new features',
    ],
    targetAudience: [
      'Households where IPTV is the sole TV source',
      'Users who streamed for 1+ years and want the best rate',
      'Families wanting one plan for multiple viewing preferences',
      'Budget-conscious streamers who plan ahead',
    ],
    faq: [
      {
        question: 'What is Family Sharing Mode?',
        answer: 'Family Sharing Mode lets you create multiple viewer profiles under one account, each with its own channel favourites, VOD history, and parental controls.',
      },
      {
        question: 'What does "Premium VOD First Access" mean?',
        answer: 'New movies and series are added to our VOD library on a rolling basis. 24-month subscribers get access to newly-added content 48 hours before it becomes available to other plans.',
      },
      {
        question: 'What happens when the 24 months expire?',
        answer: 'You\'ll receive a reminder before expiry and can renew at the same rate. There are no auto-renewals or automatic charges.',
      },
      {
        question: 'Is this plan really the cheapest IPTV per month?',
        answer: 'At $5.42/month, the 24-month plan is the lowest cost-per-month of any IPTV subscription we\'ve seen on the market, with no compromise on features or quality.',
      },
    ],
    image: '/products/24-month-iptv.svg',
    sku: 'IPTV-24M',
    accentClass: 'from-primary/20 to-transparent',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
