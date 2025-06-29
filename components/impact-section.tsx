"use client"

import { Users, Package, Utensils, Droplets, Home, Building, GraduationCap, Heart } from "lucide-react"

export default function ImpactSection() {
  const impactStats = [
    { icon: Users, number: "25,000+", label: "Lives Impacted", color: "bg-blue-500" },
    { icon: Package, number: "200,000+", label: "Food Packs", color: "bg-green-500" },
    { icon: Utensils, number: "350,000+", label: "Iftar Meals Served", color: "bg-orange-500" },
    { icon: Droplets, number: "15", label: "Water Projects", color: "bg-cyan-500" },
    { icon: Home, number: "500+", label: "Families Supported", color: "bg-purple-500" },
    { icon: Building, number: "8", label: "Community Centers", color: "bg-indigo-500" },
    { icon: GraduationCap, number: "1,200+", label: "Students Educated", color: "bg-pink-500" },
    { icon: Heart, number: "60+", label: "Active Volunteers", color: "bg-red-500" },
  ]

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Your Impact in 2025</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            In 2025, amidst global hardships, Umm-e-Habiba Welfare Trust continues to create a lasting impact through
            your unwavering support and generosity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 ${stat.color} rounded-full flex items-center justify-center`}
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
