import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import AsyncVideoInterview from './AsyncVideoInterview';
import CustomerFeedbackPortal from './CustomerFeedbackPortal';
import CandidatePrescreening from './CandidatePrescreening';
import StartupFiltering from './StartupFiltering';
import About from './About';
import PreScreeningBlog from './PreScreeningBlog';
import OptimalCandidatePreScreeningBlog from './OptimalCandidatePreScreeningBlog';
import SimplifyingLimitedKYCBlog from './SimplifyingLimitedKYCBlog';
import { 
  ArrowRight, 
  Play, 
  Menu, 
  X,
  ChevronDown,
  Users,
  MessageSquare,
  FileSearch,
  Rocket,
  Eye,
  BarChart3,
  Zap,
  BrainCircuit,
  Mail,
  Phone,
  Sparkles
} from 'lucide-react';
import logoImg from "../imports/logo-1.png";

// -- Content Data from PDF --

const PRODUCTS = [
  {
    title: "Async Video Interview",
    description: "Stop chasing calendars. Let candidates record thoughtful responses on their schedule — and let AI surface the best ones on yours.",
    for: "Hiring teams, recruiters, HR",
    icon: Users,
    colSpan: "md:col-span-8",
  },
  {
    title: "Customer Feedback",
    description: "Your happiest customers have a story to tell. Give them a quiet, simple way to tell it.",
    for: "Marketing, Sales",
    icon: MessageSquare,
    colSpan: "md:col-span-4",
  },
  {
    title: "Candidate Prescreening",
    description: "Three intelligent layers — resume fit, question analysis, and a one-minute video.",
    for: "High-volume hiring",
    icon: FileSearch,
    colSpan: "md:col-span-4",
  },
  {
    title: "Startup Application Filtering",
    description: "Screen 100+ startups in hours. Our AI evaluates pitch videos and scores applications against your thesis.",
    for: "VCs, Angel Investors",
    icon: Rocket,
    colSpan: "md:col-span-8",
  }
];

const PILLARS = [
  {
    title: "Clarity",
    description: "Know not just if someone fits, but why they do.",
    icon: Eye,
  },
  {
    title: "Scale",
    description: "Process hundreds of applications or responses without losing the human signal.",
    icon: BarChart3,
  },
  {
    title: "Speed",
    description: "Cut scheduling, eliminate back-and-forth, and move from evaluation to decision faster.",
    icon: Zap,
  }
];

const STATS = [
  { value: "70%", label: "faster progression from screening to term sheet" },
  { value: "80%", label: "reduction in time-to-shortlist" },
  { value: "20 min", label: "is all it takes for a customer to share their story" },
  { value: "Zero", label: "scheduling required — for any of it" }
];

const TARGET_AUDIENCES = [
  "MARKETING TEAMS",
  "HR LEADERS",
  "CORPORATE VENTURES",
  "TALENT RECRUITERS",
  "CUSTOMER SUCCESS",
  "HIRING TEAMS",
  "VC FIRMS",
  "ACCELERATORS"
];

const INSIGHTS_DATA = [
  {
    title: "Pre-screening - Simpler Efforts, Better Results with Asynchronous Video Solution",
    excerpt: "As we head deeper into the digital age, most domains have incorporated newer technology that has positively affected their productivity. In contrast, a niche that has experienced one of the least advances in tune with technology is the process of pre-screening.",
    date: "JUL 13, 2021",
    author: "PAUL JAI SUDHAN M",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    href: "/blog/pre-screening"
  },
  {
    title: "Pulling Off an Optimal Candidate Pre-Screening: A Deep Dive into Vidmagin's Asynchronous Video Solution",
    excerpt: "In the fast-paced world of recruitment, finding the right talent swiftly and efficiently is crucial for any organization's success. The traditional hiring process often involves time-consuming interviews..",
    date: "SEP 15, 2023",
    author: "PAUL JAI SUDHAN M",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    href: "/blog/optimal-candidate-prescreening"
  },
  {
    title: "Simplifying Limited KYC for Modern Banking with Vidmagin",
    excerpt: "In the dynamic landscape of banking and finance, the Know Your Customer (KYC) verification process stands as a vital cornerstone. As the sector races forward, traditional KYC methods have evolved into Video KYC, an innovative approach embraced by banks.",
    date: "SEP 24, 2023",
    author: "PAUL JAI SUDHAN M",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    href: "/blog/simplifying-limited-kyc"
  }
];

// -- Animations --
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

// -- Components --

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full border-b border-[#5A5B5E]/10 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Link to="/"><img src={logoImg} alt="Vidmagin Logo" className="h-9 w-auto object-contain" /></Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="group relative cursor-pointer py-2">
            <div className="flex items-center gap-1 text-[15px] font-medium text-[#5A5B5E] hover:text-[#FF4500] transition-colors">
              Platform <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-[#5A5B5E]/10 shadow-xl shadow-[#5A5B5E]/10 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
              <div className="p-2 flex flex-col">
                <Link to="/async-video-interview" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">Async Video Interview</Link>
                <Link to="/customer-feedback-portal" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">Customer Feedback Portal</Link>
                <Link to="/candidate-prescreening" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">Candidate Prescreening</Link>
                <Link to="/startup-filtering" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">Startup Filtering</Link>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer py-2">
            <div className="flex items-center gap-1 text-[15px] font-medium text-[#5A5B5E] hover:text-[#FF4500] transition-colors">
              Solutions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-[#5A5B5E]/10 shadow-xl shadow-[#5A5B5E]/10 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
              <div className="p-2 flex flex-col">
                <a href="#" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">For Hiring Teams</a>
                <a href="#" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">For VCs & Accelerators</a>
                <a href="#" className="px-4 py-3 text-[14px] font-medium text-[#5A5B5E] hover:text-[#FF4500] hover:bg-[#FAFAFA] rounded-xl transition-all">For Marketing & Sales</a>
              </div>
            </div>
          </div>
          <a href="/#insights" className="text-[15px] font-medium text-[#5A5B5E] hover:text-[#FF4500] transition-colors">Insights</a>
          <Link to="/about" className="text-[15px] font-medium text-[#5A5B5E] hover:text-[#FF4500] transition-colors">About</Link>
          <a href="#contact" className="text-[15px] font-medium text-[#5A5B5E] hover:text-[#FF4500] transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button className="text-[15px] font-semibold text-[#5A5B5E] hover:text-[#FF4500] transition-colors">Log In</button>
          <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-[#FF4500] px-6 font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_#FF4500]">
            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center gap-2">
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-[#5A5B5E]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#5A5B5E]/10 bg-white px-4 py-6 space-y-5 overflow-hidden"
          >
            <div className="space-y-4">
              <a href="#platform" className="block text-lg font-medium text-[#5A5B5E]">Platform</a>
              <div className="pl-4 border-l-2 border-[#5A5B5E]/10 space-y-3">
                <Link to="/async-video-interview" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]" onClick={() => setIsOpen(false)}>Async Video Interview</Link>
                <Link to="/customer-feedback-portal" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]" onClick={() => setIsOpen(false)}>Customer Feedback Portal</Link>
                <Link to="/candidate-prescreening" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]" onClick={() => setIsOpen(false)}>Candidate Prescreening</Link>
                <Link to="/startup-filtering" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]" onClick={() => setIsOpen(false)}>Startup Filtering</Link>
              </div>
            </div>
            <div className="space-y-4">
              <a href="#solutions" className="block text-lg font-medium text-[#5A5B5E]">Solutions</a>
              <div className="pl-4 border-l-2 border-[#5A5B5E]/10 space-y-3">
                <a href="#" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]">For Hiring Teams</a>
                <a href="#" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]">For VCs & Accelerators</a>
                <a href="#" className="block text-base font-medium text-[#5A5B5E]/80 hover:text-[#FF4500]">For Marketing & Sales</a>
              </div>
            </div>
            <a href="/#insights" className="block text-lg font-medium text-[#5A5B5E]" onClick={() => setIsOpen(false)}>Insights</a>
            <Link to="/about" className="block text-lg font-medium text-[#5A5B5E]" onClick={() => setIsOpen(false)}>About</Link>
            <a href="#contact" className="block text-lg font-medium text-[#5A5B5E]" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="pt-6 flex flex-col gap-3">
              <button className="w-full rounded-xl border-2 border-[#5A5B5E]/10 px-4 py-3 text-base font-semibold text-[#5A5B5E]">Log In</button>
              <button className="w-full rounded-xl bg-gradient-to-r from-[#FF4500] to-[#C41E00] px-4 py-3 text-base font-semibold text-white shadow-lg shadow-[#FF4500]/20">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HeroMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative w-full max-w-xl mx-auto lg:max-w-none perspective-1000"
    >
      <motion.div 
        className="relative rounded-3xl border border-white/40 bg-white/60 p-2 shadow-2xl shadow-[#FF4500]/10 backdrop-blur-2xl"
      >
        {/* Mockup Header */}
        <div className="flex items-center gap-2 px-4 pb-3 pt-3 border-b border-[#5A5B5E]/5">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF4500]/40"></div>
            <div className="h-3 w-3 rounded-full bg-[#5A5B5E]/20"></div>
            <div className="h-3 w-3 rounded-full bg-[#5A5B5E]/20"></div>
          </div>
          <div className="mx-auto rounded-full bg-white/80 px-6 py-1.5 text-[11px] font-semibold tracking-wide text-[#5A5B5E]/60 shadow-sm border border-white">
            app.vidmagin.com/eval/c-8829
          </div>
        </div>
        
        {/* Mockup Body */}
        <div className="flex h-[360px] sm:h-[460px] w-full bg-slate-50/50 rounded-b-[22px] overflow-hidden border-t border-white/50">
          {/* Video Column */}
          <div className="w-[55%] sm:w-3/5 bg-[#1A1A1A] relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3NzY4MDYyOXww&ixlib=rb-4.1.0&q=80&w=800" 
              alt="Candidate Video" 
              className="w-full h-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:mix-blend-normal"
            />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FF4500] text-white shadow-[0_0_30px_rgba(255,69,0,0.6)] backdrop-blur-md">
                <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#FF4500]"></div>
                <Play fill="currentColor" size={22} className="ml-1" />
              </div>
            </div>

            {/* Video Controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs px-2.5 py-1 rounded-md font-medium">
                  Q2: Growth from Setback
                </div>
                <div className="text-white text-xs font-bold font-mono tracking-wider">
                  01:14
                </div>
              </div>
              {/* Progress bar */}
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF4500] w-[45%] rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Sidebar Column */}
          <div className="w-[45%] sm:w-2/5 bg-white/80 backdrop-blur-xl border-l border-white p-4 sm:p-5 flex flex-col gap-5 overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-[#FF4500]/10 rounded-lg">
                  <BrainCircuit size={16} className="text-[#FF4500]" />
                </div>
                <h4 className="text-xs font-bold text-[#5A5B5E] tracking-wide">AI ANALYSIS</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] sm:text-xs font-bold text-[#5A5B5E]">Role Fit</span>
                    <span className="text-[11px] sm:text-xs font-black text-[#FF4500]">92%</span>
                  </div>
                  <div className="h-2 w-full bg-[#5A5B5E]/5 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ w: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#FF4500] to-[#C41E00] rounded-full"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] sm:text-xs font-bold text-[#5A5B5E]">Communication</span>
                    <span className="text-[11px] sm:text-xs font-black text-[#FF4500]">88%</span>
                  </div>
                  <div className="h-2 w-full bg-[#5A5B5E]/5 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ w: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#FF4500] to-[#C41E00] rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto bg-gradient-to-br from-[#FF4500]/5 to-[#C41E00]/5 rounded-xl p-3 sm:p-4 border border-[#FF4500]/10 shadow-[0_4px_20px_-10px_rgba(255,69,0,0.1)]">
              <div className="flex items-start gap-2 mb-2">
                <Sparkles size={14} className="text-[#FF4500] mt-0.5 shrink-0" />
                <span className="text-[11px] font-black tracking-wide text-[#C41E00] uppercase">Key Insight</span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#5A5B5E]/80 leading-relaxed font-medium">
                Candidate demonstrates strong strategic alignment and clear communication under pressure. <strong className="text-[#5A5B5E]">High potential.</strong>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Glows Behind Mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF4500]/20 rounded-full blur-[80px] mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C41E00]/20 rounded-full blur-[80px] mix-blend-multiply animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>
    </motion.div>
  );
};

export function Home() {
  return (
    <>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#5A5B5E_1px,transparent_1px)] [background-size:24px_24px] opacity-10 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl relative z-10"
              >
                <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl lg:text-[80px] font-extrabold tracking-tighter text-[#1A1A1A] leading-[1.05] mb-6">
                  Clarity. Scale. <br/>
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">Speed.</span>
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#FF4500]/20 -z-10 rounded-full blur-sm"></div>
                  </span>
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-xl sm:text-2xl font-medium text-[#5A5B5E] mb-10 leading-snug">
                  The intelligent video platform that transforms how you hire, evaluate, and hear from the people who matter most.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#1A1A1A] px-8 font-semibold text-white transition-all hover:bg-[#2A2A2A] hover:scale-[1.02] hover:shadow-xl">
                    <span className="relative flex items-center gap-2">
                      Explore the Platform
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  <button className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-semibold text-[#1A1A1A] transition-all hover:bg-gray-50 border border-[#5A5B5E]/10 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    Talk to Sales
                  </button>
                </motion.div>

                {/* Trusted By snippet */}
                <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-[#5A5B5E]/10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img className="h-10 w-10 rounded-full border-2 border-[#FAFAFA] object-cover" src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?auto=format&fit=crop&w=100&q=80" alt="Avatar"/>
                    <img className="h-10 w-10 rounded-full border-2 border-[#FAFAFA] object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar"/>
                    <div className="h-10 w-10 rounded-full border-2 border-[#FAFAFA] bg-[#FF4500] flex items-center justify-center text-white text-xs font-bold">+2k</div>
                  </div>
                  <div className="text-sm font-medium text-[#5A5B5E]/70">
                    Trusted by forward-thinking teams globally
                  </div>
                </motion.div>
              </motion.div>
              
              <HeroMockup />
            </div>
          </div>
        </section>

        {/* AUDIENCE SCROLLING MARQUEE */}
        <section className="border-y border-[#5A5B5E]/10 bg-[#FAFAFA] py-12 overflow-hidden flex flex-col justify-center">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#5A5B5E]/50 uppercase">
              Built for hiring teams, VCs, accelerators & marketing
            </span>
          </div>
          <div className="relative flex overflow-hidden w-full max-w-[100vw]">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
              className="flex whitespace-nowrap items-center gap-12 sm:gap-20 pr-12 sm:pr-20"
            >
              {[...TARGET_AUDIENCES, ...TARGET_AUDIENCES].map((item, idx) => (
                <span key={idx} className="text-lg sm:text-2xl font-bold tracking-widest text-[#5A5B5E]/15 uppercase whitespace-nowrap">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID: PLATFORM OVERVIEW */}
        <section id="platform" className="py-32 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-[#FF4500]" />
                <span className="text-sm font-bold tracking-widest text-[#FF4500] uppercase">The Vidmagin Platform</span>
                <Sparkles size={16} className="text-[#FF4500]" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] mb-6">
                Two Engines. Four Products. One Platform.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-[#5A5B5E]/80">
                Vidmagin runs on two intelligent cores — the <strong className="text-[#1A1A1A]">Async Video Hub</strong> for capturing responses, and the <strong className="text-[#1A1A1A]">Intelligent Assessment Engine</strong> for surfacing the right people.
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {PRODUCTS.map((product, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative overflow-hidden rounded-[32px] bg-white border border-[#5A5B5E]/10 p-8 sm:p-10 shadow-lg shadow-[#5A5B5E]/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF4500]/10 hover:-translate-y-1 ${product.colSpan}`}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity duration-500 group-hover:opacity-10 scale-150 translate-x-1/4 -translate-y-1/4">
                    <product.icon size={200} className="text-[#FF4500]" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF4500]/10 to-[#C41E00]/5 text-[#FF4500] ring-1 ring-[#FF4500]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <product.icon size={28} />
                    </div>
                    
                    <h3 className="mb-4 text-2xl font-bold text-[#1A1A1A]">{product.title}</h3>
                    <p className="text-lg text-[#5A5B5E]/70 leading-relaxed mb-8 flex-grow">{product.description}</p>
                    
                    <div className="pt-6 border-t border-[#5A5B5E]/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#5A5B5E]/40">For</span>
                        <span className="text-sm font-bold text-[#1A1A1A]">{product.for}</span>
                      </div>
                      <ArrowRight size={18} className="text-[#FF4500] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY VIDMAGIN SECTION (Modern Side-by-Side) */}
        <section className="py-32 bg-white relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="sticky top-32">
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-tight mb-8"
                  >
                    Built for decisions, <br/>
                    <span className="text-[#5A5B5E]/40">not just data.</span>
                  </motion.h2>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-lg font-medium text-[#5A5B5E]/80"
                  >
                    <p className="text-xl text-[#1A1A1A]">Most tools give you information. Vidmagin gives you insight.</p>
                    <p>We don't just collect responses — we decode them. Our platform is built around one belief: the best decisions come from clarity, and clarity comes from seeing the person behind the profile.</p>
                    <p>Whether you're evaluating a candidate, a founder, or a customer, Vidmagin gives you the depth to decide with confidence — at speed, at scale.</p>
                  </motion.div>
                </div>
              </div>
              
              <div className="lg:col-span-7 grid gap-6">
                {PILLARS.map((pillar, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="group flex gap-6 p-8 rounded-[24px] bg-[#FAFAFA] border border-[#5A5B5E]/5 transition-all hover:bg-white hover:shadow-xl hover:shadow-[#5A5B5E]/5 hover:border-[#5A5B5E]/10"
                  >
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-2xl bg-white border border-[#5A5B5E]/10 shadow-sm flex items-center justify-center text-[#FF4500] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#FF4500] group-hover:text-white">
                        <pillar.icon size={28} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#1A1A1A] mb-3">{pillar.title}</h4>
                      <p className="text-lg text-[#5A5B5E]/70 leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PREMIUM STATS SECTION */}
        <section className="py-32 relative overflow-hidden bg-[#111111]">
          {/* Abstract Dark Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#FF4500]/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-[#C41E00]/10 rounded-full blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {STATS.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Vertical separator line for desktop */}
                  {idx !== 0 && <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>}
                  
                  <div className="text-center lg:text-left px-4">
                    <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {stat.value}
                    </h3>
                    <p className="text-lg text-[#5A5B5E]/80 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS SECTION */}
        <section id="insights" className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#5A5B5E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"></div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#5A5B5E]/10 shadow-sm mb-6">
                  <div className="h-2 w-2 rounded-full bg-[#FF4500]"></div>
                  <span className="text-xs font-bold tracking-wide text-[#5A5B5E] uppercase">Thought Leadership</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A]">
                  Ideas that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#C41E00]">elevate.</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured Post (Full Width) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-12 group relative overflow-hidden rounded-[32px] bg-[#1A1A1A] border border-[#5A5B5E]/10 shadow-2xl"
              >
                <Link to={INSIGHTS_DATA[0].href} className="absolute inset-0 z-20"><span className="sr-only">Read article</span></Link>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FF4500] via-transparent to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#C41E00] via-transparent to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12 lg:p-16 pointer-events-none">
                  <div className="flex-1 w-full space-y-6">
                    <div className="inline-flex px-3 py-1 bg-white/10 backdrop-blur-md rounded-md text-[11px] font-bold text-white uppercase tracking-widest border border-white/10">
                      Featured Insight
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-500">
                      {INSIGHTS_DATA[0].title}
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                      {INSIGHTS_DATA[0].excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-6 pt-8 mt-4 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <img src={INSIGHTS_DATA[0].avatar} alt={INSIGHTS_DATA[0].author} className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-lg" />
                        <div>
                          <div className="text-[13px] font-black tracking-wide text-white uppercase">{INSIGHTS_DATA[0].author}</div>
                          <div className="text-[11px] font-bold tracking-widest text-white/50 uppercase mt-0.5">{INSIGHTS_DATA[0].date}</div>
                        </div>
                      </div>
                      
                      <div className="h-12 w-12 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:bg-[#FF4500] group-hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Post 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-6 group relative overflow-hidden rounded-[32px] bg-[#FAFAFA] border border-[#5A5B5E]/5 p-8 sm:p-10 shadow-lg shadow-[#5A5B5E]/5 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-1 hover:border-[#5A5B5E]/10 flex flex-col h-full"
              >
                <Link to={INSIGHTS_DATA[1].href} className="absolute inset-0 z-20"><span className="sr-only">Read article</span></Link>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF4500]/10 to-transparent rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 leading-snug relative z-10">{INSIGHTS_DATA[1].title}</h3>
                <p className="text-[#5A5B5E]/70 leading-relaxed mb-8 flex-grow text-[15px] relative z-10">{INSIGHTS_DATA[1].excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-[#5A5B5E]/10 mt-auto relative z-10">
                  <div className="flex items-center gap-3">
                    <img src={INSIGHTS_DATA[1].avatar} alt={INSIGHTS_DATA[1].author} className="w-10 h-10 rounded-full object-cover border border-[#5A5B5E]/10" />
                    <div>
                      <div className="text-[11px] font-black tracking-wide text-[#1A1A1A] uppercase">{INSIGHTS_DATA[1].author}</div>
                      <div className="text-[9px] font-bold tracking-widest text-[#5A5B5E]/50 uppercase mt-0.5">{INSIGHTS_DATA[1].date}</div>
                    </div>
                  </div>
                  <div className="text-[#5A5B5E]/30 group-hover:text-[#FF4500] transition-colors duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Post 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 group relative overflow-hidden rounded-[32px] bg-[#FAFAFA] border border-[#5A5B5E]/5 p-8 sm:p-10 shadow-lg shadow-[#5A5B5E]/5 transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-1 hover:border-[#5A5B5E]/10 flex flex-col h-full"
              >
                <Link to={INSIGHTS_DATA[2].href} className="absolute inset-0 z-20"><span className="sr-only">Read article</span></Link>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C41E00]/10 to-transparent rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 leading-snug relative z-10">{INSIGHTS_DATA[2].title}</h3>
                <p className="text-[#5A5B5E]/70 leading-relaxed mb-8 flex-grow text-[15px] relative z-10">{INSIGHTS_DATA[2].excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-[#5A5B5E]/10 mt-auto relative z-10">
                  <div className="flex items-center gap-3">
                    <img src={INSIGHTS_DATA[2].avatar} alt={INSIGHTS_DATA[2].author} className="w-10 h-10 rounded-full object-cover border border-[#5A5B5E]/10" />
                    <div>
                      <div className="text-[11px] font-black tracking-wide text-[#1A1A1A] uppercase">{INSIGHTS_DATA[2].author}</div>
                      <div className="text-[9px] font-bold tracking-widest text-[#5A5B5E]/50 uppercase mt-0.5">{INSIGHTS_DATA[2].date}</div>
                    </div>
                  </div>
                  <div className="text-[#5A5B5E]/30 group-hover:text-[#FF4500] transition-colors duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white -z-10"></div>
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 sm:p-20 rounded-[40px] bg-white border border-[#5A5B5E]/10 shadow-2xl shadow-[#5A5B5E]/5 overflow-hidden"
            >
              {/* Card internal glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-[60px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C41E00]/5 rounded-full blur-[60px]"></div>

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] mb-8">
                  Ready to see people,<br/>
                  <span className="text-[#5A5B5E]/40">not just profiles?</span>
                </h2>
                <p className="text-xl text-[#5A5B5E]/80 mb-12 max-w-2xl mx-auto font-medium">
                  Whether you're hiring, investing, or building trust with customers — Vidmagin gives you the clearest view.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                  <button className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full bg-[#FF4500] px-10 text-lg font-bold text-white transition-all hover:bg-[#C41E00] hover:scale-105 hover:shadow-[0_0_40px_-10px_#FF4500]">
                    Get Started Free
                    <ArrowRight size={20} className="ml-3" />
                  </button>
                  <button className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-[#1A1A1A] border-2 border-[#5A5B5E]/10 transition-all hover:bg-[#FAFAFA] hover:border-[#1A1A1A]">
                    Book a Demo
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-base font-semibold text-[#5A5B5E]">
                  <a href="mailto:Sales@vidmagin.com" className="flex items-center gap-2.5 hover:text-[#FF4500] transition-colors bg-[#FAFAFA] px-4 py-2 rounded-full border border-[#5A5B5E]/5">
                    <Mail size={18} className="text-[#FF4500]" /> Sales@vidmagin.com
                  </a>
                  <a href="tel:+919585587990" className="flex items-center gap-2.5 hover:text-[#FF4500] transition-colors bg-[#FAFAFA] px-4 py-2 rounded-full border border-[#5A5B5E]/5">
                    <Phone size={18} className="text-[#FF4500]" /> +91 9585587990
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const metaDescriptions: Record<string, string> = {
      "/": "Vidmagin is the intelligent video platform for hiring, startup evaluation, and customer feedback — powered by async video and AI-driven assessment.",
      "/async-video-interview": "Stop scheduling interviews. Vidmagin's async video interview platform lets candidates respond on their schedule while AI surfaces the best ones for your team.",
      "/customer-feedback-portal": "Capture authentic video testimonials from customers in under 20 minutes. No studio, no editing — just a clean MP4 ready to publish.",
      "/candidate-prescreening": "Three-layer intelligent candidate screening — resume fit, question analysis, and one-minute video — reveals the right hire before the first interview.",
      "/startup-filtering": "Screen 100+ startups in hours with AI-powered scoring, founder video analysis, and smart retrieval. Built for VCs, angels, and accelerators.",
      "/about": "Vidmagin is built to bring clarity, scale, and speed to the most important evaluations — hiring, investment, and customer trust."
    };

    const description = metaDescriptions[pathname] || metaDescriptions["/"];
    
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', description);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#5A5B5E] selection:bg-[#FF4500]/20 selection:text-[#C41E00] overflow-x-hidden">
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/async-video-interview" element={<AsyncVideoInterview />} />
        <Route path="/customer-feedback-portal" element={<CustomerFeedbackPortal />} />
        <Route path="/candidate-prescreening" element={<CandidatePrescreening />} />
        <Route path="/startup-filtering" element={<StartupFiltering />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/pre-screening" element={<PreScreeningBlog />} />
        <Route path="/blog/optimal-candidate-prescreening" element={<OptimalCandidatePreScreeningBlog />} />
        <Route path="/blog/simplifying-limited-kyc" element={<SimplifyingLimitedKYCBlog />} />
      </Routes>

      {/* PREMIUM FOOTER */}
      <footer className="bg-white border-t border-[#5A5B5E]/10 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-12 mb-20">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="mb-8">
                <img src={logoImg} alt="Vidmagin" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-[#5A5B5E]/80 text-base font-medium max-w-sm mb-8 leading-relaxed">
                Built to bring clarity, scale, and speed to the most important evaluations — hiring, investment, and customer trust.
              </p>
              <div className="flex gap-4">
                <a href="#" className="h-12 w-12 rounded-2xl bg-[#FAFAFA] border border-[#5A5B5E]/5 flex items-center justify-center text-[#5A5B5E] hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-all hover:-translate-y-1">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="h-12 w-12 rounded-2xl bg-[#FAFAFA] border border-[#5A5B5E]/5 flex items-center justify-center text-[#5A5B5E] hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-all hover:-translate-y-1">
                  <span className="sr-only">Twitter</span>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-[#1A1A1A] mb-6 tracking-wide">Platform</h4>
                <ul className="space-y-4 text-[15px] font-medium text-[#5A5B5E]/80">
                  <li><Link to="/async-video-interview" className="hover:text-[#FF4500] transition-colors">Async Video Interview</Link></li>
                  <li><Link to="/customer-feedback-portal" className="hover:text-[#FF4500] transition-colors">Customer Feedback Portal</Link></li>
                  <li><Link to="/candidate-prescreening" className="hover:text-[#FF4500] transition-colors">Candidate Prescreening</Link></li>
                  <li><Link to="/startup-filtering" className="hover:text-[#FF4500] transition-colors">Startup Filtering</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#1A1A1A] mb-6 tracking-wide">Solutions</h4>
                <ul className="space-y-4 text-[15px] font-medium text-[#5A5B5E]/80">
                  <li><a href="#" className="hover:text-[#FF4500] transition-colors">For Hiring Teams</a></li>
                  <li><a href="#" className="hover:text-[#FF4500] transition-colors">For VCs & Accelerators</a></li>
                  <li><a href="#" className="hover:text-[#FF4500] transition-colors">For Marketing & Sales</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#1A1A1A] mb-6 tracking-wide">Company</h4>
                <ul className="space-y-4 text-[15px] font-medium text-[#5A5B5E]/80">
                  <li><Link to="/about" className="hover:text-[#FF4500] transition-colors">About Us</Link></li>
                  <li><a href="#" className="hover:text-[#FF4500] transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-[#FF4500] transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#5A5B5E]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[15px] font-medium text-[#5A5B5E]/60">© 2026 Vidmagin. All rights reserved.</p>
            <div className="flex gap-8 text-[15px] font-medium text-[#5A5B5E]/60">
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
