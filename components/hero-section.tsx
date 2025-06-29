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
      className="relative h-[100vh] w-full overflow-hidden bg-yellow-800"
      style={{ marginTop: "40px" }}
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

      <div className="container relative z-30 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="mb-2 flex items-center justify-center">
          <div className="relative h-16 w-16 overflow-hidden md:h-20 md:w-20">
            <Image
              src="/images/logo.jpg"
              alt="Umm-e-Habiba Welfare Trust Logo"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
          Serving Humanity for
        </h1>

        <h2 className="mb-6 text-3xl font-light md:text-4xl text-amber-400">
          Over 20 Years
        </h2>

        <p className="mb-8 max-w-3xl text-xl md:text-2xl text-slate-200">
          Providing free Iftar to thousands during Ramadan and supporting
          widows, orphans, and underprivileged families across Lahore
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/donate">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 group"
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
            className="border-white text-black px-8 py-3"
          >
            Learn More
          </Button>
        </div>

        <div className="absolute bottom-12 left-0 right-0 mx-auto flex justify-center">
          <ChevronDown
            className="h-8 w-8 text-white/70 cursor-pointer animate-bounce"
            onClick={() => onNavigate("#impact")}
          />
        </div>
      </div>

      {/* Improved transition to content */}
      <div className="absolute bottom-0 h-24 w-full z-20">
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
      </div>
    </section>
  );
}
