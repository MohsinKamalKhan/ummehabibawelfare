"use client";

import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const onNavigate = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeIn = (direction: string, delay: number): Variants => {
    const isVertical = direction === "up" || direction === "down";
    const distance = 40;

    return {
      hidden: {
        y: isVertical ? (direction === "up" ? distance : -distance) : 0,
        x: !isVertical ? (direction === "left" ? distance : -distance) : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween" as const,
          duration: 1.2,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number],
        },
      },
    };
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-[100vh] w-full overflow-hidden bg-slate-800"
    >
      {/* Video Background */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </motion.video>

      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <motion.div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-white/5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-white/5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />

        {/* Animated lines */}
        <motion.div
          className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>

      <motion.div
        className="container relative z-30 flex h-full flex-col items-center justify-center text-center text-white"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <motion.div
          className="mb-2 flex items-center justify-center"
          variants={fadeIn("up", 0.2)}
        >
          <motion.div
            className="relative h-16 w-16 overflow-hidden md:h-20 md:w-20"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Umm-e-Habiba Welfare Trust Logo"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl"
          variants={fadeIn("up", 0.3)}
        >
          Serving Humanity for
        </motion.h1>

        <motion.h2
          className="mb-6 text-3xl font-light md:text-4xl text-amber-400"
          variants={fadeIn("up", 0.4)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Over 20 Years
        </motion.h2>

        <motion.p
          className="mb-8 max-w-3xl text-xl md:text-2xl text-slate-200"
          variants={fadeIn("up", 0.5)}
        >
          Providing free Iftar to thousands during Ramadan and supporting
          widows, orphans, and underprivileged families across Lahore
        </motion.p>

        <motion.div
          className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          variants={fadeIn("up", 0.6)}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate("#donate")}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 group"
            >
              <Heart className="mr-2 h-4 w-4" />
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onNavigate("#about")}
              size="lg"
              variant="outline"
              className="border-white hover:bg-white text-slate-900 px-8 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-0 right-0 mx-auto flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown
              className="h-8 w-8 text-white/70 cursor-pointer"
              onClick={() => onNavigate("#about")}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Improved transition to content */}
      <motion.div
        className="absolute bottom-0 h-24 w-full z-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
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
      </motion.div>
    </section>
  );
}
