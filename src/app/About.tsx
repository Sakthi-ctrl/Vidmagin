import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Eye, 
  Users, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Heart,
  Network
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA] font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00]">
      {/* Background Noise */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HERO / MISSION SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-[#FF4500]/5 to-transparent rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#5A5B5E]/10 shadow-sm mb-12">
              <Eye size={16} className="text-[#FF4500]" />
              <span className="text-xs font-bold tracking-widest text-[#5A5B5E] uppercase">Our Mission</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#1A1A1A] leading-[1.05] mb-12">
              Built to see people <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">clearly.</span>
            </motion.h1>
            
            <div className="max-w-3xl mx-auto space-y-8 text-xl sm:text-2xl font-medium text-[#5A5B5E]/90 leading-relaxed">
              <motion.p variants={fadeInUp}>
                Vidmagin was built on a simple belief: the most important decisions — who to hire, who to fund, who to trust — should be made with as much clarity as possible.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Too many evaluation processes reduce people to keywords, checkboxes, and scheduled slots. We built something different: a platform that captures authentic human signal — through video, AI, and intelligent design — and delivers the insight you need to act with confidence.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TWO PROBLEMS SECTION */}
      <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#FF4500]/10 rounded-full blur-[150px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white/50 tracking-widest uppercase mb-4">We Serve Two Problems</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-12 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={120} /></div>
              <h3 className="text-3xl font-black text-[#FF4500] mb-6">The hiring problem</h3>
              <p className="text-xl text-white/80 leading-relaxed relative z-10">
                Where great candidates get lost in scheduling chaos, and great teams get overwhelmed by volume.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-12 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Activity size={120} /></div>
              <h3 className="text-3xl font-black text-[#FF4500] mb-6">The signal problem</h3>
              <p className="text-xl text-white/80 leading-relaxed relative z-10">
                Where the data exists, but the meaning behind it doesn't surface until it's too late.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <h3 className="text-5xl font-black text-white">Vidmagin solves both.</h3>
          </motion.div>
        </div>
      </section>

      {/* THE SOLUTION SECTION */}
      <section className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
                An intelligent engine <br/>
                <span className="text-[#FF4500]">for human connection.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#5A5B5E]/80 leading-relaxed">
                <p>
                  Our platform combines an <strong>Async Video Hub</strong> for capturing real, unscripted human responses — and an <strong>Intelligent Assessment Engine</strong> that scores, ranks, and filters at scale without losing the human in the process.
                </p>
                <p>
                  We believe the right hire, the right founder, and the right customer story are already out there. Vidmagin just helps you find them faster, and understand them better.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#FF4500]/5 rounded-[40px] transform rotate-3 scale-105 -z-10"></div>
              <div className="bg-white border border-[#5A5B5E]/10 rounded-[32px] p-10 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4500]/10 rounded-full blur-[40px]"></div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-6">
                    <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#5A5B5E]/5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#FF4500] mb-4">
                        <Users size={24} />
                      </div>
                      <span className="font-bold text-[#1A1A1A]">Right Hire</span>
                    </div>
                    <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#5A5B5E]/5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#FF4500] mb-4">
                        <ShieldCheck size={24} />
                      </div>
                      <span className="font-bold text-[#1A1A1A]">Right Founder</span>
                    </div>
                  </div>
                  <div className="space-y-6 pt-12">
                    <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#5A5B5E]/5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#FF4500] mb-4">
                        <Heart size={24} />
                      </div>
                      <span className="font-bold text-[#1A1A1A]">Right Story</span>
                    </div>
                    <div className="bg-gradient-to-br from-[#FF4500] to-[#C41E00] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4">
                        <Network size={24} />
                      </div>
                      <span className="font-bold text-white">Faster Insight</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-32 bg-[#FAFAFA] relative border-y border-[#5A5B5E]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Clarity over noise", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Activity, title: "Scale without sacrifice", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Zap, title: "Speed with depth", color: "text-green-500", bg: "bg-green-50" },
              { icon: Heart, title: "People, always first", color: "text-[#FF4500]", bg: "bg-[#FF4500]/10" }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-[#5A5B5E]/5 rounded-[32px] p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl ${value.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon size={36} className={value.color} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 sm:p-20 rounded-[40px] bg-[#1A1A1A] border border-[#5A5B5E]/10 shadow-2xl overflow-hidden"
          >
            {/* Dark background glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C41E00]/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 text-white">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8">
                Transform your hiring and evaluation process.
              </h2>
              
              <div className="flex justify-center mt-12">
                <button className="group relative inline-flex h-16 items-center justify-center rounded-full bg-[#FF4500] px-10 text-lg font-bold text-white transition-all hover:bg-[#C41E00] hover:scale-105 hover:shadow-[0_0_40px_-10px_#FF4500]">
                  <span className="relative flex items-center gap-2">
                    Talk to Us
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
