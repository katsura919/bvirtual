"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does BVirtual provide?",
    answer: "We offer comprehensive business solutions including Business Formation & Compliance, Website Design & Development, Dedicated Virtual Assistants, Bookkeeping, Permit Assistance, and Full Production Services.",
  },
  {
    question: "How does the transparent pricing work?",
    answer: "We operate on fixed, transparent pricing models without hidden fees. Each service is clearly outlined so you know exactly what you're paying for from day one.",
  },
  {
    question: "Are your virtual assistants fully dedicated?",
    answer: "Yes, our virtual assistants are highly trained, fluent in English, and work exclusively for you. They can handle dispatching, scheduling, personal assistance, and office management from $7/hour.",
  },
  {
    question: "Can you help me form an LLC or Corporation?",
    answer: "Absolutely. We manage the entire setup process for LLCs, Corporations, and DBAs. This includes all state filings, required publications, and IRS registration to ensure full compliance.",
  },
  {
    question: "How long does a typical website design project take?",
    answer: "Most of our fast, modern, and mobile-friendly websites are designed, developed, and launched within 2 to 4 weeks, depending on the scale and complexity of your requirements.",
  },
];

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-[#d9d9d9] dark:border-[#2e3044] last:border-0 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group transition-all cursor-pointer relative z-20"
      >
        <span className={cn(
          "text-lg font-bold tracking-tight transition-colors duration-300",
          isOpen ? "text-[#4d87e0]" : "text-[#2e3044] dark:text-white group-hover:text-[#4d87e0] dark:group-hover:text-[#4d87e0]"
        )}>
          {question}
        </span>
        <div className={cn(
          "pointer-events-none p-2 rounded-full transition-all duration-300",
          isOpen ? "bg-[#4d87e0] text-white rotate-180" : "bg-[#f4f4f4] dark:bg-[#1e2030] text-[#2e3044] dark:text-white group-hover:bg-[#4d87e0]/10 group-hover:text-[#4d87e0]"
        )}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 pr-12 text-[#444] dark:text-[#d9d9d9] font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-24 bg-white dark:bg-[#060606] overflow-hidden">
      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-[#d9d9d9] dark:border-[#2e3044] bg-white/50 dark:bg-[#1e2030]/50 backdrop-blur-md px-3 py-1 text-sm font-bold text-[#4d87e0]"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-black font-heading tracking-tight text-[#2e3044] dark:text-white md:text-5xl"
          >
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-[#444] dark:text-[#d9d9d9]"
          >
            Everything you need to know about BVirtual and how we help your business thrive.
          </motion.p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
