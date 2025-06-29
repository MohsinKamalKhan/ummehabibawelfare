"use client";

import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  onNavigate: (href: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-800"
      style={{
        height: "100vh",
        marginTop: "40px",
        minHeight: "600px", // Ensure minimum height for very small screens
      }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image-2.jpg"
          alt="Umm-e-Habiba Welfare Trust helping community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      </div>

      {/* Centered Content Container */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center text-white space-y-6">
            <div className="flex items-center justify-center mb-2">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Umm-e-Habiba Welfare Trust Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Serving Humanity for
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-400">
                Over 20 Years
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed">
                Providing free Iftar to thousands during Ramadan and supporting
                widows, orphans, and underprivileged families across Lahore
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 group w-full sm:w-auto"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Button
                onClick={() => onNavigate("#about")}
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-slate-900 px-8 py-3 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center">
        <ChevronDown
          className="h-8 w-8 text-white/70 cursor-pointer animate-bounce"
          onClick={() => onNavigate("#impact")}
        />
      </div>

      {/* Improved transition to content */}
      {/* <div className="absolute bottom-0 h-24 w-full z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
