export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  imageUrl: string;
  features: string[];
  popularFor: string;
  frequencyRecommendation: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  panels: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  neighborhood: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "storefront-window-cleaning",
    title: "Storefront Window Cleaning",
    tagline: "Interior & Exterior Glass, Entrance Doors & Transoms",
    description:
      "Your storefront is your customer's first impression. We deliver complete inside and outside streak-free wash for street-facing display windows, glass entrance doors, and overhead transom glass.",
    iconName: "Store",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Two-sided wash: exterior NYC street soot & interior hand smudges",
      "High-touch entrance door handles and push plates sanitized & shined",
      "Perimeter rubber seals & exterior metal frame wipe-down",
      "Guaranteed zero streak marks, drips, or cloudy residue",
    ],
    popularFor: "Cafes, boutiques, bakeries, barber shops, restaurants",
    frequencyRecommendation: "Weekly or Bi-Weekly",
  },
  {
    id: "commercial-office-glass",
    title: "Commercial & Office Glass",
    tagline: "Lobbies, Architectural Partitions & Conference Rooms",
    description:
      "Modern NYC commercial spaces thrive on open glass architecture. We keep executive conference rooms, lobby doors, privacy glass, and interior partitions spotless and crystal clear.",
    iconName: "Building2",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Floor-to-ceiling interior glass partitions and sliding doors",
      "Acoustic and decorative frosted glass gentle care",
      "Lint-free microfiber detailing with commercial squeegees",
      "Flexible after-hours or early morning corporate scheduling",
    ],
    popularFor: "Law firms, tech offices, creative studios, medical clinics",
    frequencyRecommendation: "Bi-Weekly or Monthly",
  },
  {
    id: "inside-outside-deep-care",
    title: "Inside & Outside Deep Glass Care",
    tagline: "Frames, Sills, Tracks & Hard-Water Deposit Removal",
    description:
      "When standard washing isn't enough. We eliminate persistent hard-water mineral stains, NYC traffic exhaust film, pollen, and stubborn window sill dirt buildup.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    features: [
      "Deep scrub with eco-friendly mineral scale removers",
      "Detailed track vacuuming and sill degreasing",
      "Restoration of exterior metal, vinyl, or wood window framing",
      "Pristine natural light enhancement across all elevations",
    ],
    popularFor: "High-traffic corners, post-winter revitalization, seasonal deep cleans",
    frequencyRecommendation: "Quarterly or Bi-Annual Deep Scrub",
  },
  {
    id: "post-construction-grand-opening",
    title: "Post-Construction & Grand Opening Shine",
    tagline: "Sticker, Paint Speck, Silicone & Construction Dust Removal",
    description:
      "Preparing to launch a new restaurant or retail shop in Astoria or NYC? We safely scrape away painter's tape residue, manufacturer stickers, plaster dust, and silicone smudges.",
    iconName: "Hammer",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Blade-safe precision glass scraping without scratching or etching",
      "Chemical-free adhesive dissolving solutions",
      "Complete perimeter gasket cleaning and debris extraction",
      "Picture-perfect clarity ready for ribbon cutting & photo shoots",
    ],
    popularFor: "New retail openings, commercial tenant renovations, store redesigns",
    frequencyRecommendation: "One-Time Pre-Opening Prep",
  },
  {
    id: "recurring-weekly-biweekly",
    title: "Recurring Weekly & Bi-Weekly Care",
    tagline: "Set-It-and-Forget-It Storefront Maintenance",
    description:
      "Never worry about dull or dirty glass again. We automatically arrive on your designated day before your business opens, ensuring your storefront always shines effortlessly.",
    iconName: "CalendarClock",
    imageUrl: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Consistent morning routine: done before your customers arrive",
      "Discounted member rates on every recurring visit",
      "No long-term locked contracts — pause or reschedule anytime",
      "Priority emergency touch-ups before inspections or events",
    ],
    popularFor: "High-visibility retail strips on 30th Ave, Broadway, Steinway St",
    frequencyRecommendation: "Weekly (Recommended for food & beverage)",
  },
  {
    id: "awning-mirror-display-detailing",
    title: "Awning, Mirror & Display Detailing",
    tagline: "Retail Display Cases, Showcases & Interior Mirrors",
    description:
      "Specialty glass cleaning for delicate retail display cases, countertop jewelry cases, studio full-length mirrors, and exterior entrance glass signage.",
    iconName: "Maximize2",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    features: [
      "Ultra-fine anti-static microfiber polishing to prevent lint",
      "Specialty glass treatments that resist fingerprint oil smudges",
      "Display lighting reflection optimization for retail merchandising",
      "Entrance canopy & storefront sign glass detailing",
    ],
    popularFor: "Jewelry stores, optical shops, fitness studios, clothing boutiques",
    frequencyRecommendation: "Weekly or Bi-Weekly",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-1-3-panels",
    name: "Compact Storefront",
    panels: "1–3 Glass Panels",
    price: "$20",
    period: "per visit",
    description: "Ideal for boutique cafes, bakery walk-ups, coffee shops, and compact storefront entrances.",
    popular: false,
    idealFor: "Corner bodegas, cafe doorways, grab-and-go storefronts",
    features: [
      "Inside & outside dual-sided glass cleaning",
      "Full entrance door glass & handle detailing",
      "Ledge & bottom sill wiped clean",
      "100% streak-free squeegee finish",
      "Early morning arrival option before opening",
    ],
  },
  {
    id: "plan-4-6-panels",
    name: "Standard Commercial Storefront",
    panels: "4–6 Glass Panels",
    price: "$35",
    period: "per visit",
    description: "Our most requested package. Perfectly sized for standard retail stores, restaurants, and corner businesses.",
    popular: true,
    idealFor: "Restaurants, clothing stores, salons, optical boutiques",
    features: [
      "Inside & outside cleaning for up to 6 panels",
      "Glass double entrance doors & side lites",
      "Overhead transom glass cleaned",
      "Fingerprint & street dust removal",
      "Frame and track detail wipe",
      "Priority recurring weekly or bi-weekly slot",
    ],
  },
  {
    id: "plan-7-10-panels",
    name: "Wide Facade / Corner Storefront",
    panels: "7–10 Glass Panels",
    price: "$50",
    period: "per visit",
    description: "Built for expansive glass facades, wrap-around corner shops, and multi-window commercial venues.",
    popular: false,
    idealFor: "Corner restaurants, flagship retail, fitness studios, multi-bay shops",
    features: [
      "Inside & outside cleaning for 7 to 10 panels",
      "Multiple entrance doors & emergency exits",
      "Exterior awning glass & transom panels",
      "Deep hard-water spot scrub & frame wipe",
      "Convenient monthly consolidated invoicing",
      "Dedicated recurring cleaner for consistency",
    ],
  },
  {
    id: "plan-custom-commercial",
    name: "Large Commercial & Multi-Store",
    panels: "10+ Panels / Custom",
    price: "Custom",
    period: "fast estimate",
    description: "Tailored commercial contracts for corporate offices, multi-location franchises, and expansive glass properties.",
    popular: false,
    idealFor: "Corporate plazas, banks, car dealerships, supermarket facades",
    features: [
      "Unlimited glass panels & interior partitions",
      "Custom scheduling (daily, multi-week, or monthly)",
      "Dedicated account manager & direct supervisor",
      "Full commercial liability insurance documentation",
      "Discounted bulk multi-location pricing across NYC",
    ],
  },
];

export const VALUE_PROPS = [
  {
    title: "Inside & Outside Cleaning",
    subtitle: "Complete Two-Sided Wash",
    description:
      "Most window washers only wipe the outside. We thoroughly clean both the exterior street grime and interior fingerprints, giving you 100% optical clarity.",
    iconName: "Layers",
  },
  {
    title: "Streak-Free & Spotless Finish",
    subtitle: "Professional Grade Squeegee Technique",
    description:
      "We use purified wash techniques, professional brass squeegees, and lint-free microfiber to leave zero streaks, drips, or cloudy haze on your glass.",
    iconName: "Sparkles",
  },
  {
    title: "Weekly & Bi-Weekly Plans",
    subtitle: "Effortless Hands-Off Maintenance",
    description:
      "Lock in recurring visits so your storefront is perpetually clean without needing to call every week. Simple, reliable, and cancel anytime with no lock-in contracts.",
    iconName: "CalendarCheck",
  },
  {
    title: "Reliable & On-Time NYC Service",
    subtitle: "Astoria Based, Minutes Away",
    description:
      "As a local Queens small business founded by Rudro, we take immense pride in showing up punctually, respecting your store hours, and treating your business like our own.",
    iconName: "Clock",
  },
];

export const SERVICE_AREAS = [
  {
    neighborhood: "Astoria",
    borough: "Queens",
    hotspots: "30th Ave, Broadway, Ditmars Blvd, Steinway St, Astoria Blvd",
    status: "Primary Home Hub — Same-Day & Morning Routes",
    highlight: true,
  },
  {
    neighborhood: "Long Island City (LIC)",
    borough: "Queens",
    hotspots: "Vernon Blvd, Jackson Ave, Hunters Point, Court Square",
    status: "Daily Scheduled Morning Service",
    highlight: true,
  },
  {
    neighborhood: "Sunnyside & Woodside",
    borough: "Queens",
    hotspots: "Queens Blvd, Skillman Ave, Roosevelt Ave",
    status: "Regular Weekly Routes",
    highlight: false,
  },
  {
    neighborhood: "Manhattan & Brooklyn",
    borough: "NYC Commercial",
    hotspots: "Midtown East, Greenpoint, Williamsburg, Upper East Side",
    status: "Commercial & Storefront Service by Appointment",
    highlight: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Rudro has been cleaning our cafe windows on 30th Ave every Tuesday morning before we open at 7 AM. The difference in natural morning light is night and day. Customers actually notice how sparkling clean our glass is!",
    author: "Marco D.",
    role: "General Manager",
    business: "Artisan Espresso Bar",
    neighborhood: "Astoria, Queens",
    stars: 5,
  },
  {
    id: "2",
    quote:
      "We run a high-end clothing boutique on Broadway with massive display windows. Dirty glass ruins the look of our mannequins. RA Glass Care does inside and outside every two weeks. Truly streak-free and dependable.",
    author: "Elena S.",
    role: "Store Owner",
    business: "Moda NYC Boutique",
    neighborhood: "Astoria, Queens",
    stars: 5,
  },
  {
    id: "3",
    quote:
      "After our restaurant renovation, our glass was covered in painter's tape adhesive and dust. RA Glass Care came in and performed a post-construction deep clean. We launched with crystal-clear storefronts. Highly recommended!",
    author: "Tariq K.",
    role: "Co-Owner & Chef",
    business: "Olive & Herb Mediterranean",
    neighborhood: "Long Island City, NY",
    stars: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you clean both the inside and outside of the glass?",
    answer:
      "Yes, absolutely! Unlike quick splash-and-dash washers, our standard storefront service covers both exterior street grime and interior fingerprints, grease smudges, and nose prints from passersby and pets.",
  },
  {
    question: "What time do you usually clean? Will you disrupt my customers?",
    answer:
      "We specialize in early morning routes between 6:00 AM and 9:00 AM before stores open their doors. We finish completely before your first customer arrives so your business operates without any disruption.",
  },
  {
    question: "How do your weekly and bi-weekly recurring plans work?",
    answer:
      "Our recurring plans are 100% hassle-free. We assign you a dedicated day of the week, show up like clockwork, and keep your storefront pristine. There are no binding contracts — you can pause, skip, or cancel whenever you need.",
  },
  {
    question: "What is the 20% First-Time Local Business Special?",
    answer:
      "We want to earn your long-term trust! All new local businesses in Astoria, Queens, and NYC receive 20% off their first storefront cleaning. Simply message us on WhatsApp or Email to claim the discount.",
  },
  {
    question: "How do I count my storefront glass panels?",
    answer:
      "A standard panel is any individual framed glass pane. For example, a single glass door equals 1 panel, and two large display picture windows on either side count as 2 panels (total 3 panels). If you're unsure, just snap a quick photo and text it to us on WhatsApp at (929) 501-1116!",
  },
  {
    question: "What happens if it rains on my scheduled cleaning day?",
    answer:
      "Light NYC drizzle does not make clean windows dirty (it's street dust and air pollution that causes spots). However, if there is heavy downpour or severe weather, we proactively reach out and reschedule your cleaning for the next clear morning.",
  },
];
