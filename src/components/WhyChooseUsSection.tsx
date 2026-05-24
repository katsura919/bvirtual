"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FileX, Calculator, Expand, Users, Zap, MessageSquare } from 'lucide-react';

const reasons = [
  {
    Icon: FileX,
    title: "No Long Term Commitment",
    description: "Work with us month to month, without contracts or obligations. You stay in control at all times."
  },
  {
    Icon: Calculator,
    title: "Predictable Monthly Cost",
    description: "Clear pricing with no hidden expenses, no payroll, no benefits, no surprises."
  },
  {
    Icon: Expand,
    title: "Flexible & Scalable Support",
    description: "Easily scale support up or down based on your business needs."
  },
  {
    Icon: Users,
    title: "Multi-Skilled Virtual Assistance",
    description: "One solution for admin tasks, customer support, scheduling, CRM, and more."
  },
  {
    Icon: Zap,
    title: "Fast & Easy Onboarding",
    description: "Get started quickly without long hiring or training processes."
  },
  {
    Icon: MessageSquare,
    title: "Reliable & Professional Communication",
    description: "Consistent availability, clear updates, and a business-first mindset."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden z-10">
      <div className="max-w-[1200px] px-8 mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#4d87e0]/10 rounded-[30px] px-[18px] py-[6px] mb-4 text-[14px] font-semibold text-[#4d87e0]"
          >
            Why Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-['Open_Sans',sans-serif] tracking-tight text-[#2e3044] md:text-5xl"
          >
            Why Businesses Choose Bvirtual
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.Icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col p-8 rounded-2xl bg-[#f8f9fa] border-2 border-dashed border-[#ebebeb] transition-all duration-300"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4d87e0]/10 text-[#4d87e0]">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#2e3044]">
                  {reason.title}
                </h3>
                <p className="text-[#444] font-light leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
