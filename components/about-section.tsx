"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  const services = [
    {
      title: "Emergency Relief",
      description:
        "Providing immediate assistance during natural disasters and emergencies to affected communities.",
      image: "/images/Emergency Relief.jpg",
    },
    {
      title: "Healthcare Services",
      description:
        "Operating medical camps and providing healthcare facilities to underserved populations.",
      image: "/images/Healthcare Services.jpg",
    },
    {
      title: "Education Programs",
      description:
        "Supporting educational initiatives and providing scholarships to deserving students.",
      image: "/images/Education Programs.jpg",
    },
    {
      title: "Clean Water Access",
      description:
        "Installing water pumps and ensuring clean water access in remote areas.",
      image: "/images/Clean Water Access.jpg",
    },
    {
      title: "Orphan Care",
      description:
        "Providing comprehensive care and support for orphaned children.",
      image: "/images/Orphan Care.jpg",
    },
    {
      title: "Women Empowerment",
      description:
        "Supporting widows and women through skill development and financial assistance.",
      image: "/images/Women Empowerment.jpg",
    },
    {
      title: "Food Security",
      description:
        "Distributing food packages and organizing community kitchens for the needy.",
      image: "/images/Food Security.jpg",
    },
    {
      title: "Community Development",
      description:
        "Building community centers and promoting social welfare activities.",
      image: "/images/Community Development.jpg",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            About Our Mission
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded by Maulana Ubaid Ullah Qasmi in 2001, Umm E Habiba Welfare
            Trust has been serving the underprivileged in Pakistan for over 20
            years. With a dedicated team of 60+ volunteers, we provide aid and
            relief through various programs including our annual Ramadan Iftar
            at Jamia Ashrafia Lahore, where thousands of people from across
            Lahore come to break their fast together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-lg transition-shadow h-full"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 opacity-80`} />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-slate-800 text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              See Our Impact
            </h4>
            <p className="text-lg text-slate-600">
              Watch how we're making a difference in the lives of those who need
              it most
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/l9WH62Zod4o"
              title="Umm-e-Habiba Welfare Trust Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
