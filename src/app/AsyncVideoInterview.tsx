import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Clock, 
  CalendarOff, 
  Play, 
  Video, 
  CheckCircle2, 
  BrainCircuit, 
  Globe2, 
  Zap, 
  Users, 
  Target,
  Sparkles
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

export default function AsyncVideoInterview() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA] font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00]">
      {/* Background Noise */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#5A5B5E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl relative z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#5A5B5E]/10 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#FF4500] animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide text-[#5A5B5E] uppercase">Async Video Interview</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1A1A1A] leading-[1.05] mb-6">
                The Interview That Finds Its <span className="relative inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">Moment.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl sm:text-2xl font-medium text-[#5A5B5E] mb-6 leading-snug">
                Stop scheduling. Start discovering.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-[#5A5B5E]/80 mb-10 leading-relaxed max-w-xl">
                You have a role to fill. They have a story to tell. But calendars fight. Schedules pile up. Good candidates slip away while you're still hunting for a slot. <br/><br/>
                <strong className="text-[#1A1A1A]">What if the interview didn't need a time slot at all?</strong>
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#FF4500] px-8 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_#FF4500]">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <span className="relative flex items-center gap-2">
                    Get Started Now
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4500]/20 to-[#C41E00]/10 rounded-[40px] blur-3xl -z-10"></div>
              <div className="bg-white rounded-[40px] border border-[#5A5B5E]/10 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Video size={200} />
                </div>
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-center gap-4 bg-[#FAFAFA] p-4 rounded-2xl border border-[#5A5B5E]/5">
                    <div className="w-12 h-12 rounded-full bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                      <CalendarOff size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A]">No Scheduling Required</h4>
                      <p className="text-sm text-[#5A5B5E]/70">Invite sent. Review when ready.</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#1A1A1A] border border-[#5A5B5E]/10 shadow-inner group">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Candidate" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-16 w-16 rounded-full bg-[#FF4500] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,69,0,0.6)]">
                        <Play size={24} className="ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM & WHAT IT IS */}
      <section className="py-24 bg-white border-y border-[#5A5B5E]/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-[#1A1A1A] flex items-center gap-3">
                <Clock className="text-[#FF4500]" />
                The delay starts here.
              </h2>
              <p className="text-lg text-[#5A5B5E]/80 leading-relaxed">
                Interviews get pushed. Feedback stalls. The wrong hire becomes a risk — not because you lacked candidates, but because the process slowed everything down.
              </p>
              <div className="p-6 bg-[#FAFAFA] rounded-2xl border-l-4 border-[#FF4500]">
                <p className="text-[#1A1A1A] font-semibold italic">
                  "Every day spent finding a meeting slot is a day a great candidate might accept somewhere else."
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-black text-[#1A1A1A] flex items-center gap-3">
                <Target className="text-[#FF4500]" />
                Where readiness meets insight.
              </h2>
              <p className="text-lg text-[#5A5B5E]/80 leading-relaxed">
                Vidmagin's Async Video Interview is an asynchronous, video-based platform that captures authentic candidate responses — on their schedule, reviewed on yours.
              </p>
              <p className="text-lg text-[#5A5B5E]/80 leading-relaxed">
                Not a squeezed-in call. A dedicated space. Quiet. Focused. Theirs. Where a candidate can present their complete capability without the pressure of being put on the spot.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] mb-4">How It Works</h2>
              <p className="text-xl text-[#5A5B5E]/70 max-w-2xl mx-auto">A seamless experience designed to extract true insight, not just quick answers.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FF4500]/20 to-transparent -translate-y-1/2 -z-10"></div>
            
            {[
              {
                step: "01",
                title: "You ask what matters.",
                desc: "Move beyond the standard. Ask about the project saved by initiative, not just instruction. Ask about growth born from setback. You set the stage for genuine insight."
              },
              {
                step: "02",
                title: "You invite, they prepare.",
                desc: "Send a single link. It's not an open-ended task; it's a clear, respectful window. Candidates reflect, gather their examples. When they're ready, they begin. On their time."
              },
              {
                step: "03",
                title: "You discover, on your schedule.",
                desc: "The interview arrives ready for review. Watch with your team. Share with a click. Compare responses seamlessly. Meet the professional behind the profile."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-3xl p-8 border border-[#5A5B5E]/10 shadow-lg shadow-[#5A5B5E]/5 relative hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF4500] to-[#C41E00] text-white flex items-center justify-center text-2xl font-black mb-8 shadow-xl shadow-[#FF4500]/20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-[#5A5B5E]/80 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE & WHY IT WORKS */}
      <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF4500]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                <BrainCircuit size={16} className="text-[#FF4500]" />
                <span className="text-xs font-bold tracking-wide uppercase">AI-Powered Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Less time watching. More time deciding.</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Our AI-powered analysis provides validated scores and justification — highlighting key strengths and alignments so your team can focus where it matters most: choosing the right person.
              </p>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-[#FF4500]">Why it works</h3>
                <p className="text-white/80 leading-relaxed">
                  The best answers come from reflection, not rushing. The right hire is often found in the depth of a thoughtful response — not the chaos of a crammed diary.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
            >
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Data Analysis" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
               
               {/* AI Overlay Mockup */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-sm text-white/90">Candidate Fit Score</span>
                    <span className="text-2xl font-black text-[#FF4500]">94%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF4500] to-[#C41E00] w-[94%] rounded-full"></div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS & WHERE IT'S USED */}
      <section className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Benefits */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-12">Key Benefits</h2>
              <div className="space-y-6">
                {[
                  { title: "Eliminate scheduling chaos", desc: "No back-and-forth. No calendar conflicts." },
                  { title: "Authentic insight", desc: "Candidates are composed, prepared, and genuine." },
                  { title: "Decisive speed", desc: "AI-assisted scoring accelerates your review." },
                  { title: "Forward progress", desc: "Your process never stalls waiting for a slot." },
                  { title: "Remote-ready", desc: "Hire across time zones without coordination overhead." }
                ].map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl hover:bg-[#FAFAFA] transition-colors border border-transparent hover:border-[#5A5B5E]/5"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 size={24} className="text-[#FF4500]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1A1A1A] mb-1">{benefit.title}</h4>
                      <p className="text-[#5A5B5E]/70">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Where it's used */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAFAFA] rounded-[32px] p-8 sm:p-10 border border-[#5A5B5E]/10 h-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#5A5B5E]/10 shadow-sm mb-8 text-[#FF4500] font-bold">
                  <Globe2 size={20} />
                  <span>Where it's used</span>
                </div>
                
                <div className="space-y-8">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex gap-4">
                    <Users size={24} className="text-[#5A5B5E]/40 flex-shrink-0" />
                    <p className="text-lg font-medium text-[#1A1A1A]">High-volume hiring where multiple candidates need fast screening</p>
                  </motion.div>
                  <div className="h-px w-full bg-[#5A5B5E]/10"></div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex gap-4">
                    <Target size={24} className="text-[#5A5B5E]/40 flex-shrink-0" />
                    <p className="text-lg font-medium text-[#1A1A1A]">First-round evaluation to reduce the burden on live interviews</p>
                  </motion.div>
                  <div className="h-px w-full bg-[#5A5B5E]/10"></div>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex gap-4">
                    <Zap size={24} className="text-[#5A5B5E]/40 flex-shrink-0" />
                    <p className="text-lg font-medium text-[#1A1A1A]">Remote and distributed hiring teams operating across time zones</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white -z-10"></div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 sm:p-20 rounded-[40px] bg-white border border-[#5A5B5E]/10 shadow-2xl shadow-[#5A5B5E]/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-[60px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C41E00]/5 rounded-full blur-[60px]"></div>

            <div className="relative z-10">
              <Sparkles size={48} className="text-[#FF4500] mx-auto mb-8 opacity-50" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] mb-8">
                Stop chasing calendars.<br/>
                <span className="text-[#5A5B5E]/40">Start meeting candidates.</span>
              </h2>
              
              <div className="flex justify-center mt-12">
                <button className="inline-flex h-16 items-center justify-center rounded-full bg-[#FF4500] px-10 text-lg font-bold text-white transition-all hover:bg-[#C41E00] hover:scale-105 hover:shadow-[0_0_40px_-10px_#FF4500]">
                  Get Started
                  <ArrowRight size={20} className="ml-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
