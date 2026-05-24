"use client";

import { StaggeredMenu } from '@/components/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'FAQ\'s', ariaLabel: 'Frequently asked questions', link: '/faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: '(619) 983-8540', link: 'tel:6199838540' },
  { label: 'Info@bvirtualbusiness.com', link: 'mailto:Info@bvirtualbusiness.com' }
];

export default function Home() {
  return (
    <div style={{ height: '100vh', background: 'var(--background)' }}>
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
      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">BVirtual</h1>
        <p className="mt-4 text-lg">Smart Business Support for Contractors & Small Businesses</p>
      </main>
    </div>
  );
}
