import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquareHeart, 
  Video, 
  Megaphone,
  MonitorPlay,
  HeartHandshake,
  Mic2,
  Clock,
  Sparkles,
  Camera,
  PlaySquare,
  Users,
  CheckCircle2
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

export default function CustomerFeedbackPortal() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA] font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00]">
      {/* Background Noise */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#5A5B5E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF4500]/10 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#5A5B5E]/10 shadow-sm mb-8">
                <MessageSquareHeart size={16} className="text-[#FF4500]" />
                <span className="text-xs font-bold tracking-widest text-[#5A5B5E] uppercase">Customer Feedback Portal</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-black tracking-tighter text-[#1A1A1A] leading-[1.05] mb-8">
                People at ease speak from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">heart.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-2xl font-medium text-[#5A5B5E] mb-8 leading-snug">
                A quiet, simple way for your happy customers to tell their story — in under 20 minutes.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-[#5A5B5E]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                No studio. No crew. No nervousness. Just them, their thoughts, and a clean, ready-to-use video that's yours the moment they're done.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#1A1A1A] px-10 font-semibold text-white transition-all hover:bg-[#2A2A2A] hover:scale-[1.02] hover:shadow-xl">
                  <span className="relative flex items-center gap-2">
                    Start Collecting Testimonials
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Premium Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/20 to-transparent blur-3xl -z-10 rounded-[40px]"></div>
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-4 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 pb-4 border-b border-[#5A5B5E]/5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="mx-auto bg-[#FAFAFA] text-[#5A5B5E]/60 text-xs px-4 py-1.5 rounded-full border border-[#5A5B5E]/5">vidmagin.com/feedback/sarah-j</div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 h-[400px]">
                <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-[#111] group">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000" alt="Customer Recording" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-white font-mono text-sm tracking-widest">02:14</span>
                    <div className="w-px h-4 bg-white/20 mx-2"></div>
                    <Mic2 size={18} className="text-white" />
                  </div>
                </div>
                <div className="bg-[#FAFAFA] rounded-2xl border border-[#5A5B5E]/5 p-6 flex flex-col">
                  <h3 className="font-bold text-[#1A1A1A] mb-6">Prompts</h3>
                  <div className="space-y-4 flex-grow">
                    <div className="p-4 bg-white rounded-xl shadow-sm border-l-2 border-transparent hover:border-[#FF4500] transition-colors cursor-pointer">
                      <span className="text-xs font-bold text-[#5A5B5E]/50 mb-1 block">QUESTION 1</span>
                      <p className="text-sm font-medium text-[#1A1A1A]">What was the biggest challenge before using our platform?</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm border-l-2 border-[#FF4500] relative overflow-hidden">
                      <div className="absolute left-0 top-0 w-full h-full bg-[#FF4500]/5 pointer-events-none"></div>
                      <span className="text-xs font-bold text-[#FF4500] mb-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] animate-pulse"></div>
                        CURRENT QUESTION
                      </span>
                      <p className="text-sm font-medium text-[#1A1A1A]">When did you first realize the product was working for you?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
              Your best marketing is already out there. <br/>
              <span className="text-[#5A5B5E]/40">You just haven't captured it yet.</span>
            </h2>
            <div className="text-xl text-[#5A5B5E]/80 leading-relaxed max-w-3xl mx-auto space-y-6">
              <p>
                Your customers believe in your work. They've seen the results. They have the words. But asking for a video testimonial usually means complicated logistics, awkward scheduling, and a process that feels like a production — so it never happens.
              </p>
              <p className="font-bold text-[#1A1A1A]">
                Vidmagin changes that.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS BENTO */}
      <section className="py-32 relative bg-[#111111] overflow-hidden">
        {/* Dark Mode Accents */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="absolute -left-64 top-1/4 w-[600px] h-[600px] bg-[#C41E00]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute -right-64 bottom-1/4 w-[600px] h-[600px] bg-[#FF4500]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Step 1 & 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-7 bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Users size={120} /></div>
              <span className="text-[#FF4500] font-black text-xl mb-4 block">Step 1</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Find your storytellers.</h3>
              <p className="text-white/70 text-lg leading-relaxed relative z-10">
                Create your list of customers. Add them one by one, or upload them all at once. These are the people who believe in your work — and you're simply giving them a place to say so.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-gradient-to-br from-[#FF4500]/20 to-[#C41E00]/10 border border-[#FF4500]/20 rounded-[32px] p-8 md:p-12 relative group overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><MessageSquareHeart size={120} /></div>
              <span className="text-[#FF4500] font-black text-xl mb-4 block">Step 2</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ask what you need to hear.</h3>
              <p className="text-white/80 text-lg leading-relaxed relative z-10">
                Design your own set of questions. Build your question set once and use it for every customer whose truth you want to capture.
              </p>
            </motion.div>

            {/* Step 3, 4, 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="md:col-span-4 bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-sm"
            >
              <span className="text-[#FF4500] font-black text-xl mb-4 block">Step 3</span>
              <h3 className="text-2xl font-bold text-white mb-4">Let them prepare.</h3>
              <p className="text-white/70 leading-relaxed">
                Send the questions ahead of time. They can think, gather their thoughts, and respond when they're comfortable. The link is valid for days — no pressure, no rush.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="md:col-span-4 bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4500]/20 blur-3xl rounded-full"></div>
              <span className="text-[#FF4500] font-black text-xl mb-4 block relative z-10">Step 4</span>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">They record in their own space.</h3>
              <p className="text-white/70 leading-relaxed relative z-10">
                No lights. No crew. Just them and a simple guide. If they need a break, they pause. If they want to try again, they retake. Their story, told their way.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="md:col-span-4 bg-white border border-white/10 rounded-[32px] p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[#C41E00] font-black text-xl mb-4 block">Step 5</span>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Clean, ready-to-use video.</h3>
              <p className="text-[#5A5B5E] leading-relaxed font-medium">
                No editing. No waiting. The moment they finish, you receive a clean MP4 file — ready for your website, social media, or sales team.
              </p>
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
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-12 flex items-center gap-4">
                <Sparkles className="text-[#FF4500]" size={36} />
                Why Use It
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Camera, title: "No studio required", desc: "People speak more authentically from their own comfort zone." },
                  { icon: Clock, title: "20-minute investment", desc: "For professional-quality, highly usable testimonials." },
                  { icon: HeartHandshake, title: "Genuine customer voice", desc: "Not rehearsed, staged marketing speak." },
                  { icon: MonitorPlay, title: "Ready to publish", desc: "Clean MP4 output, instantly available for use." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-3xl bg-[#FAFAFA] border border-[#5A5B5E]/5 hover:border-[#FF4500]/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#FF4500] mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] text-lg mb-2">{item.title}</h4>
                    <p className="text-[#5A5B5E]/80 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Where It's Used */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-transparent rounded-[40px] -z-10"></div>
              <div className="p-8 sm:p-12">
                <h2 className="text-4xl font-black text-[#1A1A1A] mb-12">Where It's Used</h2>
                <div className="space-y-8">
                  {[
                    { icon: MonitorPlay, text: "Website testimonial sections and social proof pages" },
                    { icon: HeartHandshake, text: "Sales enablement — share real customer success stories with prospects" },
                    { icon: Megaphone, text: "Marketing campaigns that need authentic, human narratives" }
                  ].map((use, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="p-3 rounded-2xl bg-white border border-[#5A5B5E]/10 shadow-sm text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                        <use.icon size={24} />
                      </div>
                      <p className="text-xl font-medium text-[#1A1A1A] leading-snug pt-2">
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
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white -z-10"></div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
              <PlaySquare size={48} className="text-[#FF4500] mx-auto mb-8 opacity-80" />
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-8">
                It's that simple. No fuss.<br/>
                <span className="text-white/50">Just the real voice of your customer.</span>
              </h2>
              
              <div className="flex justify-center mt-12">
                <button className="inline-flex h-16 items-center justify-center rounded-full bg-[#FF4500] px-10 text-lg font-bold text-white transition-all hover:bg-[#C41E00] hover:scale-105 hover:shadow-[0_0_40px_-10px_#FF4500]">
                  Start Collecting Testimonials
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
