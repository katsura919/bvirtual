import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] dark:bg-[#111] border-t-2 border-dashed border-[#ebebeb] dark:border-[#2e3044] pt-16 pb-8 relative z-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center">
               <Image 
                 src="/assets/Bvirtual-Logo-2.png" 
                 alt="BVirtual Logo" 
                 width={160} 
                 height={50} 
                 className="object-contain"
               />
             </div>
             <p className="text-[#999] text-sm leading-relaxed pr-4 mt-2">
               Crafting tailored digital solutions and comprehensive business operations to perfectly fit your needs.
             </p>
             <div className="flex gap-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1c29] border border-[#ebebeb] dark:border-[#2e3044] flex items-center justify-center text-[#999] hover:text-[#4d87e0] hover:border-[#4d87e0]/30 transition-all shadow-sm">
                 <TwitterIcon />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1c29] border border-[#ebebeb] dark:border-[#2e3044] flex items-center justify-center text-[#999] hover:text-[#4d87e0] hover:border-[#4d87e0]/30 transition-all shadow-sm">
                 <LinkedinIcon />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1c29] border border-[#ebebeb] dark:border-[#2e3044] flex items-center justify-center text-[#999] hover:text-[#4d87e0] hover:border-[#4d87e0]/30 transition-all shadow-sm">
                 <InstagramIcon />
               </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#2e3044] dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4d87e0]" />
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Process', 'Case Studies', 'Pricing', 'Careers'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[#999] text-sm hover:text-[#4d87e0] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-[#2e3044] dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4d87e0]" />
              Services
            </h4>
            <ul className="space-y-3">
              {['Business Formation', 'Website Design', 'Virtual Assistants', 'Permit Pulling', 'Bookkeeping'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[#999] text-sm hover:text-[#4d87e0] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#2e3044] dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4d87e0]" />
              Contact
            </h4>
            <ul className="space-y-4">
               <li className="flex items-start gap-3 text-[#999] text-sm group">
                 <MapPin className="w-5 h-5 text-[#4d87e0] shrink-0 group-hover:-translate-y-1 transition-transform" />
                 <span>123 Innovation Drive,<br/>Tech City, TC 10010</span>
               </li>
               <li className="flex items-center gap-3 text-[#999] text-sm group">
                 <Phone className="w-4 h-4 text-[#4d87e0] shrink-0 group-hover:-translate-y-1 transition-transform" />
                 <span>(619) 983-8540</span>
               </li>
               <li className="flex items-center gap-3 text-[#999] text-sm group">
                 <Mail className="w-4 h-4 text-[#4d87e0] shrink-0 group-hover:-translate-y-1 transition-transform" />
                 <span>Info@bvirtualbusiness.com</span>
               </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#ebebeb] dark:border-[#2e3044] flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-[#999] text-sm font-medium">
             © {new Date().getFullYear()} BVirtual. All rights reserved.
           </div>
           <div className="flex gap-6 text-[#999] text-sm font-medium">
             <Link href="#" className="hover:text-[#4d87e0] transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-[#4d87e0] transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
