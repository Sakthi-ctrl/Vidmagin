import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Twitter, Linkedin, Link2, Quote } from 'lucide-react';

export default function SimplifyingLimitedKYCBlog() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00]">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF4500] to-[#C41E00] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* PREMIUM DARK HERO */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF4500]/20 via-transparent to-transparent rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#C41E00]/20 via-transparent to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/#insights" className="inline-flex items-center gap-2 text-[13px] font-bold text-white/50 hover:text-white transition-colors mb-12 group uppercase tracking-widest">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-sm mb-8">
              <div className="h-2 w-2 rounded-full bg-[#FF4500] animate-pulse"></div>
              <span className="text-[11px] font-black tracking-widest text-white uppercase">Finance & Banking</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1] mb-8">
              Simplifying Limited KYC for Modern Banking with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">Vidmagin</span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Paul Jai Sudhan M" className="w-14 h-14 rounded-full object-cover border-2 border-[#111111] shadow-[0_0_0_2px_rgba(255,255,255,0.2)]" />
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Written By</div>
                  <div className="text-[14px] font-black tracking-wide text-white uppercase">Paul Jai Sudhan M</div>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/10 mx-2"></div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Published On</div>
                <div className="text-[14px] font-bold tracking-wide text-white uppercase">SEP 24, 2023</div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/10 mx-2"></div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Read Time</div>
                <div className="text-[14px] font-bold tracking-wide text-white uppercase">4 Min Read</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <main className="py-24 relative bg-white">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#111111] to-white opacity-[0.02]"></div>
        
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          {/* Left Social/Share Sidebar (Sticky on Desktop) */}
          <div className="hidden lg:block w-16 flex-shrink-0">
            <div className="sticky top-32 flex flex-col items-center gap-6">
              <div className="text-[10px] font-bold tracking-widest text-[#5A5B5E]/40 uppercase [writing-mode:vertical-lr] rotate-180 mb-4">
                Share Article
              </div>
              <div className="w-px h-12 bg-[#5A5B5E]/10"></div>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAFAFA] border border-[#5A5B5E]/10 text-[#5A5B5E] hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-blue-50 transition-all duration-300">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAFAFA] border border-[#5A5B5E]/10 text-[#5A5B5E] hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-blue-50 transition-all duration-300">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FAFAFA] border border-[#5A5B5E]/10 text-[#5A5B5E] hover:text-[#FF4500] hover:border-[#FF4500] hover:bg-orange-50 transition-all duration-300">
                <Link2 size={18} />
              </button>
            </div>
          </div>

          {/* Actual Content */}
          <article className="flex-1 max-w-3xl">
            {/* Lead Paragraph */}
            <p className="text-xl sm:text-2xl text-[#1A1A1A] font-medium leading-relaxed tracking-tight mb-10">
              In the dynamic landscape of banking and finance, the Know Your Customer (KYC) verification process stands as a vital cornerstone. As the sector races forward, traditional KYC methods have evolved into Video KYC, an innovative approach embraced by banks. <span className="text-[#5A5B5E]/50">While Video KYC represents a significant leap forward, it's important to recognize its criticality and acknowledge the next steps in its evolution.</span>
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5A5B5E]/10 to-transparent mb-16"></div>
            
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12">
              This method typically entails customers scheduling video appointments with bank agents to ensure compliance with RBI norms. This is where Vidmagin, with its pioneering asynchronous model, is paving the way for the future of KYC. By removing the need for scheduled video appointments, Vidmagin simplifies and streamlines the Limited KYC process, making it much more convenient, efficient, and accessible for both customers and institutions alike, all while adhering to RBI norms. Vidmagin represents a leap forward in enhancing the ease and effectiveness of the KYC process in the banking and finance industry.
            </p>

            <div className="my-16 p-10 bg-[#FAFAFA] rounded-3xl border border-[#5A5B5E]/5 relative overflow-hidden">
              <div className="absolute -top-4 -left-4 text-[#FF4500]/10">
                <Quote size={120} />
              </div>
              <p className="relative z-10 text-xl font-bold text-[#1A1A1A] leading-relaxed italic text-center px-4">
                "Vidmagin simplifies and streamlines the Limited KYC process, making it much more convenient, efficient, and accessible for both customers and institutions alike."
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              A Discovery in KYC: Agent-Free Video Verification
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              Currently, most Video KYC verifications require customers to schedule synchronous video appointments with agents. These appointments could be time-consuming and inconvenient, leading to delays in getting new accounts opened or initiating the loan application process.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              Vidmagin's agent-free video verification process, instead of relying on scheduled appointments with agents, allows customers to initiate and complete their KYC process independently. This shift to an agent-free model empowers customers to complete their limited KYC verification at their own pace, without the need for agent assistance.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12 border-l-4 border-[#FF4500] pl-6 bg-[#FAFAFA] p-6 rounded-r-2xl">
              <strong className="text-[#1A1A1A]">Vidmagin's Versatility:</strong> The Vidmagin system is capable of capturing video, audio, images, facilitating multiple-choice questions, and accepting file uploads. This versatility ensures that the KYC process is comprehensive and adaptable to various customer needs.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              Compliance and Convenience in Harmony
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              RBI's guidelines for KYC are crucial to maintaining the integrity of the financial system, and Vidmagin ensures that these requirements are seamlessly met. The agent-free video verification process remains fully compliant with RBI norms, upholding rigorous security and data protection standards.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              Through secure document uploads and structured questionnaires, Vidmagin collects the necessary information while safeguarding data confidentiality and adhering to RBI's stringent compliance standards.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12 border-l-4 border-[#FF4500] pl-6 bg-[#FAFAFA] p-6 rounded-r-2xl">
              <strong className="text-[#1A1A1A]">RBI Compliance Features:</strong> Vidmagin goes beyond the basics, complying with RBI norms through advanced features such as Geo-tagging and Liveness detection, enhancing the security and accuracy of the KYC process.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              Empowering Customer Independence
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              One of the most significant advantages of Vidmagin's agent-free video verification is the independence it offers to customers. They no longer need to schedule appointments or align their schedules with agent availability. Instead, customers have the autonomy to complete their limited KYC verification at their convenience, on their terms.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12">
              This empowerment not only enhances the customer experience but also expedites the onboarding process. By eliminating the need for scheduled agent appointments, Vidmagin accelerates KYC verification, enabling customers to access financial services more efficiently.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              Conclusion: A Game-Changer in Limited KYC
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              Vidmagin's agent-free video verification model, coupled with its versatility and advanced compliance features, is reshaping the limited KYC landscape. It eliminates the need for scheduled appointments and provides customers with greater control. By simplifying the process and empowering customers, Vidmagin aligns perfectly with RBI norms while offering unprecedented convenience and independence.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              This represents a significant win-win situation for both financial institutions and customers. Institutions can streamline their operations, reduce resource dependencies, and enhance compliance, while customers enjoy the freedom to complete their limited KYC verification seamlessly.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12">
              As the BFSI sector continues to evolve, Vidmagin leads the way to a more efficient, compliant, and customer-centric future.
            </p>

            <div className="flex justify-center mt-16 mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#5A5B5E]/30"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF4500]"></div>
                <div className="h-1 w-1 rounded-full bg-[#5A5B5E]/30"></div>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* AUTHOR BIO - PREMIUM CARD */}
      <section className="bg-white pb-32">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] bg-[#FAFAFA] border border-[#5A5B5E]/10 p-8 sm:p-12 overflow-hidden group hover:border-[#FF4500]/20 transition-colors duration-500 shadow-xl shadow-[#5A5B5E]/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF4500]/5 to-transparent rounded-full blur-[60px] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80" alt="Paul Jai Sudhan M" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg" />
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] text-white text-[10px] font-bold tracking-widest uppercase mb-4">
                  Written By
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight mb-2">Paul Jai Sudhan M</h3>
                <div className="text-sm font-bold tracking-widest text-[#FF4500] uppercase mb-4">Admin & Lead Analyst</div>
                <p className="text-lg text-[#5A5B5E]/80 leading-relaxed max-w-xl">
                  Paul writes about recruitment innovation, asynchronous video solutions, and the future of hiring workflows. He believes in technology that brings the human element back to HR.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#5A5B5E]/10 flex items-center justify-center text-[#5A5B5E] hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors shadow-sm">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#5A5B5E]/10 flex items-center justify-center text-[#5A5B5E] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-sm">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION PREV/NEXT - MASSIVE FOOTER BLOCKS */}
      <section className="bg-[#111111] border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
          
          {/* Previous */}
          <Link to="/blog/optimal-candidate-prescreening" className="group relative p-12 sm:p-20 flex flex-col justify-center overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-4 flex items-center gap-3">
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#FF4500] transition-all"></div>
                Previous Article
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF4500] group-hover:to-[#C41E00] transition-all duration-500 max-w-md">
                Pulling Off an Optimal Candidate Pre-Screening: A Deep Dive into..
              </h4>
            </div>
          </Link>

          {/* Next */}
          <Link to="/blog/pre-screening" className="group relative p-12 sm:p-20 flex flex-col justify-center items-start md:items-end text-left md:text-right overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#C41E00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col items-start md:items-end w-full">
              <div className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-4 flex items-center gap-3">
                Next Article
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#FF4500] transition-all"></div>
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#FF4500] group-hover:to-[#C41E00] transition-all duration-500 max-w-md">
                Pre-screening - Simpler Efforts, Better Results with Asynchronous Video Solution
              </h4>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
