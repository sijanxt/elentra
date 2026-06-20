export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  features: string[];
  dimensions: string;
  warranty: string;
  status: "In Stock" | "Limited Edition" | "Pre-order";
  tag: string;
  image: string;
}

export interface CategoryData {
  id: number;
  title: string;
  description: string;
  image: string;
  iconName: string;
  productIds: string[];
}

const rawProducts = [
  {
    id: "1",
    name: "AeroSteam Induction Cooktop",
    category: "Kitchen Appliances",
    price: "Rs. 249,999",
    description: "Combining rapid induction heating with integrated steam extraction in a sleek, edge-free ceramic design. The AeroSteam revolutionizes cooking with precision temperature control and silent operation.",
    specs: [
      "Flush mount installation",
      "Integrated downdraft extractor",
      "Vapor Control Technology",
      "4 cooking zones with boost function",
      "Touch control panel",
      "Auto-shutoff safety feature"
    ],
    features: [
      "Rapid heating with 90% energy efficiency",
      "Whisper-quiet operation at 42dB",
      "Easy-clean ceramic glass surface",
      "Compatible with all cookware types",
      "Smart temperature sensing"
    ],
    dimensions: "30\" W x 22\" D x 3\" H",
    warranty: "5 years comprehensive",
    status: "In Stock",
    tag: "Cooking",
    image: "/products/cooktop.png"
  },
  {
    id: "2",
    name: "Quantum Wave Smart Oven",
    category: "Kitchen Appliances",
    price: "Rs. 329,999",
    description: "Features dual-zone temperature matching and built-in camera monitoring for perfect browning results every time. Experience precision baking like never before.",
    specs: [
      "Double convection system",
      "Self-cleaning carbon grid",
      "AI camera sensor",
      "10 cooking modes",
      "Steam assist function",
      "Rotisserie included"
    ],
    features: [
      "AI-powered cooking assistant",
      "Real-time food monitoring",
      "Even heat distribution",
      "Energy Star certified",
      "Wi-Fi connected"
    ],
    dimensions: "30\" W x 24\" D x 30\" H",
    warranty: "5 years comprehensive",
    status: "Limited Edition",
    tag: "Baking",
    image: "/products/smart_oven.png"
  },
  {
    id: "3",
    name: "AeroFresh 4-Door Refrigerator",
    category: "Refrigeration",
    price: "Rs. 459,999",
    description: "Keeps delicate greens fresh twice as long with split zone humidity control and discrete filtered water tap. Designed for optimal preservation and architectural flush integration.",
    specs: [
      "Triple-zone evaporator",
      "Flat stainless profile",
      "Humidity matrix control",
      "LED lighting",
      "Water dispenser",
      "Ice maker included"
    ],
    features: [
      "Advanced cooling technology",
      "Energy efficient operation",
      "Large capacity storage",
      "Quiet operation",
      "Smart temperature management"
    ],
    dimensions: "36\" W x 32\" D x 70\" H",
    warranty: "5 years comprehensive",
    status: "In Stock",
    tag: "Preservation",
    image: "/products/fridge.png"
  },
  {
    id: "4",
    name: "Sommelier Pro Wine Vault",
    category: "Refrigeration",
    price: "Rs. 289,999",
    description: "Stores up to 72 bottles under custom light scenarios and sound-dampened conditions. Provides vibration decoupling and UV filtration to mature your collection.",
    specs: [
      "Anti-vibration base",
      "UV filtered glass",
      "Dual humidity zones",
      "72 bottle capacity",
      "LED lighting",
      "Digital temperature control"
    ],
    features: [
      "Professional wine storage",
      "Vibration-free compressor",
      "Precise temperature zones",
      "Elegant design",
      "Energy efficient"
    ],
    dimensions: "24\" W x 24\" D x 68\" H",
    warranty: "3 years comprehensive",
    status: "Pre-order",
    tag: "Wine Care",
    image: "/products/wine_vault.png"
  },
  {
    id: "5",
    name: "AeroSilent Split System",
    category: "Climate Control",
    price: "Rs. 189,999",
    description: "Engineered to deliver filtered fresh air in virtual silence, automatically sensing ambient particulate load and adapting airflow curves.",
    specs: [
      "18dB Sound Level",
      "HEPA H14 filtration",
      "Coanda air deflection",
      "Smart sensor technology",
      "Energy efficient operation",
      "Remote control included"
    ],
    features: [
      "Ultra-quiet operation",
      "Advanced air filtration",
      "Smart temperature control",
      "Sleek modern design",
      "Easy maintenance"
    ],
    dimensions: "Indoor: 35\" W x 12\" D x 10\" H",
    warranty: "5 years comprehensive",
    status: "In Stock",
    tag: "Comfort",
    image: "/products/split_ac.png"
  },
  {
    id: "6",
    name: "Thermos Pro Radar Control",
    category: "Climate Control",
    price: "Rs. 39,999",
    description: "Adjusts rooms dynamically when occupied and learns thermal efficiency curves of the home to optimize heating and cooling cycles.",
    specs: [
      "Radar occupancy sensing",
      "AI thermal predictive learning",
      "Minimalist glass dial",
      "Wi-Fi connectivity",
      "Voice control compatible",
      "Energy monitoring"
    ],
    features: [
      "Smart occupancy detection",
      "AI learning capabilities",
      "Energy savings optimization",
      "Modern interface",
      "Easy installation"
    ],
    dimensions: "4\" W x 4\" D x 1\" H",
    warranty: "2 years comprehensive",
    status: "In Stock",
    tag: "Automation",
    image: "/products/smart_thermostat.png"
  },
  {
    id: "7",
    name: "HydroClean Pro Washer",
    category: "Laundry Care",
    price: "Rs. 169,999",
    description: "Minimizes fabric stress and micro-tear profiles via variable tumbling dynamics, direct-drive motor stability, and precision water injection.",
    specs: [
      "Direct-drive brushless motor",
      "Sub-drum suspension",
      "Auto-dose dispenser",
      "15 wash programs",
      "Steam function",
      "Large capacity drum"
    ],
    features: [
      "Gentle fabric care",
      "Energy efficient",
      "Quiet operation",
      "Smart dosing system",
      "Quick wash cycles"
    ],
    dimensions: "27\" W x 30\" D x 39\" H",
    warranty: "5 years comprehensive",
    status: "In Stock",
    tag: "Fabric Care",
    image: "/products/washer.png"
  },
  {
    id: "8",
    name: "AeroDry Heat Pump Dryer",
    category: "Laundry Care",
    price: "Rs. 149,999",
    description: "Uses a highly efficient closed-loop compressor to dry garments at lower, gentler temperatures, preventing shrinkage and fiber wear.",
    specs: [
      "Closed-loop heating",
      "Real-time moisture matrix",
      "Lint flush system",
      "12 drying programs",
      "Wrinkle prevention",
      "Energy Star certified"
    ],
    features: [
      "Gentle low-temperature drying",
      "Energy efficient operation",
      "Advanced moisture sensing",
      "Fabric care technology",
      "Easy maintenance"
    ],
    dimensions: "27\" W x 30\" D x 39\" H",
    warranty: "5 years comprehensive",
    status: "In Stock",
    tag: "Fabric Care",
    image: "/products/dryer.png"
  },
  {
    id: "9",
    name: "RoboClean X10 Station",
    category: "Cleaning",
    price: "Rs. 89,999",
    description: "Fully automated dry and wet sweep robot using dual-channel LiDAR radar and reactive camera avoidances for ultimate floor care automation.",
    specs: [
      "6000Pa vacuum suction",
      "Rotary hot mop scrubbing",
      "Auto empty/wash station",
      "LiDAR navigation",
      "Camera avoidance",
      "Multi-floor mapping"
    ],
    features: [
      "Fully automated cleaning",
      "Powerful suction",
      "Wet and dry modes",
      "Smart navigation",
      "Self-maintenance"
    ],
    dimensions: "13\" W x 13\" D x 4\" H",
    warranty: "2 years comprehensive",
    status: "In Stock",
    tag: "Robotics",
    image: "/products/vaccumclenaer.png"
  },
  {
    id: "10",
    name: "Cyclonic Stick V15",
    category: "Cleaning",
    price: "Rs. 59,999",
    description: "Ultra-light handheld vacuum detailing hidden dust arrays via integrated narrow-angle green laser and advanced brush mechanics.",
    specs: [
      "150AW brush motor",
      "Laser particle indicator",
      "Carbon fiber wand",
      "HEPA filtration",
      "60-minute runtime",
      "Multiple attachments"
    ],
    features: [
      "Lightweight design",
      "Powerful suction",
      "Laser dust detection",
      "Long battery life",
      "Versatile cleaning"
    ],
    dimensions: "11\" W x 10\" D x 49\" H",
    warranty: "2 years comprehensive",
    status: "In Stock",
    tag: "Precision",
    image: "/products/vaccumclenaer.png"
  },
  {
    id: "11",
    name: "Nexus Hub Pro Center",
    category: "Smart Home",
    price: "Rs. 49,999",
    description: "Your home dashboard showing real-time utility parameters, filter stats, and active cycles across all connected appliances in the home network.",
    specs: [
      "10\" flush glass console",
      "Zigbee / Matter / Thread",
      "Vocal array microphone",
      "Touch screen interface",
      "Wall mountable",
      "Cloud connectivity"
    ],
    features: [
      "Central home control",
      "Real-time monitoring",
      "Voice control",
      "Universal compatibility",
      "Intuitive interface"
    ],
    dimensions: "10\" W x 8\" D x 1\" H",
    warranty: "3 years comprehensive",
    status: "In Stock",
    tag: "Integration",
    image: "/products/smart_hub.png"
  },
  {
    id: "12",
    name: "AeroPurify Station Pro",
    category: "Smart Home",
    price: "Rs. 69,999",
    description: "Continuous evaluation of ambient air matrices, triggering ventilation fans to clear kitchen fumes and VOC chemicals dynamically.",
    specs: [
      "Particulate load tracker",
      "VOC chemical analyzer",
      "Direct HVAC bypass",
      "Smart sensors",
      "Auto-adjust ventilation",
      "Air quality display"
    ],
    features: [
      "Advanced air monitoring",
      "Automatic purification",
      "Smart HVAC integration",
      "Real-time alerts",
      "Energy efficient"
    ],
    dimensions: "12\" W x 12\" D x 14\" H",
    warranty: "3 years comprehensive",
    status: "In Stock",
    tag: "Purity",
    image: "/products/air_purifier.png"
  }
];

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  slug: p.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
})) as Product[];

export const categories: CategoryData[] = [
  {
    id: 1,
    title: "Kitchen Appliances",
    description: "Precision cooking solutions with seamless flush integration.",
    image: "/categories/kitchen.png",
    iconName: "utensils",
    productIds: ["1", "2"]
  },
  {
    id: 2,
    title: "Refrigeration",
    description: "Advanced climate preservation in architectural configurations.",
    image: "/categories/fridge.png",
    iconName: "refrigerator",
    productIds: ["3", "4"]
  },
  {
    id: 3,
    title: "Climate Control",
    description: "Invisible heating and purification systems for optimal purity.",
    image: "/categories/fridge.png", // Wait, this uses category image in featured section? No, let's keep it or map it
    iconName: "thermometer",
    productIds: ["5", "6"]
  },
  {
    id: 4,
    title: "Laundry Care",
    description: "Advanced fiber care technologies working in concert.",
    image: "/categories/fridge.png",
    iconName: "washer",
    productIds: ["7", "8"]
  },
  {
    id: 5,
    title: "Cleaning",
    description: "Robotic systems designed to keep spaces pristine.",
    image: "/categories/cleaning.png",
    iconName: "vacuum",
    productIds: ["9", "10"]
  },
  {
    id: 6,
    title: "Smart Home",
    description: "Centralized control hubs uniting all appliance frameworks.",
    image: "/categories/smart.png",
    iconName: "smartphone",
    productIds: ["11", "12"]
  }
];
