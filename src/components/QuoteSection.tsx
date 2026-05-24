"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  ChevronDown, 
  FileText, 
  CheckCircle2, 
  Calculator,
  Sparkles,
  User,
  Phone,
  Mail,
  Briefcase,
  Loader2
} from "lucide-react";
import { Search as AnimatedSearch } from "@/components/animate-ui/icons/search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  "Business Formation & Compliance",
  "Website Design & Development",
  "Virtual Assistant Services",
  "Permit Assistance & Permit Pulling",
  "Bookkeeping Services",
  "Full Production Services"
];

const TailoredQuoteVisual = ({ selectedService }: { selectedService: string }) => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center py-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,135,224,0.06)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(77,135,224,0.12)_0%,transparent_60%)]" />

      <div className="relative w-full max-w-sm">
        
        {/* The Document / Blueprint */}
        <motion.div 
          animate={selectedService ? { y: 0, scale: 1 } : { y: 10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative z-10 w-full bg-white dark:bg-[#1a1c29] rounded-2xl border border-[#d9d9d9] dark:border-[#2e3044] shadow-2xl p-8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#4d87e0]/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#4d87e0]" />
            </div>
            <div className="px-3 py-1 bg-[#f4f4f4] dark:bg-[#2e3044] rounded-full text-[10px] font-bold text-[#999] uppercase tracking-wider flex items-center gap-1.5">
              {selectedService ? (
                <>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Ready to Craft
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full bg-[#999]" />
                  Draft Mode
                </>
              )}
            </div>
          </div>

          <div className="space-y-4">
             <div className="h-2 w-1/3 bg-[#f4f4f4] dark:bg-[#2e3044] rounded-full" />
             <div className="h-4 w-3/4 bg-[#f4f4f4] dark:bg-[#2e3044] rounded-full" />
             
             {/* The tailored part */}
             <div className={`mt-8 p-5 rounded-xl border-2 transition-all duration-500 ${selectedService ? 'border-[#4d87e0] bg-[#4d87e0]/5 shadow-inner' : 'border-dashed border-[#d9d9d9] dark:border-[#2e3044] bg-[#f8f9fa] dark:bg-[#111]'}`}>
                <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${selectedService ? 'bg-[#4d87e0] text-white' : 'bg-[#e0e0e0] dark:bg-[#2e3044] text-[#999]'}`}>
                     {selectedService ? <CheckCircle2 className="w-5 h-5" /> : <AnimatedSearch animate loop className="w-5 h-5" />}
                   </div>
                   <div className="flex-1">
                     <div className="text-[10px] font-bold text-[#999] uppercase tracking-wider mb-1">
                       Project Request
                     </div>
                     <div className="text-sm font-bold text-[#2e3044] dark:text-white leading-tight min-h-[1.25rem]">
                       {selectedService || "Waiting for details..."}
                     </div>
                   </div>
                </div>
             </div>

             <div className="pt-6 space-y-3">
               <div className="flex justify-between items-center">
                 <span className="text-xs text-[#999] font-medium">Needs Analysis</span>
                 <motion.div animate={{ width: selectedService ? "100%" : "30%" }} className="h-1.5 w-1/2 bg-[#f4f4f4] dark:bg-[#2e3044] rounded-full overflow-hidden flex justify-end">
                    {selectedService && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-[#4d87e0]" />}
                 </motion.div>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-xs text-[#999] font-medium">Custom Strategy</span>
                 <motion.div animate={{ width: selectedService ? "100%" : "50%" }} className="h-1.5 w-1/2 bg-[#f4f4f4] dark:bg-[#2e3044] rounded-full overflow-hidden flex justify-end">
                    {selectedService && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#4d87e0]" />}
                 </motion.div>
               </div>
             </div>
          </div>

          {/* Stamp Overlay */}
          {selectedService && (
            <motion.div 
              initial={{ scale: 3, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
              className="absolute top-1/3 right-4 transform -translate-y-1/2 border-4 border-[#4d87e0] text-[#4d87e0] px-4 py-1.5 rounded-lg font-black text-lg uppercase tracking-widest bg-white/90 dark:bg-[#1a1c29]/90 backdrop-blur-sm shadow-xl"
            >
              TAILORED
            </motion.div>
          )}
        </motion.div>

        {/* Floating Input Badges */}
        <motion.div 
           animate={selectedService ? { x: 0, opacity: 1, y: [0, -5, 0] } : { x: -20, opacity: 0.5, y: 0 }}
           transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
           className="absolute top-8 -left-10 z-20 bg-white dark:bg-[#1e2030] p-3 rounded-xl border border-[#d9d9d9] dark:border-[#2e3044] shadow-xl flex items-center gap-2"
        >
           <Sparkles className="w-4 h-4 text-[#4d87e0]" />
           <span className="text-xs font-bold text-[#2e3044] dark:text-white">Custom Fit</span>
        </motion.div>

        <motion.div 
           animate={selectedService ? { x: 0, opacity: 1, y: [0, 5, 0] } : { x: 20, opacity: 0.5, y: 0 }}
           transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
           className="absolute bottom-16 -right-8 z-20 bg-white dark:bg-[#1e2030] p-3 rounded-xl border border-[#d9d9d9] dark:border-[#2e3044] shadow-xl flex items-center gap-2"
        >
           <Calculator className="w-4 h-4 text-[#4d87e0]" />
           <span className="text-xs font-bold text-[#2e3044] dark:text-white">Fair Pricing</span>
        </motion.div>

      </div>
    </div>
  )
}

export function QuoteSection() {
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="quote" className="relative w-full py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden z-10">
      <div className="max-w-[1200px] px-8 mx-auto relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#4d87e0]/10 rounded-[30px] px-[18px] py-[6px] mb-4 text-[14px] font-semibold text-[#4d87e0]"
          >
            GET A QUOTE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold font-['Open_Sans',sans-serif] tracking-tight text-[#2e3044] dark:text-white md:text-5xl"
          >
            Fits Your Needs Perfectly
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-[#444] dark:text-[#d9d9d9] font-light leading-relaxed"
          >
            Tell us about your project and we'll get back to you with a custom quote tailored to your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#f8f9fa] dark:bg-[#111] border-2 border-dashed border-[#ebebeb] dark:border-[#2e3044] p-8 md:p-10 rounded-3xl shadow-sm flex flex-col gap-6 relative"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#2e3044] dark:text-white">Project Brief</h3>
              <p className="text-[#999] text-sm mt-1">Get A Quote That Fits Your Needs Perfectly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group/field">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] group-focus-within/field:text-[#4d87e0] transition-colors pointer-events-none z-10">
                  <User className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="peer w-full bg-white dark:bg-[#1a1c29] border-2 border-transparent rounded-xl pl-12 pr-4 pt-6 pb-2 text-[#2e3044] dark:text-white placeholder-transparent focus:outline-none focus:border-[#4d87e0]/30 focus:ring-4 focus:ring-[#4d87e0]/10 transition-all shadow-[0_0_0_1px_#d9d9d9] dark:shadow-[0_0_0_1px_#2e3044] focus:shadow-[0_0_0_1px_#4d87e0]"
                  placeholder="John Doe"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-12 top-2 text-[10px] font-bold text-[#999] uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#4d87e0] pointer-events-none z-10"
                >
                  Your Name
                </label>
              </div>
              <div className="relative group/field">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] group-focus-within/field:text-[#4d87e0] transition-colors pointer-events-none z-10">
                  <Phone className="w-5 h-5" />
                </div>
                <input 
                  type="tel" 
                  id="number" 
                  required
                  className="peer w-full bg-white dark:bg-[#1a1c29] border-2 border-transparent rounded-xl pl-12 pr-4 pt-6 pb-2 text-[#2e3044] dark:text-white placeholder-transparent focus:outline-none focus:border-[#4d87e0]/30 focus:ring-4 focus:ring-[#4d87e0]/10 transition-all shadow-[0_0_0_1px_#d9d9d9] dark:shadow-[0_0_0_1px_#2e3044] focus:shadow-[0_0_0_1px_#4d87e0]"
                  placeholder="(123) 456-7890"
                />
                <label 
                  htmlFor="number" 
                  className="absolute left-12 top-2 text-[10px] font-bold text-[#999] uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#4d87e0] pointer-events-none z-10"
                >
                  Your Number
                </label>
              </div>
            </div>

            <div className="relative group/field">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] group-focus-within/field:text-[#4d87e0] transition-colors pointer-events-none z-10">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                id="email" 
                required
                className="peer w-full bg-white dark:bg-[#1a1c29] border-2 border-transparent rounded-xl pl-12 pr-4 pt-6 pb-2 text-[#2e3044] dark:text-white placeholder-transparent focus:outline-none focus:border-[#4d87e0]/30 focus:ring-4 focus:ring-[#4d87e0]/10 transition-all shadow-[0_0_0_1px_#d9d9d9] dark:shadow-[0_0_0_1px_#2e3044] focus:shadow-[0_0_0_1px_#4d87e0]"
                placeholder="john@example.com"
              />
              <label 
                htmlFor="email" 
                className="absolute left-12 top-2 text-[10px] font-bold text-[#999] uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#4d87e0] pointer-events-none z-10"
              >
                Your Email
              </label>
            </div>

            <div className="relative group/field z-20">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] group-focus-within/field:text-[#4d87e0] transition-colors pointer-events-none z-10">
                <Briefcase className="w-5 h-5" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full bg-white dark:bg-[#1a1c29] border-2 border-transparent rounded-xl pl-12 pr-4 pt-6 pb-2 text-left focus:outline-none focus:border-[#4d87e0]/30 focus:ring-4 focus:ring-[#4d87e0]/10 transition-all shadow-[0_0_0_1px_#d9d9d9] dark:shadow-[0_0_0_1px_#2e3044] focus:shadow-[0_0_0_1px_#4d87e0] flex items-center justify-between group outline-none">
                  <span className={selectedService ? "text-[#2e3044] dark:text-white" : "text-transparent"}>
                    {selectedService || "Select"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#999] group-data-[state=open]:rotate-180 transition-transform duration-200" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-(--radix-dropdown-menu-trigger-width) bg-white dark:bg-[#1a1c29] border border-[#d9d9d9] dark:border-[#2e3044] rounded-xl p-1 shadow-lg z-50">
                  {services.map((service) => (
                    <DropdownMenuItem 
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className="cursor-pointer px-3 py-2 text-[#2e3044] dark:text-white hover:bg-[#f4f4f4] dark:hover:bg-[#2e3044] rounded-lg transition-colors focus:bg-[#f4f4f4] dark:focus:bg-[#2e3044]"
                    >
                      {service}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <label className={`absolute left-12 pointer-events-none transition-all uppercase tracking-wider font-bold text-[#999] z-10 ${selectedService ? 'top-2 text-[10px]' : 'top-4 text-sm normal-case font-medium'} group-focus-within/field:top-2 group-focus-within/field:text-[10px] group-focus-within/field:font-bold group-focus-within/field:uppercase group-focus-within/field:text-[#4d87e0]`}>
                Service Required
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess || !selectedService}
              className={`mt-4 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 relative overflow-hidden group h-[60px] ${
                isSuccess 
                  ? 'bg-green-500 hover:bg-green-600 cursor-default shadow-green-500/20' 
                  : isSubmitting || !selectedService
                    ? 'bg-[#d9d9d9] dark:bg-[#2e3044] text-[#999] cursor-not-allowed'
                    : 'bg-[#4d87e0] hover:bg-[#3a6bb5] shadow-[#4d87e0]/20'
              }`}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div key="loading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2 absolute">
                     <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-2 absolute">
                     <CheckCircle2 className="w-5 h-5" /> Request Sent!
                  </motion.div>
                ) : (
                  <motion.div key="default" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2 absolute">
                     Submit Request
                     <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.form>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full h-full min-h-[400px] flex items-center justify-center bg-transparent rounded-3xl p-8"
          >
            <div className="w-full h-full relative">
              <TailoredQuoteVisual selectedService={selectedService} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
