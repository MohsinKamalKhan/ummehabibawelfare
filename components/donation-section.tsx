"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Heart, GraduationCap, Home, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function DonationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="donate" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Make a Difference Today
            </motion.h3>
            <motion.p className="text-lg text-slate-600">
              Your donation can transform lives and bring hope to those who need
              it most
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="border-slate-200 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-800">
                    <div>
                      <CreditCard className="w-6 h-6 mr-2 text-amber-600" />
                    </div>
                    Bank Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-700">
                      Account Title:
                    </p>
                    <p className="text-slate-600">Umm-e-Habiba Welfare Trust</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">
                      Account Number:
                    </p>
                    <p className="text-slate-600 font-mono">201966385</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Bank:</p>
                    <p className="text-slate-600">
                      United Bank - Wahdat Road Branch
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-slate-200 bg-amber-50 h-full">
                <CardHeader>
                  <CardTitle className="text-slate-800">Why Donate?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Heart className="w-5 h-5 mr-2 text-amber-600 mt-0.5 flex-shrink-0" />
                      Support widows and orphans in need
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GraduationCap className="w-5 h-5 mr-2 text-amber-600 mt-0.5 flex-shrink-0" />
                      Fund educational programs for children
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Home className="w-5 h-5 mr-2 text-amber-600 mt-0.5 flex-shrink-0" />
                      Provide food and shelter to families
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Users className="w-5 h-5 mr-2 text-amber-600 mt-0.5 flex-shrink-0" />
                      Create lasting positive change
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
