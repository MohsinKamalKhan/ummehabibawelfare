"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Food Package",
      price: "PKR 9,600",
      description: "Monthly food supplies for needy families",
    },
    {
      title: "Wheelchair",
      price: "PKR 22,500",
      description: "Mobility support for disabled individuals",
    },
    {
      title: "Masjid Rehabilitation",
      price: "PKR 4,000,000",
      description: "Renovation and repair of community mosques",
    },
    {
      title: "Masjid Construction",
      price: "PKR 6,000,000",
      description: "Building new mosques for communities",
    },
    {
      title: "Dastarkhwan (Cooked Food)",
      price: "PKR 20,000",
      description: "Daily meals for the underprivileged",
    },
    {
      title: "Sewing Machine for Orphan's Mothers",
      price: "PKR 22,000",
      description: "Empowering widows with income opportunities",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Our <span className="text-cyan-500">Services</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choose from our range of charitable services to make a meaningful
            impact in someone's life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h4>
                  <div className="text-2xl font-bold text-cyan-500 mb-3">
                    {service.price}
                  </div>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
