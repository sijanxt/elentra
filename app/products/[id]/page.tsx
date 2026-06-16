import Link from "next/link";
import { notFound } from "next/navigation";

// Product data
const products = {
  "aerosteam-cooktop": {
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
    status: "In Stock"
  },
  "quantum-oven": {
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
    status: "Limited Edition"
  },
  // Add more products as needed
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products];

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
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-3xl flex items-center justify-center border border-zinc-200 h-[500px]">
            <div className="text-9xl text-cream-500/30 font-bold">
              {product.name.charAt(0)}
            </div>
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
