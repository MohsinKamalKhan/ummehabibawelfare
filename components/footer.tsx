"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

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
    hidden: { y: 30, opacity: 0 },
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
    <footer className="bg-slate-900 text-white py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex items-center space-x-4 mb-4 md:mb-0"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
              <Image
                src="/images/logo.jpg"
                alt="Umm-e-Habiba Welfare Trust Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </motion.div>
            <div>
              <h4 className="font-bold">Umm-e-Habiba Welfare Trust</h4>
              <p className="text-sm text-slate-400">Founded by Maulana Ubaid Ullah Qasmi</p>
            </div>
          </motion.div>

          <motion.div className="text-center md:text-right" variants={itemVariants}>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Umm-e-Habiba Welfare Trust. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-1">Making the world a better place, one life at a time.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
