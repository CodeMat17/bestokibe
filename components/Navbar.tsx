"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, Phone, Mail, MapPin, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  if (!mounted) return <div className={`w-8 h-8 ${className}`} />;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${className}`}
      style={{ backgroundColor: "var(--subtle-icon-bg)" }}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4 text-yellow-400" />
      ) : (
        <Moon className="size-4" style={{ color: "#0D1B3E" }} />
      )}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-slate-700"
            : "bg-white dark:bg-slate-900 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
              aria-label="DE-BEST OKIBE OFFICE EQUIPMENT"
            >
              <Image
                src="/logo.png"
                alt="DE-BEST OKIBE logo icon"
                width={40}
                height={40}
                style={{ width: 40, height: "auto" }}
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
              <Image
                src="/logo_text.png"
                alt="DE-BEST OKIBE Office Equipments"
                width={110}
                height={40}
                style={{ width: 110, height: "auto" }}
                className="hidden sm:block object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-slate-200 hover:text-[#0D1B3E] dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all relative group"
                >
                  {link.label}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                    style={{ backgroundColor: "#D4A017" }}
                  />
                </button>
              ))}
            </nav>

            {/* Desktop CTA + toggle */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <a href="tel:+2348066538558">
                <Button
                  size="sm"
                  className="gap-2 font-semibold shadow-md hover:shadow-lg transition-all py-2"
                  style={{ backgroundColor: "#D4A017", color: "#0D1B3E" }}
                >
                  <Phone className="size-3.5" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Mobile: toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="text-gray-700 dark:text-slate-200"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] p-0" showCloseButton={false}>
                  <SheetHeader
                    className="p-5 border-b border-white/10"
                    style={{ backgroundColor: "#0D1B3E" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/logo.png"
                          alt="DE-BEST OKIBE logo icon"
                          width={36}
                          height={36}
                          style={{ width: 36, height: "auto" }}
                          className="object-contain"
                        />
                        <SheetTitle className="sr-only">DE-BEST OKIBE Office Equipment</SheetTitle>
                        <Image
                          src="/logo_text.png"
                          alt="DE-BEST OKIBE Office Equipments"
                          width={100}
                          height={36}
                          style={{ width: 100, height: "auto" }}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => setOpen(false)}
                        className="text-white hover:text-yellow-400 hover:bg-white/10"
                        aria-label="Close menu"
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  </SheetHeader>

                  <nav className="flex flex-col py-4 px-3" aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                      <button
                        key={link.label}
                        onClick={() => handleNavClick(link.href)}
                        className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-800 dark:text-slate-200 hover:text-[#0D1B3E] dark:hover:text-white rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all text-left group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-slate-600 group-hover:bg-[#D4A017] transition-colors" />
                        {link.label}
                      </button>
                    ))}
                  </nav>

                  <div className="px-5 py-4 border-t border-gray-100 dark:border-slate-700 space-y-3">
                    <a href="tel:+2348066538558" className="block">
                      <Button
                        className="w-full gap-2 font-semibold"
                        style={{ backgroundColor: "#D4A017", color: "#0D1B3E" }}
                      >
                        <Phone className="size-4" />
                        08066538558
                      </Button>
                    </a>
                    <a href="mailto:info@debestokibe.com" className="block">
                      <Button
                        variant="outline"
                        className="w-full gap-2 text-sm sheet-outline-btn"
                      >
                        <Mail className="size-4" />
                        info@debestokibe.com
                      </Button>
                    </a>
                  </div>

                  <div className="px-5 pb-6">
                    <div
                      className="rounded-xl p-4 text-xs text-white"
                      style={{ backgroundColor: "#0D1B3E" }}
                    >
                      <div className="flex items-start gap-2">
                        <MapPin className="size-3.5 mt-0.5 flex-shrink-0" style={{ color: "#D4A017" }} />
                        <p className="leading-relaxed">
                          F-893A &amp; F-815, Alaba International Market, Ojo, Lagos
                        </p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
