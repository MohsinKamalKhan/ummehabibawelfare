"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ContactSection() {
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

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
            Get In Touch
          </motion.h3>
          <motion.p className="text-xl text-slate-300 mb-12" variants={itemVariants}>
            Ready to make a difference? Contact us to learn more about our work or to get involved.
          </motion.p>

          <motion.div className="flex flex-col md:flex-row items-center justify-center gap-8" variants={itemVariants}>
            <motion.div className="flex items-center" whileHover={{ scale: 1.05, x: 5 }} transition={{ duration: 0.3 }}>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Phone className="w-6 h-6 mr-3 text-amber-400" />
              </motion.div>
              <div>
                <p className="font-semibold">Phone</p>
                <motion.a
                  href="tel:042-37428389"
                  className="text-slate-300 hover:text-white transition-colors block"
                  whileHover={{ x: 2 }}
                >
                  042-37428389
                </motion.a>
                <motion.a
                  href="tel:0302-6889992"
                  className="text-slate-300 hover:text-white transition-colors block"
                  whileHover={{ x: 2 }}
                >
                  0302-6889992
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="flex items-center" whileHover={{ scale: 1.05, x: 5 }} transition={{ duration: 0.3 }}>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <MapPin className="w-6 h-6 mr-3 text-amber-400" />
              </motion.div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-slate-300">Jamia Ashrafia Lahore</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="mt-12" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => window.open("tel:042-37428389")}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us Today
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
