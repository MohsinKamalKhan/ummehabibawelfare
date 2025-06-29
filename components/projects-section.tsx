"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Ramadan Iftar Program",
      description:
        "For over 20 years, we have been organizing free Iftar meals during the holy month of Ramadan at Jamia Ashrafia Lahore. Our dedicated team of 60+ volunteers ensures that no one goes hungry during this blessed month.",
      image: "/images/ramdan-project.jpeg",
      stats: "1000+ Daily Meals",
      duration: "20+ Years",
      beneficiaries: "Thousands Served",
      color: "from-orange-500 to-red-500",
      accentColor: "bg-orange-500",
    },
    {
      title: "Clean Water Initiative",
      description:
        "Installing hand pumps and water filtration systems in remote villages across Punjab. This life-changing project provides access to clean drinking water, reducing waterborne diseases and improving community health.",
      image: "/images/Clean Water Initiative.jpg",
      stats: "15 Water Projects",
      duration: "5+ Years",
      beneficiaries: "5000+ People",
      color: "from-blue-500 to-cyan-500",
      accentColor: "bg-blue-500",
    },
    {
      title: "Education Support Program",
      description:
        "Providing scholarships, school supplies, and educational support to underprivileged children. We believe education is the key to breaking the cycle of poverty and building a brighter future for Pakistan.",
      image: "/images/Education Support Program.jpg",
      stats: "1200+ Students",
      duration: "10+ Years",
      beneficiaries: "Families Empowered",
      color: "from-green-500 to-emerald-500",
      accentColor: "bg-green-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            State of Art Projects
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our flagship projects that are creating lasting impact and
            transforming communities across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Project Pillar */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}
                  />

                  {/* Stats Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-slate-800 font-semibold px-3 py-1">
                      {project.stats}
                    </Badge>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-800 font-semibold px-3 py-1">
                      {project.duration}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title with Accent Line */}
                  <div className="mb-4">
                    <div
                      className={`w-12 h-1 ${project.accentColor} rounded-full mb-3`}
                    />
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-center">
                      <div
                        className={`w-3 h-3 ${project.accentColor} rounded-full mx-auto mb-1`}
                      />
                      <div className="text-xs text-slate-500 font-medium">
                        {project.beneficiaries}
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`w-3 h-3 ${project.accentColor} rounded-full mx-auto mb-1`}
                      />
                      <div className="text-xs text-slate-500 font-medium">
                        Active Project
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`w-3 h-3 ${project.accentColor} rounded-full mx-auto mb-1`}
                      />
                      <div className="text-xs text-slate-500 font-medium">
                        Ongoing
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar Base Effect */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              </div>

              {/* Pillar Shadow/Base */}
              <div className="h-4 bg-gradient-to-b from-slate-200 to-transparent rounded-b-lg mx-4 -mt-2" />
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-slate-600">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="ml-3 text-sm font-medium">
              Building a Better Tomorrow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
