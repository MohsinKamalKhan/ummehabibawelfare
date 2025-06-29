"use client";

import TopBanner from "@/components/top-banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Building,
  Hash,
  User,
  Phone,
  MapPin,
  Heart,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <TopBanner />
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Make a Donation
              </h1>
              <p className="text-xl text-slate-600">
                Your generosity can transform lives and bring hope to those who
                need it most
              </p>
            </div>

            {/* Bank Details Card */}
            <Card className="mb-8 border-2 border-amber-200 shadow-xl">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center text-3xl text-slate-800">
                  <CreditCard className="w-10 h-10 mr-4 text-amber-600" />
                  Bank Account Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <User className="w-8 h-8 text-amber-600 mt-1" />
                      <div>
                        <p className="font-bold text-xl text-slate-700 mb-2">
                          Account Title:
                        </p>
                        <p className="text-2xl text-slate-800 font-bold">
                          Umm-e-Habiba Welfare Trust
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Hash className="w-8 h-8 text-amber-600 mt-1" />
                      <div>
                        <p className="font-bold text-xl text-slate-700 mb-2">
                          Account Number:
                        </p>
                        <p className="text-3xl text-slate-800 font-mono font-bold bg-slate-100 p-3 rounded-lg">
                          201966385
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Building className="w-8 h-8 text-amber-600 mt-1" />
                      <div>
                        <p className="font-bold text-xl text-slate-700 mb-2">
                          Bank Name:
                        </p>
                        <p className="text-2xl text-slate-800 font-bold">
                          United Bank Limited
                        </p>
                        <p className="text-xl text-slate-600">
                          Wahdat Road Branch
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="w-8 h-8 mr-3" />
                  Need Help with Your Donation?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-lg mb-3">Contact Numbers:</p>
                    <div className="space-y-2">
                      <a
                        href="tel:042-37428389"
                        className="block text-xl font-semibold hover:underline"
                      >
                        📞 042-37428389
                      </a>
                      <a
                        href="tel:0302-6889992"
                        className="block text-xl font-semibold hover:underline"
                      >
                        📱 0302-6889992
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-2">Visit Us:</p>
                      <p className="text-lg">Jamia Ashrafia Lahore</p>
                      <p className="text-base opacity-90">Punjab, Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm">
                    Our dedicated team is available to assist you with your
                    donations and answer any questions about our programs. Feel
                    free to contact us for guidance on online banking transfers
                    or to learn more about how your donation will be used.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Impact Information */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-slate-800">
                  <Heart className="w-8 h-8 mr-3 text-red-500" />
                  Your Donation Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-3">
                      How Your Money Helps:
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Support widows and orphans with monthly assistance
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Provide free Iftar meals during Ramadan
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Fund educational programs for underprivileged children
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        Emergency relief during natural disasters
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800 mb-3">
                      Donation Guidelines:
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        All donations are used for charitable purposes only
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        Regular updates on fund utilization
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        Transparent financial reporting
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        Receipt provided for all donations
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Button
                onClick={() => window.open("tel:042-37428389")}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us for Donation Assistance
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
