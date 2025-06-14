import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RamadanSection from "@/components/ramadan-section"
import VideoSection from "@/components/video-section"
import DonationSection from "@/components/donation-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <RamadanSection />
      <VideoSection />
      <DonationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
