"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TopBanner from "./top-banner";

interface HeaderProps {
  onNavigate?: (href: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#") && onNavigate) {
      onNavigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 bg-white py-2 shadow-md" `}
    >
      <TopBanner />
      <div className="mt-2 container flex items-center justify-between max-w-full px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/images/logo.jpg"
              alt="Umm-e-Habiba Welfare Trust Logo"
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div className={`ml-2 transition-colors text-slate-800" `}>
            <h1 className="text-xl font-bold">Umm-e-Habiba Welfare Trust</h1>
            <p className="text-xs">Helping Hands for a Better Tomorrow</p>
          </div>
        </Link>

        <nav className="hidden items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.href.startsWith("#") ? (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 hover:text-slate-800`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gray-100 hover:text-slate-800"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link href="/donate">
            <Button
              size="sm"
              className={`ml-4 
                   bg-amber-500 text-slate-900 hover:bg-amber-600
              `}
            >
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </Link>
        </nav>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
            <div className="flex flex-col">
              <div className="mb-8 flex items-center">
                <div className="relative h-10 w-10 overflow-hidden">
                  <Image
                    src="/images/logo.jpg"
                    alt="Umm-e-Habiba Welfare Trust Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="ml-2 text-slate-800">
                  <h1 className="text-lg font-bold">
                    Umm-e-Habiba Welfare Trust
                  </h1>
                  <p className="text-xs">Helping Hands for a Better Tomorrow</p>
                </div>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.href.startsWith("#") ? (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="rounded-md px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-slate-800 w-full text-left"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-md px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-slate-800 block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8">
                <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                </Link>
              </div>

              <div className="mt-8 border-t pt-6">
                <p className="mb-2 font-medium text-slate-800">Contact Us</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <p className="text-sm text-gray-600">
                      Jamia Ashrafia Lahore
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <p className="text-sm text-gray-600">042-37428389</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <p className="text-sm text-gray-600">0302-6889992</p>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
