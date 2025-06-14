"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Home } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
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

  const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, 
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
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6" variants={itemVariants}>
            About Our Mission
          </motion.h3>
          <motion.p className="text-lg text-slate-600 leading-relaxed" variants={itemVariants}>
            Founded by Maulana Ubaid Ullah Qasmi in 2001, Umm E Habiba Welfare Trust has been serving the
            underprivileged in Pakistan for over 20 years. With a dedicated team of 60+ volunteers, we provide aid and
            relief through various programs including our annual Ramadan Iftar at Jamia Ashrafia Lahore, where thousands
            of people from across Lahore come to break their fast together.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
            <Card className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-8 h-8 text-amber-600" />
                </motion.div>
                <CardTitle className="text-slate-800">Supporting Families</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Providing essential support to widows, orphans, and families with no income through our comprehensive
                  welfare programs.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
            <Card className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </motion.div>
                <CardTitle className="text-slate-800">Education First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Empowering children through educational support and encouraging them to pursue higher education for a
                  brighter future.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} whileHover={{ y: -10, scale: 1.02 }}>
            <Card className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Home className="w-8 h-8 text-green-600" />
                </motion.div>
                <CardTitle className="text-slate-800">Basic Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Ensuring access to fundamental necessities like food, shelter, and healthcare for those who need it
                  most.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
