import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileSearch, 
  Layers, 
  FileText,
  MessageCircleQuestion,
  UserCheck,
  Target,
  Zap,
  CheckCircle2,
  MonitorPlay,
  Briefcase,
  Users
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function CandidatePrescreening() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA] font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00]">
      {/* Background Noise */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#FF4500]/15 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C41E00]/15 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
                <FileSearch size={16} className="text-[#FF4500]" />
                <span className="text-xs font-bold tracking-widest text-white uppercase">Candidate Prescreening</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] mb-6">
                We Don't Just Read Between the Lines. We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">Decode the Person.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-2xl font-medium text-white/90 mb-6 leading-snug">
                Three Layers. One Truth. <br/>Because a resume is only the beginning.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                Finding the right person takes more than a quick keyword scan. It takes clarity, depth, and a human signal — before the interview even begins.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#FF4500] px-8 font-bold text-white transition-all hover:bg-[#C41E00] hover:scale-105 hover:shadow-[0_0_40px_-10px_#FF4500]">
                  <span className="relative flex items-center gap-2">
                    Explore Prescreening
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Layered representation */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative h-[500px] flex items-center justify-center perspective-1000"
            >
              <div className="relative w-full max-w-md aspect-[4/5] transform-style-3d rotate-x-12 -rotate-y-12">
                {/* Layer 3 - Bottom */}
                <div className="absolute inset-0 bg-white/5 border border-white/20 rounded-[32px] backdrop-blur-md shadow-2xl transform translate-z-[-60px] translate-y-12 translate-x-12 flex flex-col items-center justify-center p-8 opacity-40">
                  <FileText size={64} className="text-white/50 mb-4" />
                  <div className="w-3/4 h-4 bg-white/20 rounded-full mb-3"></div>
                  <div className="w-1/2 h-4 bg-white/20 rounded-full"></div>
                </div>
                
                {/* Layer 2 - Middle */}
                <div className="absolute inset-0 bg-white/10 border border-white/30 rounded-[32px] backdrop-blur-xl shadow-2xl transform translate-z-[0px] translate-y-6 translate-x-6 flex flex-col items-center justify-center p-8 opacity-70">
                  <MessageCircleQuestion size={64} className="text-[#FF4500]/70 mb-4" />
                  <div className="w-full flex gap-2 justify-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF4500]/30"></div>
                    <div className="w-16 h-8 rounded-full bg-white/20"></div>
                  </div>
                  <div className="w-full flex gap-2 justify-center">
                    <div className="w-12 h-8 rounded-full bg-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-[#FF4500]/30"></div>
                  </div>
                </div>
                
                {/* Layer 1 - Top */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] to-white border border-white/50 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-z-[60px] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Candidate Match" className="w-full h-[60%] object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white h-[40%] flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-[#1A1A1A] text-xl">David Chen</h4>
                      <div className="px-3 py-1 bg-[#FF4500]/10 text-[#FF4500] font-black text-sm rounded-full">96% FIT</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#5A5B5E]">
                      <UserCheck size={16} className="text-[#FF4500]" />
                      Verified Human Signal
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Layers size={48} className="text-[#FF4500] mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
              Three-layer intelligent filtering <br/>
              <span className="text-[#5A5B5E]/40">that goes beyond the resume.</span>
            </h2>
            <div className="text-xl text-[#5A5B5E]/80 leading-relaxed max-w-3xl mx-auto space-y-6">
              <p>
                Most platforms scan keywords and match dates. Vidmagin goes deeper. Our Candidate Prescreening Module runs every applicant through three intelligent layers — uncovering not just whether someone fits, but <strong className="text-[#1A1A1A]">why</strong> they do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE THREE LAYERS - CASCADING CARDS */}
      <section className="py-32 relative bg-[#FAFAFA] overflow-hidden">
        {/* Decorative connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FF4500]/20 to-transparent -translate-x-1/2 hidden lg:block"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 relative">
            
            {/* Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-[#FF4500]/5 rounded-[40px] transform -rotate-3 scale-105 -z-10"></div>
                <div className="bg-white border border-[#5A5B5E]/10 rounded-[32px] p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#5A5B5E]/10">
                    <div className="w-12 h-12 bg-[#FAFAFA] rounded-xl flex items-center justify-center"><FileText size={24} className="text-[#5A5B5E]" /></div>
                    <div className="w-12 h-12 bg-[#FF4500]/10 rounded-xl flex items-center justify-center"><Briefcase size={24} className="text-[#FF4500]" /></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-[#5A5B5E]">Experience Map</span>
                      <span className="text-xs font-black text-green-500 bg-green-50 px-2 py-1 rounded">MATCH</span>
                    </div>
                    <div className="h-2 w-full bg-[#FAFAFA] rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[92%]"></div></div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-sm font-bold text-[#5A5B5E]">Skill Gap Analysis</span>
                      <span className="text-xs font-black text-amber-500 bg-amber-50 px-2 py-1 rounded">MINOR GAP</span>
                    </div>
                    <div className="h-2 w-full bg-[#FAFAFA] rounded-full overflow-hidden"><div className="h-full bg-amber-500 w-[65%]"></div></div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-[#1A1A1A] text-white text-sm font-black rounded-full mb-6 shadow-md shadow-[#1A1A1A]/20">LAYER 1</span>
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-2">Decoding the Fit</h3>
                <h4 className="text-xl font-bold text-[#FF4500] mb-6">The resume meets the role.</h4>
                <p className="text-lg text-[#5A5B5E]/80 leading-relaxed">
                  It starts with the resume and the job description. We map real potential — strengths, genuine expertise, and meaningful gaps. We don't just flag a match. We show you the reasoning behind it.
                </p>
              </div>
            </motion.div>

            {/* Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              <div className="lg:text-right">
                <span className="inline-block px-4 py-1.5 bg-[#1A1A1A] text-white text-sm font-black rounded-full mb-6 shadow-md shadow-[#1A1A1A]/20">LAYER 2</span>
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-2">Decoding the Details</h3>
                <h4 className="text-xl font-bold text-[#FF4500] mb-6">The answers meet your expectations.</h4>
                <p className="text-lg text-[#5A5B5E]/80 leading-relaxed mb-6">
                  Yes, we ask the questions everyone asks. But what we do with the answers is what sets us apart. Our proprietary rule engine doesn't just collect responses — it analyzes them. It measures each answer against what you value most.
                </p>
                <p className="text-lg text-[#1A1A1A] font-medium italic">
                  "The best candidate isn't always the one with the perfect resume. Often, it's the one whose expectations align with yours."
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF4500]/5 rounded-[40px] transform rotate-3 scale-105 -z-10"></div>
                <div className="bg-white border border-[#5A5B5E]/10 rounded-[32px] p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircleQuestion className="text-[#FF4500]" />
                    <span className="font-bold text-[#1A1A1A]">Response Analysis</span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#FAFAFA] rounded-2xl border border-[#5A5B5E]/5 border-l-4 border-l-green-500">
                      <p className="text-sm font-bold text-[#1A1A1A] mb-1">Cultural Alignment</p>
                      <p className="text-xs text-[#5A5B5E]/70">Strong preference for collaborative environments detected.</p>
                    </div>
                    <div className="p-4 bg-[#FAFAFA] rounded-2xl border border-[#5A5B5E]/5 border-l-4 border-l-[#FF4500]">
                      <p className="text-sm font-bold text-[#1A1A1A] mb-1">Work Style</p>
                      <p className="text-xs text-[#5A5B5E]/70">Highly autonomous. May need clear target setting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Layer 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/10 to-[#C41E00]/5 rounded-[40px] transform -rotate-2 scale-105 -z-10 blur-sm"></div>
                <div className="bg-black rounded-[32px] overflow-hidden shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Video Response" className="w-full aspect-[4/3] object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FF4500]/90 text-white flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(255,69,0,0.8)] animate-pulse">
                      <MonitorPlay size={24} className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white text-sm font-bold mb-1">One-Minute Pitch</p>
                    <div className="h-1 bg-white/20 rounded-full w-full"><div className="h-full w-1/3 bg-[#FF4500] rounded-full"></div></div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF4500] to-[#C41E00] text-white text-sm font-black rounded-full mb-6 shadow-lg shadow-[#FF4500]/30">LAYER 3</span>
                <h3 className="text-3xl font-black text-[#1A1A1A] mb-2">Decoding the Person</h3>
                <h4 className="text-xl font-bold text-[#FF4500] mb-6">The human behind the profile.</h4>
                <p className="text-lg text-[#5A5B5E]/80 leading-relaxed mb-6">
                  A resume can't show you confidence. A questionnaire can't capture presence. That's why we built the one-minute video response — a feature that gives you your earliest handshake with every candidate, before you schedule a single call.
                </p>
                <p className="text-lg font-bold text-[#1A1A1A]">
                  You hear their voice. You see their thinking. You feel their fit.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY USE IT & WHERE IT'S USED */}
      <section className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Why Use It */}
            <div>
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-10 border-b-4 border-[#FF4500] inline-block pb-2">Why Use It</h2>
              <div className="space-y-6">
                {[
                  { icon: Target, title: "Clarity", desc: "Understand why a candidate matches, not just if they do." },
                  { icon: Layers, title: "Depth", desc: "Measure expectations alignment beyond the raw skillset." },
                  { icon: UserCheck, title: "Human connection", desc: "Video reveals confidence and fit before the first live conversation." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5 p-6 rounded-[24px] bg-[#FAFAFA] border border-[#5A5B5E]/5 hover:bg-white hover:shadow-xl hover:shadow-[#5A5B5E]/5 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FF4500] group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white transition-all flex-shrink-0">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-xl mb-2">{item.title}</h4>
                      <p className="text-[#5A5B5E]/80 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Where It's Used */}
            <div>
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-10 border-b-4 border-[#1A1A1A] inline-block pb-2">Where It's Used</h2>
              <div className="bg-[#1A1A1A] text-white rounded-[32px] p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/20 rounded-full blur-[80px] -z-0"></div>
                <div className="space-y-8 relative z-10">
                  {[
                    { icon: Users, text: "Mid to high-volume hiring workflows" },
                    { icon: Zap, text: "Reducing interviewer time by screening with precision" },
                    { icon: Target, text: "Identifying the best-fit candidates from large applicant pools" }
                  ].map((use, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1">
                        <CheckCircle2 size={24} className="text-[#FF4500]" />
                      </div>
                      <p className="text-xl font-medium text-white/90 leading-snug">
                        {use.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 sm:p-20 rounded-[40px] border border-[#5A5B5E]/10 shadow-2xl shadow-[#FF4500]/5 overflow-hidden bg-white"
          >
            <div className="relative z-10">
              <UserCheck size={48} className="text-[#FF4500] mx-auto mb-8 opacity-80" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] mb-8">
                See beyond the paper.<br/>
                <span className="text-[#FF4500]">Meet the person.</span>
              </h2>
              
              <div className="flex justify-center mt-12">
                <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-[#1A1A1A] px-10 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <span className="relative flex items-center gap-2">
                    Explore Prescreening
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
