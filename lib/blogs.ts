export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // split by paragraphs
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tag: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "architectural-kitchen-integration",
    title: "The Art of Architectural Kitchen Integration",
    excerpt: "Explore how flush-mounted premium appliances are redefining high-end residential interiors.",
    content: [
      "In contemporary residential architecture, the kitchen has evolved from a closed service area into the physical and social heart of the home. As living spaces become more integrated, the visual boundaries between kitchen and lounge have dissolved. This architectural shift demands a new approach to appliance design—one where functionality is high-performing yet visually silent.",
      "Architectural kitchen integration is the practice of designing appliances that sit flush with cabinetry, hiding hardware behind custom fronts or utilizing clean, non-reflective surfaces. It is a design ethos that prioritizes architectural lines over metallic clutter. When an induction cooktop sits perfectly flush with a natural quartzite countertop, the kitchen assumes the clean, tactile quality of a sculptural gallery.",
      "At Elentra, our AeroSteam Induction system is engineered with this level of detail. By drawing steam down directly at the cooking surface rather than using a heavy overhead hood, we allow the eye to travel across the room uninterrupted. The result is a kitchen that feels spacious, clean, and connected to the wider residential narrative."
    ],
    date: "June 12, 2026",
    readTime: "4 min read",
    author: {
      name: "Elena Rostova",
      role: "Design Director",
      avatar: "/team/member3.png"
    },
    image: "/hero/about_hero.png", // reusing existing images
    tag: "Kitchen Design"
  },
  {
    slug: "sustainable-comfort",
    title: "Sustainable Comfort: Balancing Aesthetics and Eco-Efficiency",
    excerpt: "How modern households can achieve thermal and environmental harmony without sacrificing luxury.",
    content: [
      "For decades, the concept of luxury was associated with excess. Today, true luxury is defined by intelligence, efficiency, and harmony with the natural environment. Homeowners no longer want to choose between high-end comfort and environmental responsibility. They expect systems that deliver both.",
      "Achieving sustainable comfort requires shifting from reactive utility controls to predictive learning systems. Traditional heating and cooling systems operate on binary cycles, resulting in steep energy spikes. Modern climate systems, however, utilize radar occupancy sensing and thermal curves to learn a home’s heat dissipation properties.",
      "By maintaining consistent, low-load conditioning, these systems reduce utility draw by up to 30% while maintaining a more stable ambient temperature. Combined with high-efficiency HEPA particulate filtration, the modern home becomes a sanctuary of pure air and silent operation—proving that ecological awareness is the ultimate luxury."
    ],
    date: "May 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Vasilis Papas",
      role: "Managing Director",
      avatar: "/team/member2.png"
    },
    image: "/categories/smart.png",
    tag: "Innovation"
  },
  {
    slug: "perfect-contemporary-wine-vault",
    title: "Designing the Perfect Contemporary Wine Vault",
    excerpt: "Understanding the delicate balance of light, humidity, and vibration in wine preservation.",
    content: [
      "A wine collection is more than a gather of bottles; it is a repository of history, craft, and personal taste. Yet, the chemical composition of wine is incredibly fragile, easily degraded by small fluctuations in temperature, light exposure, and ambient vibration.",
      "Traditional cellars relied on heavy subterranean architecture. Today, contemporary homes feature glass wine vaults integrated directly into formal dining rooms and lounges. To achieve this without compromising the collection, wine vaults must utilize advanced engineering: UV-filtered glass doors to block light-induced aging, vibration-decoupling compressors to prevent sediment disturbance, and dual-zone evaporators to maintain separate humidity levels for reds and whites.",
      "The result is a striking visual installation that functions with absolute precision. By decoupling mechanical vibrations from the shelving, we ensure that every bottle matures under optimal conditions, ready to be poured and enjoyed as the winemaker intended."
    ],
    date: "April 15, 2026",
    readTime: "6 min read",
    author: {
      name: "Rene Hartert",
      role: "Partner",
      avatar: "/team/member1.png"
    },
    image: "/categories/kitchen.png",
    tag: "Preservation"
  }
];
