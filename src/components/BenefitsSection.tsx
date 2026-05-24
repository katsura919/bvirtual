"use client";

import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Clock, Users, Activity } from 'lucide-react';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { 
  PricingVisual, 
  MaintenanceVisual, 
  CustomDesignVisual, 
  DeliveryVisual 
} from '@/components/ui/bento-visuals';

const benefits = [
  {
    Icon: DollarSign,
    name: "Cost Savings",
    description: "Professional support without full-time costs, pay only for what you need.",
    href: "#contact",
    cta: "Get Started",
    background: <PricingVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Clock,
    name: "Flexible Support",
    description: "Flexible support with no commitments, help when you need it, for any task or project.",
    href: "#contact",
    cta: "Learn More",
    background: <MaintenanceVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Users,
    name: "Expert Team",
    description: "All the support your business needs, in one place, handled by us.",
    href: "#contact",
    cta: "Meet the Team",
    background: <CustomDesignVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Activity,
    name: "Smooth Operations",
    description: "We handle the tasks that slow you down, so you can focus on growing your business.",
    href: "#contact",
    cta: "See How",
    background: <DeliveryVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative w-full py-24 bg-transparent overflow-hidden z-10">
      <div className="max-w-[1200px] px-8 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#fff4e7] rounded-[30px] px-[18px] py-[6px] mb-4 text-[14px] font-semibold text-[#ffb55a]"
          >
            Why Choose Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-['Open_Sans',sans-serif] tracking-tight text-[#2e3044] md:text-5xl"
          >
            Benefits of Working <br /> With BVirtual
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[17px] text-[#444] font-light leading-relaxed"
          >
            We combine expert support with a seamless process to ensure your business operations run smoother and faster.
          </motion.p>
        </div>

        <BentoGrid className="max-w-5xl mx-auto md:grid-cols-2">
          {benefits.map((benefit) => (
            <BentoCard key={benefit.name} {...benefit} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
