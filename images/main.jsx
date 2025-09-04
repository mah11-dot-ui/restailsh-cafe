import { useState } from "react";
import { motion } from "framer-motion";

// Brand can be changed from here in one place
const BRAND = "FiberX"; // rename anytime

const categories = [
  { name: "Graphics & Design", gigs: 1280, icon: "🎨", color: "from-rose-100 to-rose-50" },
  { name: "Programming & Tech", gigs: 2120, icon: "💻", color: "from-sky-100 to-sky-50" },
  { name: "Digital Marketing", gigs: 1540, icon: "📣", color: "from-emerald-100 to-emerald-50" },
  { name: "Video & Animation", gigs: 980, icon: "🎬", color: "from-amber-100 to-amber-50" },
  { name: "Writing & Translation", gigs: 1760, icon: "✍️", color: "from-indigo-100 to-indigo-50" },
  { name: "Music & Audio", gigs: 640, icon: "🎵", color: "from-fuchsia-100 to-fuchsia-50" },
];

const sampleGigs = [
  {
    id: 1,
    title: "I will build a responsive Next.js website",
    seller: "nahid_dev",
    rating: 4.9,
    reviews: 312,
    price: 120,
    badge: "Top Rated",
    avatar: "https://i.pravatar.cc/64?img=12",
    cover: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "I will design a modern business logo",
    seller: "sadia_art",
    rating: 5.0,
    reviews: 768,
    price: 60,
    badge: "Best Seller",
    avatar: "https://i.pravatar.cc/64?img=32",
    cover: "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "I will write SEO optimized blog posts",
    seller: "arif_writer",
    rating: 4.8,
    reviews: 201,
    price: 35,
    badge: "Rising Star",
    avatar: "https://i.pravatar.cc/64?img=5",
    cover: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=1600&auto=format&fit=crop",
  },
];

function Navbar() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-2xl bg-black text-white grid place-items-center font-bold">F</div>
            <span className="font-extrabold tracking-tight text-xl">{BRAND}</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm text-gray-600 hover:text-gray-900" href="#categories">Categories</a>
            <a className="text-sm text-gray-600 hover:text-gray-900" href="#gigs">Popular Gigs</a>
            <a className="text-sm text-gray-600 hover:text-gray-900" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 text-sm rounded-xl hover:bg-gray-100">Sign in</button>
            <button className="px-4 py-2 text-sm rounded-xl bg-black text-white hover:opacity-90">Become a Seller</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const [q, setQ] = useState("");
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hire Bangladeshi talent for any job — in minutes
          </motion.h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            Find the right freelancer for design, development, marketing and more. Clear pricing, secure payments, on-time delivery.
          </p>
          <div className="mt-6 flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try: logo design, next.js website, SEO blog..."
              className="flex-1 px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <button className="px-5 py-3 rounded-2xl bg-black text-white">Search</button>
          </div>
          <div className="mt-3 text-xs text-gray-500">Popular: logo • wordpress • social media ads • ecommerce</div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Bkash Protected", "Nagad", "Verified Sellers", "24/7 Support"].map((t) => (
              <div key={t} className="rounded-2xl border bg-white p-4 text-sm font-medium">
                ✅ {t}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <img
            alt="hero"
            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop"
          />
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
            {["Design", "Tech", "Marketing"].map((k) => (
              <div key={k} className="bg-white rounded-2xl p-4 shadow-xl border text-sm font-semibold">{k}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ name, gigs, icon, color }) {
  return (
    <a href="#gigs" className={`rounded-2xl p-5 border bg-gradient-to-b ${color} hover:shadow-md transition` }>
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 font-semibold">{name}</div>
      <div className="text-xs text-gray-600">{gigs.toLocaleString()} gigs</div>
    </a>
  );
}

function GigCard({ gig }) {
  return (
    <div className="rounded-2xl overflow-hidden border bg-white hover:shadow-md transition">
      <img src={gig.cover} alt={gig.title} className="w-full aspect-video object-cover" />
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <img src={gig.avatar} alt={gig.seller} className="size-8 rounded-full" />
          <div className="text-sm font-medium">{gig.seller} <span className="ml-2 text-xs rounded-full px-2 py-0.5 bg-gray-100">{gig.badge}</span></div>
        </div>
        <div className="font-semibold line-clamp-2">{gig.title}</div>
        <div className="text-sm">⭐ {gig.rating} <span className="text-gray-500">({gig.reviews})</span></div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">Starting at</div>
          <div className="text-lg font-bold">${gig.price}</div>
        </div>
        <button className="w-full py-2 rounded-xl bg-black text-white">Continue</button>
      </div>
    </div>
  );
}

function FAQ() {
  const items = [
    { q: "কীভাবে কাজ পোস্ট করবো?", a: "Sign in করে পোস্ট জব বাটনে ক্লিক করুন, বাজেট ও ডেডলাইন দিন, তারপর বিড রিভিউ করুন।" },
    { q: "পেমেন্ট সেফটি আছে?", a: "হ্যাঁ। এসক্রো সিস্টেম: কাজ ডেলিভারির আগে টাকা হোল্ডে থাকে; কনফার্মের পর রিলিজ।" },
    { q: "কোন পেমেন্ট মেথড?", a: "Bkash, Nagad, Rocket, Bank, এবং আন্তর্জাতিক ক্লায়েন্টদের জন্য Stripe/PayPal ইন্টেগ্রেশন।" },
    { q: "ডেলিভারি টাইম কিভাবে ঠিক হবে?", a: "গিগে নির্ধারিত টাইমলাইন থাকে; কাস্টম অফারেও নির্দিষ্ট করা যায়।" },
  ];
  return (
    <section id="faq" className="py-12 md:py-16 bg-gray-50 border-t">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {items.map((it) => (
            <details key={it.q} className="group rounded-2xl border bg-white p-4">
              <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                <span>{it.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="pt-2 text-gray-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section id="categories" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Browse by category</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">See all</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c) => (
              <CategoryCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section id="gigs" className="py-12 md:py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Popular gigs</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View more</a>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {sampleGigs.map((g) => (
              <GigCard key={g.id} gig={g} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <footer className="py-10 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-6 items-center">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-2xl bg-black text-white grid place-items-center font-bold">F</div>
              <span className="font-extrabold tracking-tight">{BRAND}</span>
            </div>
            <p className="text-sm text-gray-600">A simple Fiverr‑style marketplace MVP UI. Replace static data with your backend later.</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-2">Platform</div>
              <ul className="space-y-1 text-gray-600">
                <li>Categories</li>
                <li>Top Sellers</li>
                <li>How it works</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Support</div>
              <ul className="space-y-1 text-gray-600">
                <li>Help Center</li>
                <li>Buyer Protection</li>
                <li>Report a Seller</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="space-y-1 text-gray-600">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
      </footer>
    </div>
  );
}
