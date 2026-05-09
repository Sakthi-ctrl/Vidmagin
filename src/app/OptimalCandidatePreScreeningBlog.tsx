import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, Twitter, Linkedin, Link2, Quote } from 'lucide-react';

export default function OptimalCandidatePreScreeningBlog() {
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
              <span className="text-[11px] font-black tracking-widest text-white uppercase">Recruitment</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1] mb-8">
              Pulling Off an Optimal Candidate Pre-Screening: <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">A Deep Dive into Vidmagin</span>
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
                <div className="text-[14px] font-bold tracking-wide text-white uppercase">SEP 15, 2023</div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-white/10 mx-2"></div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Read Time</div>
                <div className="text-[14px] font-bold tracking-wide text-white uppercase">5 Min Read</div>
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
              In the fast-paced world of recruitment, finding the right talent swiftly and efficiently is crucial for any organization's success. The traditional hiring process often involves time-consuming interviews, repetitive questions, and logistical challenges. <span className="text-[#5A5B5E]/50">Enter Vidmagin - a game-changer in candidate pre-screening that leverages asynchronous video communication to streamline and enhance the hiring process.</span>
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5A5B5E]/10 to-transparent mb-16"></div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              The Candidate Pre-Screening Challenge
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              Candidate pre-screening is the initial phase of the hiring process where employers assess the suitability of applicants for a job role. Traditionally, this involves scheduling interviews, coordinating with candidates, and asking repetitive questions to gauge their qualifications and fit for the position.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              This process can be labor-intensive, prone to scheduling conflicts, and may not always yield comprehensive insights into candidates.
            </p>

            <div className="my-16 p-10 bg-[#FAFAFA] rounded-3xl border border-[#5A5B5E]/5 relative overflow-hidden">
              <div className="absolute -top-4 -left-4 text-[#FF4500]/10">
                <Quote size={120} />
              </div>
              <p className="relative z-10 text-xl font-bold text-[#1A1A1A] leading-relaxed italic text-center px-4">
                "Vidmagin leverages asynchronous video communication, allowing candidates to respond to specific questions at their own convenience."
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              The Vidmagin Advantage
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12">
              Vidmagin introduces a fresh and efficient approach to candidate pre-screening. It leverages asynchronous video communication, allowing candidates to respond to specific questions at their own convenience, while recruiters and HR professionals can review these responses on their time. Here's how Vidmagin revolutionizes candidate pre-screening:
            </p>

            {/* Sub-benefits formatted as beautiful blocks */}
            <div className="space-y-12 mb-16">
              <div className="pl-6 border-l-4 border-[#FF4500]/30 hover:border-[#FF4500] transition-colors duration-300">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">1. Personalized Questionnaires</h3>
                <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7]">
                  With Vidmagin, recruiters can create tailored questionnaires that are relevant to the job role and company culture. These questionnaires can include text, video, and audio questions, offering a well-rounded assessment of candidates.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-[#FF4500]/30 hover:border-[#FF4500] transition-colors duration-300">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">2. Time Control</h3>
                <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7]">
                  Recognizing that not all questions are equally critical, Vidmagin allows recruiters to assign time limits to each question. Critical questions can have more extended response times, while others can be more briskly answered, enhancing the efficiency of the pre-screening process.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-[#FF4500]/30 hover:border-[#FF4500] transition-colors duration-300">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">3. Asynchronous Communication</h3>
                <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7]">
                  Vidmagin's asynchronous model eliminates scheduling conflicts. Candidates can respond to questions from the comfort of their own space and at their own pace. This flexibility makes it easier for working professionals and candidates in different time zones to participate in the pre-screening process.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-[#FF4500]/30 hover:border-[#FF4500] transition-colors duration-300">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">4. Enhanced Candidate Assessment</h3>
                <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7]">
                  Vidmagin's multimedia responses, including video, audio, and text, provide a more comprehensive view of candidates. Recruiters can assess not only qualifications but also communication skills, enthusiasm, and cultural fit, which are often challenging to gauge in a traditional screening process.
                </p>
              </div>

              <div className="pl-6 border-l-4 border-[#FF4500]/30 hover:border-[#FF4500] transition-colors duration-300">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">5. Efficient Collaboration</h3>
                <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7]">
                  Vidmagin streamlines collaboration among hiring teams. Recruiters can easily share candidate responses with colleagues, leading to more informed decisions and reducing the time required to reach a consensus.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5A5B5E]/10 to-transparent my-16"></div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              How Vidmagin Works for Candidate Pre-Screening
            </h2>
            <ul className="space-y-6 text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12">
              <li className="flex gap-4">
                <span className="text-[#FF4500] font-black mt-1">•</span>
                <span><strong className="text-[#1A1A1A]">Create Custom Questionnaires:</strong> Recruiters start by creating customized questionnaires with a mix of text, video, and audio questions that align with the job role's requirements.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FF4500] font-black mt-1">•</span>
                <span><strong className="text-[#1A1A1A]">Send Invitations:</strong> Candidates receive invitations to answer the questionnaire. They can complete it at their convenience by recording video or audio responses and answering text-based questions.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FF4500] font-black mt-1">•</span>
                <span><strong className="text-[#1A1A1A]">Review Responses:</strong> Recruiters and hiring teams review the responses at their convenience, providing them with a comprehensive understanding of each candidate's qualifications and suitability for the role.</span>
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-12 mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-[#FF4500] rounded-full inline-block"></span>
              The Future of Candidate Pre-Screening
            </h2>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              Vidmagin's asynchronous video solution is transforming candidate pre-screening into a more efficient, flexible, and insightful process. By empowering both recruiters and candidates to engage on their terms, Vidmagin facilitates better hiring decisions and ensures that no talented candidate goes unnoticed due to scheduling constraints.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-8">
              In an era where remote work is becoming the norm and international talent pools are more accessible than ever, Vidmagin's approach to candidate pre-screening represents a leap forward in the evolution of recruitment. It enables organizations to find the right talent quickly and seamlessly, setting the stage for more productive and successful hires.
            </p>
            <p className="text-[17px] text-[#5A5B5E]/90 leading-[1.7] mb-12">
              As organizations continue to adapt to the changing landscape of work, Vidmagin stands at the forefront, redefining the way we connect and assess candidates. With Vidmagin, the future of candidate pre-screening has arrived - and it looks more efficient and insightful than ever before.
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
          <Link to="/blog/pre-screening" className="group relative p-12 sm:p-20 flex flex-col justify-center overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-4 flex items-center gap-3">
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#FF4500] transition-all"></div>
                Previous Article
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF4500] group-hover:to-[#C41E00] transition-all duration-500 max-w-md">
                Pre-screening - Simpler Efforts, Better Results with Asynchronous Video Solution
              </h4>
            </div>
          </Link>

          {/* Next */}
          <Link to="#" className="group relative p-12 sm:p-20 flex flex-col justify-center items-start md:items-end text-left md:text-right overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#C41E00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col items-start md:items-end w-full">
              <div className="text-[11px] font-black tracking-widest text-white/40 uppercase mb-4 flex items-center gap-3">
                Next Article
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#FF4500] transition-all"></div>
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#FF4500] group-hover:to-[#C41E00] transition-all duration-500 max-w-md">
                Simplifying Limited KYC for Modern Banking with Vidmagin
              </h4>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
