import React from 'react';
import { ArrowRight, CheckCircle, FileText, BookOpen, Shield, Headphones } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="hero" className="bg-transparent px-8 py-[7vw] max-w-[1200px] mx-auto w-full">
      <div className="flex items-center gap-[5.5%] flex-wrap">
        {/* Text Side */}
        <div className="flex-[1_1_480px]">
          <div className="inline-block bg-[#fff4e7] rounded-[30px] px-[18px] py-[6px] mb-5">
            <span className="text-[14px] font-semibold text-[#ffb55a]">
              California Contractors & Small Businesses
            </span>
          </div>

          <h1 className="font-['Open_Sans',sans-serif] text-[clamp(32px,4vw,48px)] font-bold text-[#2e3044] leading-[1.2] mb-5">
            Smart Business<br />
            Support, <span className="text-[#4d87e0]">All in One Place</span>
          </h1>

          <p className="text-[17px] font-light text-[#444] leading-[1.6] mb-8 max-w-[520px]">
            Helping contractors and small businesses across California operate smoother, faster, and completely stress-free. We take care of the details so you can focus on building and growing.
          </p>

          <div className="flex gap-[14px] flex-wrap">
            <a href="#contact"
              className="group px-[28px] py-[13px] bg-[#2e3044] text-white rounded-[30px] text-[17px] font-normal no-underline inline-flex items-center gap-[10px] transition-all duration-300 ease-in-out hover:pr-[2em] hover:pl-[0.7em]">
              Get Started Today <ArrowRight size={16} />
            </a>
            <a href="#services"
              className="group px-[28px] py-[13px] bg-[#4d87e0] text-white rounded-[30px] text-[17px] font-normal no-underline inline-flex items-center gap-[10px] transition-all duration-300 ease-in-out">
              Our Services <ArrowRight size={16} />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex gap-[28px] mt-[36px] items-center flex-wrap">
            {[
              { text: 'Fully Remote' },
              { text: 'California Specialists' },
              { text: 'White-Glove Service' },
            ].map(b => (
              <div key={b.text} className="flex items-center gap-2">
                <CheckCircle className="text-[#4d87e0]" size={16} />
                <span className="text-[14px] font-normal text-[#777]">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Side */}
        <div className="flex-[0_0_360px] flex flex-col gap-4 items-center mt-10 md:mt-0">
          {/* Decorative card showing service categories */}
          <div className="bg-white rounded-[5px] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.15)] p-[28px] w-full">
            <div className="text-[15px] font-bold text-[#2e3044] mb-[18px]">
              What We Handle For You
            </div>
            {[
              { icon: <FileText size={22} className="text-[#4d87e0]" />, label: 'Permits & Licenses' },
              { icon: <BookOpen size={22} className="text-[#4d87e0]" />, label: 'Bookkeeping & Reporting' },
              { icon: <Shield size={22} className="text-[#ffb55a]" />, label: 'Compliance & Filing' },
              { icon: <Headphones size={22} className="text-[#4d87e0]" />, label: 'Ongoing Support' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-[14px] py-[12px] border-b border-[#f4f4f4] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <div className="w-[28px] flex justify-center">{item.icon}</div>
                <span className="text-[15px] font-normal text-[#2e3044]">{item.label}</span>
                <CheckCircle className="text-[#4d87e0] ml-auto" size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
