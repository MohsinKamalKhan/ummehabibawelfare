"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="bg-amber-500 text-slate-900 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">042-37428389 | 0302-6889992</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@ummehabibawelfare.org</span>
            </div>
          </div>
          <Link href="/donate">
            <Button
              size="sm"
              className="bg-slate-800 hover:bg-slate-700 text-white"
            >
              <Heart className="w-4 h-4 mr-1" />
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
