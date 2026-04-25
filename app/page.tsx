"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Star,
  Shield,
  Zap,
  HeadphonesIcon,
  Award,
  TrendingUp,
  Users,
  Package,
  Clock,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Printer,
  Laptop,
  Copy,
  Monitor,
  Cpu,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";

/* ─── Intersection Observer hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated counter ─── */
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / (1800 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Data ─── */
const products = [
  { name: "Laser Pro Printer", category: "Laser Printers", desc: "High-speed monochrome laser printing — ideal for heavy-duty office workloads.", image: "/products/laser_pro.jpg", tag: "Best Seller" },
  { name: "Color LaserJet", category: "Color Printers", desc: "Vibrant full-color prints with professional-grade quality for presentations.", image: "/products/color_laserjet.jpg", tag: "Popular" },
  { name: "Business Laptop", category: "Laptops", desc: "Powerful, lightweight laptops for productivity — perfectly suited for business.", image: "/products/laptop.jpg", tag: "New Arrival" },
  { name: "Transformer Laptop", category: "2-in-1 Laptops", desc: "Versatile 2-in-1 convertible laptop — tablet and laptop in one sleek device.", image: "/products/transformer_laptop.jpg", tag: "Trending" },
  { name: "Standing Printer", category: "All-in-One Printers", desc: "All-in-one printer with scanning, copying and fax capabilities built in.", image: "/products/standing_printer.jpg", tag: "Top Pick" },
  { name: "Office Printer Suite", category: "Multifunction Printers", desc: "Complete office printing solution — scan, copy, print and email seamlessly.", image: "/products/printers.jpg", tag: "Value" },
  { name: "Compact Printer", category: "Inkjet Printers", desc: "Compact, reliable inkjet printer perfect for small offices and home use.", image: "/products/printer.jpg", tag: "Affordable" },
  { name: "Professional Copier", category: "Copier Machines", desc: "Industrial-grade copier built for high-volume production in any office.", image: "/products/standing_printer_2.jpg", tag: "Heavy Duty" },
];

const features = [
  { icon: Shield, title: "100% Genuine Products", desc: "Every product is brand new, genuine, and comes with manufacturer warranty. No refurbished items — ever." },
  { icon: TrendingUp, title: "Competitive Pricing", desc: "Strategically located at Alaba International Market, we offer the most competitive prices in Nigeria." },
  { icon: HeadphonesIcon, title: "Expert Support", desc: "Our knowledgeable team is ready to guide you to the perfect solution for your business needs." },
  { icon: Wrench, title: "After-Sales Service", desc: "We stand behind every sale with dedicated after-sales support, maintenance and technical assistance." },
  { icon: Zap, title: "Fast Delivery", desc: "Swift nationwide delivery across Nigeria. Order today and get your equipment when you need it." },
  { icon: Award, title: "Trusted Since Day One", desc: "Years of excellence in the Nigerian market. Thousands of satisfied clients and businesses trust us." },
];

const testimonials = [
  { name: "Emeka Okonkwo", role: "CEO, Okonkwo Consultum", city: "Lagos, Nigeria", stars: 5, text: "DE-BEST OKIBE transformed our entire office setup. The printers and computers we got are excellent quality, and their team was incredibly helpful. Will definitely return for more equipment." },
  { name: "Aisha Bello", role: "Office Manager, Lamid Corp", city: "Abuja, Nigeria", stars: 5, text: "I was amazed by the professionalism and the range of products available. Prices are very competitive compared to other suppliers. The after-sales support has been outstanding." },
  { name: "Chukwudi Eze", role: "IT Director, Zenith Holdings", city: "Lagos, Nigeria", stars: 5, text: "We supply our entire department's office equipment through DE-BEST OKIBE. Reliable, genuine products, fast delivery, and a team that truly understands business needs." },
];

const categories = [
  { icon: Printer, label: "Printers", count: "50+ models" },
  { icon: Copy, label: "Copiers", count: "30+ models" },
  { icon: Laptop, label: "Laptops", count: "40+ models" },
  { icon: Monitor, label: "Desktops", count: "25+ models" },
  { icon: Cpu, label: "Accessories", count: "200+ items" },
  { icon: Wrench, label: "Consumables", count: "100+ items" },
];

/* ─── Animated section wrapper ─── */
function Section({
  id, className = "", style, children,
}: {
  id?: string; className?: string; style?: React.CSSProperties; children: React.ReactNode;
}) {
  const { ref, visible } = useInView();
  return (
    <section
      id={id} ref={ref} style={style}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen section-bg'>
      <Navbar />

      {/* ── HERO ── */}
      <section
        id='home'
        className='relative min-h-[90vh] flex items-center overflow-hidden'
        style={{ backgroundColor: "#0D1B3E" }}
        aria-label='Hero — DE-BEST OKIBE OFFICE EQUIPMENT, Alaba Market Lagos'>
        <div
          className='absolute inset-0 opacity-5 pointer-events-none'
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#D4A017 0px,#D4A017 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#D4A017 0px,#D4A017 1px,transparent 1px,transparent 40px)",
          }}
        />
        <div
          className='absolute top-10 right-10 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none'
          style={{ backgroundColor: "#D4A017" }}
        />
        <div
          className='absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none'
          style={{ backgroundColor: "#1a2f5e" }}
        />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left */}
            <div className='space-y-8'>
              <div className='inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm'>
                <span
                  className='w-2 h-2 rounded-full animate-pulse'
                  style={{ backgroundColor: "#D4A017" }}
                />
                <span className='text-sm text-white/90 font-medium'>
                  Nigeria&apos;s #1 Trusted Office Equipment Supplier
                </span>
              </div>
              <div className='space-y-4'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                  Equip Your Office
                  <span className='block shimmer-text mt-1'>with the Best</span>
                  <span className='block text-white/90 mt-1'>in Nigeria</span>
                </h1>
                <p className='text-lg text-gray-300 leading-relaxed max-w-xl'>
                  Premium printers, copiers, laptops, desktops &amp; accessories
                  — sourced from top global brands. Competitive prices, genuine
                  products, expert support from Alaba International Market,
                  Lagos.
                </p>
              </div>
              <div className='flex flex-wrap gap-3'>
                {[
                  "Genuine Products",
                  "Warranty Included",
                  "After-Sales Support",
                  "Nationwide Delivery",
                ].map((t) => (
                  <span
                    key={t}
                    className='flex items-center gap-1.5 text-sm text-green-300 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full'>
                    <CheckCircle2 className='size-3.5' />
                    {t}
                  </span>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a href='#products'>
                  <button
                    className='group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-lg pulse-glow'
                    style={{ backgroundColor: "#D4A017", color: "#0D1B3E" }}>
                    View Products{" "}
                    <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
                  </button>
                </a>
                <a href='tel:+2348066538558'>
                  <button className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all backdrop-blur-sm'>
                    <Phone className='size-4' />
                    Call 08066538558
                  </button>
                </a>
              </div>
            </div>

            {/* Right: image mosaic */}
            <div className='hidden lg:block relative'>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { src: "/products/laser_pro.jpg", label: "Laser Printers" },
                  { src: "/products/laptop.jpg", label: "Laptops" },
                  {
                    src: "/products/printer.jpg",
                    label: "Color Copiers",
                  },
                  {
                    src: "/products/transformer_laptop.jpg",
                    label: "2-in-1 Devices",
                  },
                ].map(({ src, label }) => (
                  <div
                    key={src}
                    className='glass-card rounded-2xl overflow-hidden group cursor-pointer'>
                    <div className='relative aspect-square overflow-hidden'>
                      <Image
                        src={src}
                        alt={`${label} at DE-BEST OKIBE, Alaba Market Lagos`}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                        sizes='200px'
                        priority
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                      <p className='absolute bottom-3 left-3 text-white text-xs font-semibold'>
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='absolute -top-4 -right-4 float-card rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 float-animation'>
                <Image
                  src='/logo.png'
                  alt='DE-BEST OKIBE'
                  width={32}
                  height={32}
                  style={{ width: 32, height: "auto" }}
                  className='object-contain'
                />
                <div>
                  <p className='text-xs font-bold navy-text'>Top Rated</p>
                  <p className='text-xs text-gray-500 dark:text-slate-400'>
                    ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>
              <div
                className='absolute -bottom-4 -left-4 float-card rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 float-animation'
                style={{ animationDelay: "1.5s" }}>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center'
                  style={{ backgroundColor: "#0D1B3E" }}>
                  <Users className='size-4 text-white' />
                </div>
                <div>
                  <p className='text-xs font-bold navy-text'>5,000+ Clients</p>
                  <p className='text-xs text-gray-500 dark:text-slate-400'>
                    Nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {[
              {
                icon: Clock,
                value: 15,
                suffix: "+",
                label: "Years Experience",
              },
              { icon: Users, value: 5000, suffix: "+", label: "Happy Clients" },
              {
                icon: Package,
                value: 200,
                suffix: "+",
                label: "Product Lines",
              },
              {
                icon: Star,
                value: 100,
                suffix: "%",
                label: "Genuine Products",
              },
            ].map(({ icon: Icon, value, suffix, label }) => (
              <div
                key={label}
                className='glass-card rounded-2xl p-5 text-center hover:bg-white/10 transition-all'>
                <Icon
                  className='size-6 mx-auto mb-2'
                  style={{ color: "#D4A017" }}
                />
                <p className='text-2xl font-bold text-white'>
                  <AnimatedCounter end={value} suffix={suffix} />
                </p>
                <p className='text-gray-400 text-sm mt-1'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <Section className='py-12 bg-gray-50 dark:bg-slate-800 border-y border-gray-100 dark:border-slate-700'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-sm font-semibold uppercase tracking-widest mb-8 muted-label'>
            What We Sell
          </p>
          <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
            {categories.map(({ icon: Icon, label, count }) => (
              <a
                key={label}
                href='#products'
                className='group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-700 border border-gray-100 dark:border-slate-600 hover:border-yellow-400 dark:hover:border-yellow-400 hover:shadow-md hover:-translate-y-1 transition-all'>
                <div className='w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform icon-bubble'>
                  <Icon className='size-6' style={{ color: "#0D1B3E" }} />
                </div>
                <div className='text-center'>
                  <p className='text-sm font-semibold navy-text'>{label}</p>
                  <p className='text-xs muted-label'>{count}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRODUCTS ── */}
      <Section id='products' className='py-20 bg-white dark:bg-slate-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <span
              className='inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4'
              style={{ backgroundColor: "#D4A01720", color: "#D4A017" }}>
              Our Products
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 navy-text'>
              Premium Office Equipment
            </h2>
            <p className='max-w-2xl mx-auto text-lg body-text'>
              Carefully sourced from the world&apos;s leading brands — ensuring
              quality, durability, and excellent value for your business.
            </p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {products.map((p) => (
              <article
                key={p.name}
                className='product-card group flex flex-col bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>

                {/* Image — aspect-square matches 600×600 source exactly, object-cover shows full image */}
                <div className='relative aspect-square overflow-hidden bg-gray-50 dark:bg-slate-700'>
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.category} at DE-BEST OKIBE, Alaba International Market Lagos Nigeria`}
                    fill
                    className='product-image object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  />
                  {/* Tag badge */}
                  <span
                    className='absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full shadow-md'
                    style={{ backgroundColor: "#D4A017", color: "#0D1B3E" }}>
                    {p.tag}
                  </span>
                  {/* Hover overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                {/* Content */}
                <div className='flex flex-col flex-1 p-5'>
                  <p className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: "#D4A017" }}>
                    {p.category}
                  </p>
                  <h3 className='font-bold text-base mb-2 navy-text leading-snug'>{p.name}</h3>
                  <p className='text-sm leading-relaxed body-text flex-1 mb-4'>{p.desc}</p>
                  <a href='tel:+2348066538558'>
                    <button className='w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold enquire-btn'>
                      <Phone className='size-3.5' />Enquire Now
                    </button>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className='text-center mt-12'>
            <a href='tel:+2348066538558'>
              <button
                className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl'
                style={{ backgroundColor: "#0D1B3E" }}>
                <Phone className='size-5' />
                Call for Full Product Catalog
                <ChevronRight className='size-4' />
              </button>
            </a>
          </div>
        </div>
      </Section>

      {/* ── WHY CHOOSE US ── */}
      <Section id='why-us' className='py-20 bg-gray-50 dark:bg-slate-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <span className='inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-slate-200 dark:bg-slate-700 navy-text'>
              Why DE-BEST OKIBE?
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold mb-4 navy-text'>
              We Don&apos;t Just Sell Products
            </h2>
            <p className='max-w-2xl mx-auto text-lg body-text'>
              We deliver complete office solutions with unmatched service
              standards. Here&apos;s why thousands of businesses trust us.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className='group bg-white dark:bg-slate-900 rounded-2xl p-7 border border-gray-100 dark:border-slate-700 hover:border-yellow-400 dark:hover:border-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
                <div
                  className='w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'
                  style={{ backgroundColor: "#0D1B3E" }}>
                  <Icon className='size-7' style={{ color: "#D4A017" }} />
                </div>
                <h3 className='font-bold text-lg mb-3 navy-text'>{title}</h3>
                <p className='text-sm leading-relaxed body-text'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ABOUT ── */}
      <Section id='about' className='py-20 bg-white dark:bg-slate-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-14 items-center'>
            {/* Image mosaic */}
            <div className='relative'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-4'>
                  <div className='relative h-56 rounded-2xl overflow-hidden shadow-lg'>
                    <Image
                      src='/products/unboxing.jpeg'
                      alt='DE-BEST OKIBE — unboxing premium office equipment in Alaba Market Lagos'
                      fill
                      className='object-cover'
                      sizes='300px'
                    />
                  </div>
                  <div className='relative h-36 rounded-2xl overflow-hidden shadow-lg'>
                    <Image
                      src='/products/standing_printer_2.jpg'
                      alt='Professional copier at DE-BEST OKIBE office equipment store'
                      fill
                      className='object-cover'
                      sizes='300px'
                    />
                  </div>
                </div>
                <div className='space-y-4 mt-8'>
                  <div className='relative h-36 rounded-2xl overflow-hidden shadow-lg'>
                    <Image
                      src='/products/standing_printer.jpg'
                      alt='All-in-one printer at DE-BEST OKIBE Alaba International Market'
                      fill
                      className='object-cover'
                      sizes='300px'
                    />
                  </div>
                  <div className='relative h-56 rounded-2xl overflow-hidden shadow-lg'>
                    <Image
                      src='/products/transformer_laptop.jpg'
                      alt='Wide range of printers at DE-BEST OKIBE, Ojo Lagos Nigeria'
                      fill
                      className='object-cover'
                      sizes='300px'
                    />
                  </div>
                </div>
              </div>
              <div className='absolute -bottom-5 left-1/2 -translate-x-1/2 float-card rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 border border-gray-100 dark:border-slate-700 whitespace-nowrap'>
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                  style={{ backgroundColor: "#D4A017" }}>
                  <Award className='size-6 text-white' />
                </div>
                <div>
                  <p className='font-bold navy-text'>Trusted Leader</p>
                  <p className='text-sm muted-label'>
                    Nigeria&apos;s Premier Supplier
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className='space-y-6 lg:pl-6 mt-8 lg:mt-0'>
              <div>
                <span
                  className='inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4'
                  style={{ backgroundColor: "#D4A01720", color: "#D4A017" }}>
                  About Us
                </span>
                <h2 className='text-3xl sm:text-4xl font-bold leading-tight navy-text'>
                  Your Reliable Partner for{" "}
                  <span className='shimmer-text'>Office Excellence</span>
                </h2>
              </div>
              <p className='leading-relaxed body-text'>
                At{" "}
                <strong className='navy-text'>
                  DE-BEST OKIBE OFFICE EQUIPMENT
                </strong>
                , we are proud to stand as a trusted leader in the supply of
                premium office equipment across Nigeria. Strategically located
                in{" "}
                <strong className='navy-text'>
                  Alaba International Market, Lagos
                </strong>{" "}
                — the largest electronics hub in West Africa.
              </p>
              <p className='leading-relaxed body-text'>
                We specialize in delivering top-quality products tailored to the
                evolving needs of modern businesses, organizations, and
                individuals — from high-performance copiers and printers to
                laptops, desktops, and essential accessories.
              </p>
              <div className='grid grid-cols-2 gap-4'>
                {[
                  "Premium Quality Assurance",
                  "Competitive Market Pricing",
                  "Nationwide Delivery",
                  "Expert Technical Support",
                  "Genuine Manufacturer Warranty",
                  "Trusted by 5,000+ Clients",
                ].map((item) => (
                  <div key={item} className='flex items-center gap-2.5'>
                    <CheckCircle2
                      className='size-5 flex-shrink-0'
                      style={{ color: "#D4A017" }}
                    />
                    <span className='text-sm font-medium navy-text'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <blockquote
                className='border-l-4 pl-5 italic body-text'
                style={{ borderColor: "#D4A017" }}>
                &ldquo;Your efficiency is our priority. Your satisfaction is our
                success.&rdquo;
              </blockquote>
              <a href='tel:+2348066538558'>
                <button
                  className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-105 shadow-lg'
                  style={{ backgroundColor: "#0D1B3E" }}>
                  Get in Touch <ArrowRight className='size-4' />
                </button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TESTIMONIALS — always dark navy, fine in both modes ── */}
      <Section className='py-20' style={{ backgroundColor: "#0D1B3E" }}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-14'>
            <span
              className='inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4'
              style={{ backgroundColor: "#D4A01720", color: "#D4A017" }}>
              Testimonials
            </span>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Thousands of businesses across Nigeria trust DE-BEST OKIBE.
              Here&apos;s what some of them have to say.
            </p>
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            {testimonials.map(({ name, role, city, stars, text }) => (
              <div
                key={name}
                className='glass-card rounded-2xl p-7 hover:bg-white/10 transition-all'>
                <div className='flex gap-1 mb-4'>
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star
                      key={i}
                      className='size-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-gray-300 text-sm leading-relaxed mb-6 italic'>
                  &ldquo;{text}&rdquo;
                </p>
                <div className='flex items-center gap-3'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0'
                    style={{ backgroundColor: "#D4A017", color: "#0D1B3E" }}>
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className='font-semibold text-white text-sm'>{name}</p>
                    <p className='text-gray-400 text-xs'>{role}</p>
                    <p className='text-gray-500 text-xs'>{city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA BANNER — gold, fine in both modes ── */}
      <Section className='py-16' style={{ backgroundColor: "#D4A017" }}>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-4'
            style={{ color: "#0D1B3E" }}>
            Ready to Upgrade Your Office?
          </h2>
          <p className='text-lg mb-8' style={{ color: "#0D1B3E99" }}>
            Contact us today for the best prices on office equipment in Nigeria.
            Visit us at Alaba International Market or call now.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='tel:+2348066538558'>
              <button
                className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all hover:scale-105 shadow-lg'
                style={{ backgroundColor: "#0D1B3E" }}>
                <Phone className='size-5' />
                Call 08066538558
              </button>
            </a>
            <a
              href='https://wa.me/2348066538558'
              target='_blank'
              rel='noopener noreferrer'>
              <button
                className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:bg-[#0D1B3E20]'
                style={{ borderColor: "#0D1B3E", color: "#0D1B3E" }}>
                <MessageCircle className='size-5' />
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" className="py-14 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ backgroundColor: "#D4A01720", color: "#D4A017" }}
            >
              Contact Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold navy-text">
              Visit Our Shop or Get in Touch
            </h2>
          </div>

          {/* Info cards — 2×2 on mobile, 4-col on lg; map full-width below */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              {
                icon: MapPin,
                label: "Address",
                value: "F-893A & F-815, Alaba Int'l Market, Ojo, Lagos",
                href: "https://maps.google.com/?q=Alaba+International+Market+Ojo+Lagos",
                external: true,
              },
              {
                icon: Phone,
                label: "Phone",
                value: "08066538558",
                href: "tel:+2348066538558",
                external: false,
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@debestokibe.com",
                href: "mailto:info@debestokibe.com",
                external: false,
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Fri 8am–6pm · Sat 9am–5pm",
                href: null,
                external: false,
              },
            ].map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#0D1B3E" }}
                  >
                    <Icon className="size-4" style={{ color: "#D4A017" }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider muted-label mb-0.5">
                      {label}
                    </p>
                    <p className="text-xs font-medium navy-text leading-snug break-words">
                      {value}
                    </p>
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-yellow-400 dark:hover:border-yellow-400 hover:shadow-md transition-all"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-slate-700 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d3.2432!3d6.4749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68110c1%3A0xbbc0e9f2f66ccf70!2sAlaba+International+Market%2C+Ojo%2C+Lagos!5e0!3m2!1sen!2sng!4v1680000000000"
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DE-BEST OKIBE OFFICE EQUIPMENT — Alaba International Market, Ojo, Lagos"
            />
          </div>
        </div>
      </Section>

      {/* ── FOOTER — always dark navy ── */}
      <footer
        className='text-white py-16'
        style={{ backgroundColor: "#0D1B3E" }}
        aria-label='Site footer'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
            <div className='space-y-5'>
              

              <a href="#home" className="flex items-center gap-2 group" aria-label="DE-BEST OKIBE OFFICE EQUIPMENT">
                <Image src="/logo.png" alt="DE-BEST OKIBE logo icon" width={40} height={40} style={{ width: 40, height: "auto" }} className="object-contain brightness-0 invert group-hover:scale-105 transition-transform" />
                <Image src="/logo_text.png" alt="DE-BEST OKIBE Office Equipments" width={90} height={36} style={{ width: 90, height: "auto" }} className="object-contain brightness-0 invert" />
              </a>

              <p className='text-gray-400 text-sm leading-relaxed'>
                Nigeria&apos;s trusted supplier of premium office equipment.
                Genuine products, competitive prices, outstanding service.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/2348066538558"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg viewBox="0 0 32 32" className="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.824.738 5.476 2.027 7.788L.07 31.19a1 1 0 0 0 1.214 1.214l7.544-1.97A15.93 15.93 0 0 0 16.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0zm0 29.23a13.16 13.16 0 0 1-6.72-1.838l-.48-.286-4.98 1.3 1.318-4.84-.314-.498A13.134 13.134 0 0 1 2.77 16c0-7.29 5.944-13.23 13.234-13.23C23.29 2.77 29.23 8.71 29.23 16c0 7.288-5.94 13.23-13.226 13.23zm7.258-9.907c-.398-.2-2.353-1.16-2.718-1.292-.364-.133-.63-.2-.895.2-.265.397-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.68-.62-3.2-1.977-1.183-1.055-1.982-2.358-2.214-2.756-.232-.398-.025-.613.174-.81.18-.18.398-.464.597-.697.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.697-.1-.2-.895-2.158-1.226-2.955-.323-.775-.65-.67-.895-.683-.232-.013-.497-.016-.763-.016-.265 0-.696.1-1.06.497-.365.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.2.265 2.806 4.283 6.797 6.007.95.41 1.69.655 2.268.838.952.303 1.82.26 2.505.158.764-.114 2.353-.963 2.685-1.892.332-.93.332-1.726.232-1.892-.1-.166-.365-.265-.763-.464z"/>
                  </svg>
                </a>
                <a
                  href="tel:+2348066538558"
                  aria-label="Call us"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a2f5e" }}
                >
                  <Phone className="size-4" style={{ color: "#D4A017" }} />
                </a>
              </div>
            </div>

            <div>
              <h3
                className='font-bold text-sm uppercase tracking-wider mb-5'
                style={{ color: "#D4A017" }}>
                Products
              </h3>
              <ul className='space-y-3'>
                {[
                  "Laser Printers",
                  "Inkjet Printers",
                  "Copier Machines",
                  "Laptops",
                  "Desktop Computers",
                  "Accessories & Consumables",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href='#products'
                      className='text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2'>
                      <ChevronRight className='size-3 text-yellow-500' />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className='font-bold text-sm uppercase tracking-wider mb-5'
                style={{ color: "#D4A017" }}>
                Quick Links
              </h3>
              <ul className='space-y-3'>
                {[
                  ["Home", "#home"],
                  ["Products", "#products"],
                  ["Why Choose Us", "#why-us"],
                  ["About Us", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className='text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2'>
                      <ChevronRight className='size-3 text-yellow-500' />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className='font-bold text-sm uppercase tracking-wider mb-5'
                style={{ color: "#D4A017" }}>
                Contact Info
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <MapPin
                    className='size-4 mt-0.5 flex-shrink-0'
                    style={{ color: "#D4A017" }}
                  />
                  <p className='text-sm text-gray-400 leading-relaxed'>
                    F-893A &amp; F-815, Alaba International Market, Ojo, Lagos,
                    Nigeria
                  </p>
                </li>
                <li className='flex items-center gap-3'>
                  <Phone
                    className='size-4 flex-shrink-0'
                    style={{ color: "#D4A017" }}
                  />
                  <a
                    href='tel:+2348066538558'
                    className='text-sm text-gray-400 hover:text-white transition-colors'>
                    08066538558
                  </a>
                </li>
                <li className='flex items-center gap-3'>
                  <Mail
                    className='size-4 flex-shrink-0'
                    style={{ color: "#D4A017" }}
                  />
                  <a
                    href='mailto:info@debestokibe.com'
                    className='text-sm text-gray-400 hover:text-white transition-colors'>
                    info@debestokibe.com
                  </a>
                </li>
                <li className='flex items-center gap-3'>
                  <Clock
                    className='size-4 flex-shrink-0'
                    style={{ color: "#D4A017" }}
                  />
                  <p className='text-sm text-gray-400'>Mon–Sat: 8am – 6pm</p>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
            <div className="text-center space-y-1">
              <p className='text-gray-500 text-sm'>
                &copy; {new Date().getFullYear()} DE-BEST OKIBE OFFICE EQUIPMENT. All rights reserved.
              </p>
              <p className='text-gray-600 text-xs'>
                CAC Reg. No: <span className="font-semibold" style={{ color: "#D4A017" }}>3789654</span>
              </p>
            </div>
            <p className='text-gray-600 text-xs text-center'>
              Alaba International Market, Ojo, Lagos, Nigeria &nbsp;|&nbsp;
              <a
                href='https://debestokibe.com'
                className='hover:text-gray-400 transition-colors'>
                debestokibe.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href='https://wa.me/2348066538558'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pulse-glow'
        style={{ backgroundColor: "#25D366" }}
        aria-label='Chat with DE-BEST OKIBE on WhatsApp'>
        <MessageCircle className='size-7 text-white fill-white' />
      </a>
    </div>
  );
}
