"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image
              src="/images/logo.jpg"
              alt="Umm-e-Habiba Welfare Trust Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h4 className="font-bold">Umm-e-Habiba Welfare Trust</h4>
              <p className="text-sm text-slate-400">Founded by Maulana Ubaid Ullah Qasmi</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Umm-e-Habiba Welfare Trust. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-1">Making the world a better place, one life at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
