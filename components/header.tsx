"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const onNavigate = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Donate", href: "#donate" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white py-2 shadow-md" : "bg-transparent py-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between max-w-full px-4 md:px-6 lg:px-8">
        <motion.button
          onClick={() => handleNavClick("#home")}
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="relative h-12 w-12 overflow-hidden"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Umm-e-Habiba Welfare Trust Logo"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`ml-2 transition-colors ${
              isScrolled ? "text-slate-800" : "text-white"
            }`}
          >
            <h1 className="text-xl font-bold">Umm-e-Habiba Welfare Trust</h1>
            <p className="text-xs">Helping Hands for a Better Tomorrow</p>
          </motion.div>
        </motion.button>

        <nav className="hidden items-center space-x-1 md:flex ml-auto">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100 hover:text-slate-800"
                    : "text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => handleNavClick("#donate")}
              size="sm"
              className={`ml-4 ${
                isScrolled
                  ? "bg-amber-500 text-slate-900 hover:bg-amber-600"
                  : "bg-white text-slate-800 hover:bg-gray-200"
              }`}
            >
              <Heart className="mr-2 h-4 w-4" />
              Donate Now
            </Button>
          </motion.div>
        </nav>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="mb-8 flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
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
              </motion.div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.button
                      onClick={() => handleNavClick(item.href)}
                      className="rounded-md px-3 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-slate-800 w-full text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => handleNavClick("#donate")}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 border-t pt-6"
              >
                <p className="mb-2 font-medium text-slate-800">Contact Us</p>
                <motion.div className="space-y-2" whileHover={{ x: 2 }}>
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
                </motion.div>
              </motion.div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
