"use client";

import { StaggeredMenu } from '@/components/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'FAQ\'s', ariaLabel: 'Frequently asked questions', link: '/faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

import { Phone, Mail } from 'lucide-react';

const socialItems = [
  { label: '(619) 983-8540', link: 'tel:6199838540', icon: <Phone size={18} /> },
  { label: 'Info@bvirtualbusiness.com', link: 'mailto:Info@bvirtualbusiness.com', icon: <Mail size={18} /> }
];
import { HeroSection } from '@/components/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ServicesSection } from '@/components/ServicesSection';

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
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="var(--primary)"
          openMenuButtonColor="var(--primary)"
          changeMenuColorOnOpen={true}
          colors={['var(--secondary)', 'var(--primary)']}
          logoUrl="/assets/Bvirtual-Logo-2.png"
          accentColor="var(--accent)"
          isFixed={true}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
        <main className="min-h-screen pt-[120px]">
          <HeroSection />
          <BenefitsSection />
          <ServicesSection />
        </main>
      </div>
    </div>
  );
}
