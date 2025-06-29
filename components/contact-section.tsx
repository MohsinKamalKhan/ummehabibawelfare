"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, CreditCard, Building, Hash, User } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Donate via Online Banking</h3>
            <p className="text-xl text-slate-300 mb-8">
              Make a secure donation through online banking using our official bank details below
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Bank Details Card */}
            <Card className="bg-white text-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CreditCard className="w-8 h-8 mr-3 text-amber-600" />
                  Bank Account Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <User className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-bold text-lg text-slate-700">Account Title:</p>
                    <p className="text-xl text-slate-800 font-semibold">Umm-e-Habiba Welfare Trust</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Hash className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-bold text-lg text-slate-700">Account Number:</p>
                    <p className="text-2xl text-slate-800 font-mono font-bold">201966385</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-bold text-lg text-slate-700">Bank Name:</p>
                    <p className="text-xl text-slate-800 font-semibold">United Bank Limited</p>
                    <p className="text-lg text-slate-600">Wahdat Road Branch</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Card */}
            <Card className="bg-amber-500 text-slate-900">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="w-8 h-8 mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-2">For Donation Queries:</p>
                  <div className="space-y-2">
                    <a href="tel:042-37428389" className="block text-xl font-semibold hover:underline">
                      042-37428389
                    </a>
                    <a href="tel:0302-6889992" className="block text-xl font-semibold hover:underline">
                      0302-6889992
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Visit Us:</p>
                    <p className="text-lg">Jamia Ashrafia Lahore</p>
                    <p className="text-base">Punjab, Pakistan</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm opacity-90">
                    Our team is available to assist you with your donations and answer any questions about our programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Need Help with Your Donation?</h4>
            <p className="text-slate-300 mb-6">
              Contact our team for assistance with online banking or any donation-related queries
            </p>
            <Button
              onClick={() => window.open("tel:042-37428389")}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
