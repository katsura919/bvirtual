"use client";

import CardNav from '@/components/CardNav';
import { Phone, Mail } from 'lucide-react';

const cardNavItems = [
  {
    label: 'Explore',
    bgColor: '#f4f4f4',
    textColor: '#2e3044',
    links: [
      { label: 'Home', ariaLabel: 'Go to home page', href: '/' },
      { label: 'About', ariaLabel: 'Learn about us', href: '/about' },
      { label: 'FAQ\'s', ariaLabel: 'Frequently asked questions', href: '/faq' },
    ],
  },
  {
    label: 'Services',
    bgColor: '#4d87e0',
    textColor: '#fff',
    links: [
      { label: 'Our Services', ariaLabel: 'View our services', href: '/services' },
    ],
  },
  {
    label: 'Contact',
    bgColor: '#2e3044',
    textColor: '#fff',
    links: [
      { label: 'Contact Us', ariaLabel: 'Get in touch', href: '/contact' },
      { label: '(619) 983-8540', ariaLabel: 'Call us', href: 'tel:6199838540' },
      { label: 'Email Us', ariaLabel: 'Email us', href: 'mailto:Info@bvirtualbusiness.com' },
    ],
  },
];

import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FaqSection } from "@/components/FaqSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { QuoteSection } from "@/components/QuoteSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="relative z-10">
        <CardNav
          logo="/assets/Bvirtual-Logo-2.png"
          items={cardNavItems}
          baseColor="#ffffff"
          menuColor="#2e3044"
          buttonBgColor="#4d87e0"
          buttonTextColor="#ffffff"
        />
        <main className="min-h-screen pt-[120px]">
          <HeroSection />
          <BenefitsSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <FaqSection />
          <QuoteSection />
        </main>
      </div>
    </div>
  );
}
