import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Product data - mapped by numeric ID
const products: Record<string, {
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  features: string[];
  dimensions: string;
  warranty: string;
  status: string;
  image: string;
}> = {
  "1": {
    name: "AeroSteam Induction Cooktop",
    category: "Kitchen Appliances",
    price: "$2,499",
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
    image: "/products/fridge.png"
  },
  "2": {
    name: "Quantum Wave Smart Oven",
    category: "Kitchen Appliances",
    price: "$3,299",
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
    image: "/products/fridge.png"
  },
  "3": {
    name: "AeroFresh 4-Door Refrigerator",
    category: "Refrigeration",
    price: "$4,599",
    description: "Keeps delicate greens fresh twice as long with split zone humidity control and discrete filtered water tap.",
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
    image: "/products/fridge.png"
  },
  "4": {
    name: "Sommelier Pro Wine Vault",
    category: "Refrigeration",
    price: "$2,899",
    description: "Stores up to 72 bottles under custom light scenarios and sound-dampened conditions.",
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
    image: "/products/fridge.png"
  },
  "5": {
    name: "AeroSilent Split System",
    category: "Climate Control",
    price: "$1,899",
    description: "Engineered to deliver filtered fresh air in virtual silence, automatically sensing ambient particulate load.",
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
    image: "/products/fridge.png"
  },
  "6": {
    name: "Thermos Pro Radar Control",
    category: "Climate Control",
    price: "$399",
    description: "Adjusts rooms dynamically when occupied and learns thermal efficiency curves of the home.",
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
    image: "/products/fridge.png"
  },
  "7": {
    name: "HydroClean Pro Washer",
    category: "Laundry Care",
    price: "$1,699",
    description: "Minimizes fabric stress and micro-tear profiles via variable tumbling dynamics and water injection.",
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
    image: "/products/fridge.png"
  },
  "8": {
    name: "AeroDry Heat Pump Dryer",
    category: "Laundry Care",
    price: "$1,499",
    description: "Uses a highly efficient closed-loop compressor to dry garments at lower, gentler temperatures.",
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
    image: "/products/fridge.png"
  },
  "9": {
    name: "RoboClean X10 Station",
    category: "Cleaning",
    price: "$899",
    description: "Fully automated dry and wet sweep robot using dual-channel LiDAR radar and reactive camera avoidances.",
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
    image: "/products/vaccumclenaer.png"
  },
  "10": {
    name: "Cyclonic Stick V15",
    category: "Cleaning",
    price: "$599",
    description: "Ultra-light handheld vacuum detailing hidden dust arrays via integrated narrow-angle green laser.",
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
    image: "/products/vaccumclenaer.png"
  },
  "11": {
    name: "Nexus Hub Pro Center",
    category: "Smart Home",
    price: "$499",
    description: "Your home dashboard showing real-time utility parameters, filter stats, and active cycles across all appliances.",
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
    image: "/products/fridge.png"
  },
  "12": {
    name: "AeroPurify Station Pro",
    category: "Smart Home",
    price: "$699",
    description: "Continuous evaluation of ambient air matrices, triggering ventilation fans to clear kitchen fumes dynamically.",
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
    image: "/products/fridge.png"
  }
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-cream-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-cream-600">Products</Link>
          <span>/</span>
          <span className="text-zinc-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-zinc-100 rounded-3xl flex items-center justify-center border border-zinc-200 aspect-[4/5] relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm font-semibold text-cream-600 uppercase tracking-wider mb-3 block">
              {product.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-zinc-900">{product.price}</span>
              <span className={`text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-full ${
                product.status === "In Stock" 
                  ? "bg-emerald-50 text-emerald-600" 
                  : product.status === "Limited Edition"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-blue-50 text-blue-600"
              }`}>
                {product.status}
              </span>
            </div>
            
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="flex-1 bg-cream-600 hover:bg-cream-700 text-white text-center font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
              >
                Request Quote
              </Link>
              <button className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold py-4 px-8 rounded-lg transition-all">
                Add to Wishlist
              </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
              <div>
                <p className="text-sm text-zinc-500 mb-1">Dimensions</p>
                <p className="font-semibold text-zinc-900">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Warranty</p>
                <p className="font-semibold text-zinc-900">{product.warranty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Specifications */}
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Specifications</h2>
            <ul className="space-y-3">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-700">
                  <svg className="w-5 h-5 text-cream-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-700">
                  <svg className="w-5 h-5 text-cream-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-cream-600 hover:text-cream-700 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
