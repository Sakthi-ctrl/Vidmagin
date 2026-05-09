import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Rocket, 
  Filter, 
  Settings2, 
  Database, 
  BarChart3, 
  CheckSquare, 
  Layers, 
  BrainCircuit, 
  Search, 
  Terminal,
  Zap,
  Clock,
  TrendingUp,
  Target,
  Briefcase
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

export default function StartupFiltering() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA] font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00]">
      {/* Background Noise */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#5A5B5E_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF4500]/10 to-transparent rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#5A5B5E]/10 shadow-sm mb-8">
                <Rocket size={16} className="text-[#FF4500]" />
                <span className="text-xs font-bold tracking-widest text-[#5A5B5E] uppercase">Startup Application Filtering</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-[#1A1A1A] leading-[1.05] mb-6">
                The Intelligent Front-End for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">Deal Flow.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-2xl font-medium text-[#5A5B5E] mb-6 leading-snug">
                Screen 100+ startups in hours, not weeks.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-lg text-[#5A5B5E]/80 mb-10 leading-relaxed max-w-xl">
                Backed by objective criteria, AI-driven founder analysis, and your fund's own thesis. VCs, Angels, and Accelerators spend 70% of their fund life on administrative triage — reading mismatched decks and guessing founder potential. <br/><br/>
                <strong className="text-[#1A1A1A]">Vidmagin ends that.</strong>
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#1A1A1A] px-8 font-bold text-white transition-all hover:bg-[#2A2A2A] hover:scale-105 hover:shadow-xl">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <span className="relative flex items-center gap-2">
                    Request a Demo
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-[#FF4500]/5 rounded-[40px] transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 bg-white border border-[#5A5B5E]/10 rounded-[32px] shadow-2xl overflow-hidden flex flex-col">
                <div className="h-16 border-b border-[#5A5B5E]/10 flex items-center px-6 gap-4 bg-[#FAFAFA]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="px-4 py-1.5 bg-white border border-[#5A5B5E]/10 rounded-lg text-xs font-bold text-[#5A5B5E] flex items-center gap-2 shadow-sm">
                    <Filter size={14} className="text-[#FF4500]" />
                    Filter: Deep Tech, Pre-Seed
                  </div>
                </div>
                
                <div className="p-6 flex-1 bg-[#FAFAFA]/50 overflow-hidden relative">
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border border-[#5A5B5E]/10 rounded-2xl shadow-xl p-5 z-10 transform -rotate-2 hover:rotate-0 transition-transform">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-lg">QuantumLeap AI</h4>
                        <p className="text-xs text-[#5A5B5E] font-medium">B2B SaaS • Pre-Seed • $500K Raise</p>
                      </div>
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-black">94% MATCH</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold text-[#5A5B5E] mb-1">
                          <span>Thesis Alignment</span>
                          <span className="text-[#1A1A1A]">High</span>
                        </div>
                        <div className="h-1.5 bg-[#FAFAFA] rounded-full overflow-hidden"><div className="w-[95%] h-full bg-green-500"></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold text-[#5A5B5E] mb-1">
                          <span>Founder Conviction (Video)</span>
                          <span className="text-[#1A1A1A]">Exceptional</span>
                        </div>
                        <div className="h-1.5 bg-[#FAFAFA] rounded-full overflow-hidden"><div className="w-[98%] h-full bg-[#FF4500]"></div></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2/4 left-1/2 -translate-x-1/2 translate-y-8 w-full max-w-md bg-white border border-[#5A5B5E]/10 rounded-2xl shadow-lg p-5 z-0 transform rotate-3 opacity-60">
                     <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-[#1A1A1A] text-lg">EcoDelivery Hub</h4>
                        <p className="text-xs text-[#5A5B5E] font-medium">Consumer • Seed • $2M Raise</p>
                      </div>
                      <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-black">21% MATCH</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-bold text-[#5A5B5E] mb-1">
                          <span>Thesis Alignment</span>
                          <span className="text-[#1A1A1A]">Low</span>
                        </div>
                        <div className="h-1.5 bg-[#FAFAFA] rounded-full overflow-hidden"><div className="w-[20%] h-full bg-red-500"></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Your inbox isn't a pipeline. <br/>
                <span className="text-white/40">It's a funnel that leaks.</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                You want to invest in deep tech with defensible IP, climate solutions with unit economics, and founders with real grit.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                But you're forced to wade through 50 "AI-powered" food delivery apps, 30 pitch decks that mistake a mission for a business model, and 100 generic answers that look like they were copied from ChatGPT.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-[#FF4500] mb-8">The brutal math:</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-black text-white">500+</span>
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Applications per cycle</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full"><div className="h-full bg-white/30 w-full rounded-full"></div></div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-black text-[#FF4500]">80%</span>
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Don't fit your thesis</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full"><div className="h-full bg-gradient-to-r from-[#FF4500] to-[#C41E00] w-[80%] rounded-full"></div></div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-3xl font-black text-white">40+</span>
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Hours wasted confirming it</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full"><div className="h-full bg-white/30 w-[40%] rounded-full"></div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS & HOW IT WORKS */}
      <section className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-[#FF4500] uppercase mb-4">What It Is</h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-6 tracking-tight">
                Powered by the <br/>Intelligent Assessment Engine.
              </h3>
              <p className="text-xl text-[#5A5B5E]/80">
                Vidmagin transforms scattered startup applications into unified, comparable insight — with objective, algorithmic scoring tailored to your fund's DNA.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings2, title: "Configure", desc: "Design weighted criteria that match your investment thesis. Set the rules once." },
              { icon: Database, title: "Collect", desc: "Standardized metrics, structured answers, deck data, and a 90-sec founder video." },
              { icon: BarChart3, title: "Score", desc: "AI analyzes clarity, urgency, authenticity, and alignment — surfacing the best." },
              { icon: CheckSquare, title: "Decide", desc: "Unified profiles with side-by-side comparison. Align faster. Shortlist sooner." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#FAFAFA] border border-[#5A5B5E]/5 rounded-[24px] p-8 hover:bg-white hover:shadow-xl hover:shadow-[#5A5B5E]/5 hover:border-[#FF4500]/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FF4500] mb-6 group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white transition-all">
                  <step.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4">{step.title}</h4>
                <p className="text-[#5A5B5E]/80 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE THREE-LAYER FILTER */}
      <section className="py-32 bg-[#FAFAFA] relative border-y border-[#5A5B5E]/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">The Three-Layer Filter</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                layer: "Layer 1",
                title: "The Context Layer",
                subtitle: "Decoding the Non-Negotiables",
                desc: "Analyzes the pitch deck and team background against your hard requirements: sector, stage, traction. Instantly validates who is fundamentally qualified.",
                icon: Layers,
                color: "from-blue-500/20 to-blue-600/5",
                iconColor: "text-blue-600"
              },
              {
                layer: "Layer 2",
                title: "The Logic Layer",
                subtitle: "Decoding the Negotiables",
                desc: "Our proprietary rules engine evaluates structured answers on business model, market size, and unit economics — surfacing alignment on strategic fit and valuation expectations.",
                icon: BrainCircuit,
                color: "from-amber-500/20 to-amber-600/5",
                iconColor: "text-amber-600"
              },
              {
                layer: "Layer 3",
                title: "Predictive Potential",
                subtitle: "Decoding the Founder",
                desc: "AI-driven analysis of the mandatory 90-second video pitch. Reveals communication, presence, conviction, and passion — the earliest possible signal of founder quality.",
                icon: Target,
                color: "from-[#FF4500]/20 to-[#C41E00]/5",
                iconColor: "text-[#FF4500]"
              }
            ].map((layer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-[32px] p-8 border border-[#5A5B5E]/5 shadow-lg relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${layer.color} rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <span className="text-xs font-black tracking-widest uppercase text-[#5A5B5E]/50 mb-2 block">{layer.layer}</span>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{layer.title}</h3>
                <h4 className={`text-sm font-bold ${layer.iconColor} mb-6`}>{layer.subtitle}</h4>
                
                <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] flex items-center justify-center mb-6">
                  <layer.icon size={24} className={layer.iconColor} />
                </div>
                
                <p className="text-[#5A5B5E]/80 leading-relaxed font-medium relative z-10">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GAME CHANGER: SMART RETRIEVAL */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                <Search size={16} className="text-[#FF4500]" />
                <span className="text-xs font-bold tracking-wide uppercase text-white">The Game Changer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Ask your deal flow <br/><span className="text-[#FF4500]">in plain English.</span></h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                With ChatGPT-style smart retrieval, your entire application database becomes instantly searchable — in natural language.
              </p>
              <p className="text-lg text-white/90 font-medium italic border-l-2 border-[#FF4500] pl-4 py-1 mb-8">
                "Every data point, answer, and video insight — instantly accessible. Never lose a deal again."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-white/10 rounded-[32px] p-6 shadow-2xl relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF4500]/20 rounded-full blur-[30px]"></div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Terminal size={20} className="text-white/50" />
                <span className="font-mono text-sm font-bold text-white/70">Terminal</span>
              </div>
              
              <div className="space-y-6 font-mono text-sm">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-[#FF4500] font-bold mb-2">&gt; User</p>
                  <p className="text-white/90">Show me all SaaS startups that scored above 90% on the founder video pitch.</p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-[#FF4500] font-bold mb-2">&gt; User</p>
                  <p className="text-white/90">Find founders who mentioned Generative AI and have a technical co-founder.</p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/5 relative overflow-hidden group cursor-pointer hover:border-[#FF4500]/50 transition-colors">
                  <div className="absolute inset-0 bg-[#FF4500]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <p className="text-[#FF4500] font-bold mb-2 relative z-10">&gt; User</p>
                  <p className="text-white/90 relative z-10">Retrieve the top 5 applications for Climate Tech.</p>
                </div>
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
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-12 flex items-center gap-4">
                Why Use It
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Speed", desc: "80% reduction in time-to-shortlist. See your top 10 startups before your coffee gets cold." },
                  { icon: Layers, title: "Depth", desc: "We don't just scan keywords. We analyze the founder (video) and the business (scoring)." },
                  { icon: Database, title: "Memory", desc: "Smart retrieval means the best deal you saw three months ago is one query away." },
                  { icon: TrendingUp, title: "70% faster", desc: "Progression from screening to term sheet." }
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
                    <p className="text-[#5A5B5E]/80 text-sm leading-relaxed font-medium">{item.desc}</p>
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
                    { icon: Briefcase, title: "VCs and Angel Investors", text: "Validate founder-market fit at scale" },
                    { icon: Rocket, title: "Accelerators", text: "Curate cohorts with strategic alignment and consistency" },
                    { icon: Target, title: "Corporate Ventures", text: "Identify outliers that match your innovation goals" }
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
                      <div>
                        <h4 className="text-xl font-bold text-[#1A1A1A] mb-1">{use.title}</h4>
                        <p className="text-lg font-medium text-[#5A5B5E]/80 leading-snug">
                          {use.text}
                        </p>
                      </div>
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
            className="relative p-12 sm:p-20 rounded-[40px] bg-white border border-[#5A5B5E]/10 shadow-2xl shadow-[#5A5B5E]/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-[60px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C41E00]/5 rounded-full blur-[60px]"></div>

            <div className="relative z-10">
              <Rocket size={48} className="text-[#FF4500] mx-auto mb-8 opacity-50" />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] mb-8">
                Stop reading bad decks.<br/>
                <span className="text-[#5A5B5E]/40">Start meeting the right founders.</span>
              </h2>
              
              <div className="flex justify-center mt-12">
                <button className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-[#FF4500] px-10 text-lg font-bold text-white transition-all hover:bg-[#C41E00] hover:scale-105 hover:shadow-[0_0_40px_-10px_#FF4500]">
                  <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                  <span className="relative flex items-center gap-2">
                    Request a Demo
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
