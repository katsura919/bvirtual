"use client";

import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { AvatarGroup } from '@/components/animate-ui/components/animate/avatar-group';

const avatars = [
  { src: "https://i.pravatar.cc/150?img=11", alt: "User 1" },
  { src: "https://i.pravatar.cc/150?img=12", alt: "User 2" },
  { src: "https://i.pravatar.cc/150?img=13", alt: "User 3" },
  { src: "https://i.pravatar.cc/150?img=14", alt: "User 4" },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="bg-transparent px-8 pt-4 pb-20 lg:pt-8 lg:pb-[10vw] max-w-[1200px] mx-auto w-full flex justify-center text-center">
        {/* Text Side (Centered) */}
        <div className="flex flex-col items-center w-full max-w-[800px]">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 bg-white dark:bg-[#1a1c29] p-1.5 pr-4 rounded-full border border-[#ebebeb] dark:border-[#2e3044] shadow-sm mb-6"
          >
             <AvatarGroup>
               {avatars.map((avatar, idx) => (
                 <img key={idx} src={avatar.src} alt={avatar.alt} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a1c29] object-cover" />
               ))}
             </AvatarGroup>
             <div className="text-sm font-semibold text-[#2e3044] dark:text-[#d9d9d9]">
               Joined by 500+ CA Businesses
             </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(44px,6vw,80px)] text-[#2e3044] dark:text-white leading-[1.05] tracking-tight mb-6"
          >
            <span className="font-light">Smart Business Support,</span><br />
            <span className="font-black text-[#4d87e0]">All in One Place.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-[21px] font-normal text-[#555] dark:text-[#aaa] leading-[1.7] mb-10 max-w-[680px]"
          >
            Helping contractors and small businesses across California operate smoother, faster, and completely stress-free. We take care of the details so you can focus on building and growing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-[16px] flex-wrap justify-center"
          >
            <a href="#contact"
              className="group px-[32px] py-[16px] bg-[#2e3044] text-white rounded-[30px] text-[17px] font-bold no-underline inline-flex items-center gap-[10px] transition-all duration-300 hover:scale-105 shadow-md">
              Get Started Today <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services"
              className="group px-[32px] py-[16px] bg-[#4d87e0] text-white rounded-[30px] text-[17px] font-bold no-underline inline-flex items-center gap-[10px] transition-all duration-300 hover:scale-105 shadow-md shadow-[#4d87e0]/30">
              Our Services
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <div className="flex gap-[28px] mt-2 items-center justify-center flex-wrap">
              {[
                { text: 'Fully Remote' },
                { text: 'California Specialists' },
                { text: 'White-Glove Service' },
              ].map(b => (
                 <div key={b.text} className="flex items-center gap-2">
                   <CheckCircle className="text-[#4d87e0]" size={16} />
                   <span className="text-[15px] font-medium text-[#777] dark:text-[#aaa]">{b.text}</span>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>
    </section>
  );
};
