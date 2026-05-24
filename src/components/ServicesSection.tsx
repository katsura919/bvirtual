"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Layout, Users, FileCheck, Calculator, Briefcase } from 'lucide-react';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { 
  DeploymentVisual, 
  LandingPageVisual, 
  DashboardVisual,
  ScaleVisual,
  VirtualAssistantVisual,
  PermitVisual
} from '@/components/ui/bento-visuals';

const services = [
  {
    Icon: FileText,
    name: "Business Formation & Compliance",
    description: "Complete setup for LLCs, Corporations, and DBAs.",
    href: "#pricing",
    cta: "See Pricing",
    background: <DeploymentVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Layout,
    name: "Website Design & Development",
    description: "Fast, modern websites built for high conversions.",
    href: "#contact",
    cta: "Explore More",
    background: <LandingPageVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Users,
    name: "Virtual Assistant Services",
    description: "Dedicated virtual assistants tailored to your needs.",
    href: "#contact",
    cta: "Read More",
    background: <VirtualAssistantVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: FileCheck,
    name: "Permit Assistance & Permit Pulling",
    description: "End-to-end permit application and approval processing.",
    href: "#contact",
    cta: "Apply For A Permit",
    background: <PermitVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Calculator,
    name: "Bookkeeping Services",
    description: "Reliable bookkeeping and financial tracking made simple.",
    href: "#contact",
    cta: "View Plans",
    background: <DashboardVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Briefcase,
    name: "Full Production Services",
    description: "Complete workflow management from idea to execution.",
    href: "#contact",
    cta: "View Plans",
    background: <ScaleVisual />,
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 bg-transparent overflow-hidden z-10">
      <div className="max-w-[1200px] px-8 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#4d87e0]/10 rounded-[30px] px-[18px] py-[6px] mb-4 text-[14px] font-semibold text-[#4d87e0]"
          >
            Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-['Open_Sans',sans-serif] tracking-tight text-[#2e3044] md:text-5xl"
          >
            Yes, We Handle It All!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-3xl text-[17px] text-[#444] font-light leading-relaxed"
          >
            From permits and business formation to websites, accounting, and virtual support, we manage every detail so you can focus on growing your business. One team. One solution. Zero stress.
          </motion.p>
        </div>

        <BentoGrid className="max-w-[1200px] mx-auto md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
