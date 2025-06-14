"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Users, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function RamadanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (href: string) => {
    scrollToSection(href)
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-amber-50 to-orange-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6" variants={itemVariants}>
              Ramadan Iftar Program
            </motion.h3>
            <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto" variants={itemVariants}>
              For over 20 years, we have been organizing free Iftar meals during the holy month of Ramadan at Jamia
              Ashrafia Lahore, serving thousands of people from across the city.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <motion.div className="flex items-start space-x-4" variants={statsVariants} whileHover={{ x: 10 }}>
                  <motion.div
                    className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">20+</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">Years of Service</h4>
                    <p className="text-slate-600">Continuously serving the community since 2001</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start space-x-4" variants={statsVariants} whileHover={{ x: 10 }}>
                  <motion.div
                    className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold">1K+</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">People Served</h4>
                    <p className="text-slate-600">Thousands of people enjoy free Iftar meals each Ramadan</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start space-x-4" variants={statsVariants} whileHover={{ x: 10 }}>
                  <motion.div
                    className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">60+</span>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">Dedicated Team</h4>
                    <p className="text-slate-600">Volunteers working tirelessly to serve the community</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4
                className="text-2xl font-bold text-slate-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                Join Us This Ramadan
              </motion.h4>
              <motion.p
                className="text-slate-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                We invite everyone in Lahore to join us at Jamia Ashrafia for this spiritual gathering. Be part of this
                blessed effort to feed the needy and boost your Emaan during the holy month.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700">Jamia Ashrafia Lahore</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Users className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700">Open to all community members</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Heart className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700">Completely free of charge</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-6 pt-6 border-t border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-slate-600 mb-3">Support our Ramadan Iftar program:</p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={() => handleNavClick("#donate")} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                    Donate for Ramadan Iftar
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
