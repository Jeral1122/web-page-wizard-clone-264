import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Calendar, Users, BarChart, Database, Rocket, Clock, DollarSign, MessageSquare, Mic, Brain, Shield, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section with Background Gradient */}
      <section id="home" className="relative z-0 pt-24 pb-20 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Gradient Effects */}
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />

          {/* Main glow */}
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-cyan-500/60 opacity-80 blur-3xl" />

          {/* Lamp effect */}
          <motion.div initial={{
          width: "8rem"
        }} viewport={{
          once: true
        }} transition={{
          ease: "easeInOut",
          delay: 0.3,
          duration: 0.8
        }} whileInView={{
          width: "16rem"
        }} className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-cyan-400/60 blur-2xl" />

          {/* Top line */}
          <motion.div initial={{
          width: "15rem"
        }} viewport={{
          once: true
        }} transition={{
          ease: "easeInOut",
          delay: 0.3,
          duration: 0.8
        }} whileInView={{
          width: "30rem"
        }} className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-cyan-400/60" />

          {/* Left gradient cone */}
          <motion.div initial={{
          opacity: 0.5,
          width: "15rem"
        }} whileInView={{
          opacity: 1,
          width: "30rem"
        }} transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }} style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
        }} className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]">
            <div className="absolute w-[100%] left-0 bg-slate-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-slate-900 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Right gradient cone */}
          <motion.div initial={{
          opacity: 0.5,
          width: "15rem"
        }} whileInView={{
          opacity: 1,
          width: "30rem"
        }} transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }} style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
        }} className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500/60 [--conic-position:from_290deg_at_center_top]">
            <div className="absolute w-40 h-[100%] right-0 bg-slate-900 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-slate-900 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>

        {/* Hero Content - Moved up with reduced top margin */}
        <div className="relative z-50 max-w-7xl mx-auto text-center flex-1 flex flex-col justify-center mt-8">
          <h1 className="text-5xl mb-8 animate-fade-in text-center md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Voice Facilitators That Sell, Book, and Handle Business —
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              So You Don't Have To
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Our custom-trained AI Voice Facilitators answer calls, qualify leads, and book appointments — 24/7, with perfect memory and zero burnout. Trusted by growth-focused businesses who want real results, not hype.
          </p>
          
          <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-3 text-base font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-scale-in w-fit mx-auto" style={{
          animationDelay: '0.4s'
        }}>
            <a href="#contact">Book a Call</a>
          </Button>
        </div>
      </section>

      {/* What are AI Voice Agents Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-12"
          >
            What are AI Voice Agents?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                AI voice agents are computer programs that can talk and listen like a human using artificial intelligence. They understand spoken words, process the information, and respond in a natural way. You can find them in virtual assistants like Siri or Alexa, customer service bots, and even call centers. These voice agents help automate tasks, answer questions, and make communication easier.
              </p>
              
              <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                <Link to="/demo" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-900" />
                  Try our demo
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 p-8 rounded-2xl animate-float">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">AI Voice Agent</h3>
                <p className="text-gray-400 text-center">24/7 intelligent conversations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            VOCLY AI: Your Secret Weapon for Business Growth
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-16"
          >
            Effortless Integration. Seamless Deployment.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Strategy</h3>
                  <p className="text-gray-300">
                    We map out perfect conversation flows to match your goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Data Integration</h3>
                  <p className="text-gray-300">
                    Plug in your CRM, calendars, and customer info—no dev work needed.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Deployment</h3>
                  <p className="text-gray-300">
                    Launch your AI agent across calls, SMS, and meetings in minutes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why VOCLY AI Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Why VOCLY AI?
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto"
          >
            Explore the core capabilities that set VOCLY AI apart, designed to automate tasks, engage customers, and drive growth seamlessly.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Instant Call Handling</h3>
                  <p className="text-gray-300">
                    Our agents pick up every call in real time, so you never miss a lead again.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Effortless Appointment Booking</h3>
                  <p className="text-gray-300">
                    Automate scheduling and confirmations—clients book in seconds, hassle-free.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Proactive Lead Engagement</h3>
                  <p className="text-gray-300">
                    Engage new prospects with smart, natural conversations that qualify and follow up.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">24/7 Sales & Upsell Support</h3>
                  <p className="text-gray-300">
                    Turn every call into an opportunity—AI-driven pitches and cross-sells, round-the-clock.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section id="tailored-business" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-[#2bb4f1]">Tailored For Your </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Business</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text mb-4 text-5xl font-bold text-[#2bb4f1]"
          >
            Our Services
          </motion.p>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm mb-12"
          >
            2 services
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-gradient-to-br from-cyan-600/20 to-blue-700/20 backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer rounded-2xl overflow-hidden">
                <Link to="/inbound">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-cyan-600/30 to-blue-700/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full"></div>
                      <img src="/lovable-uploads/723a4b29-4d3b-4965-be40-7be3e2b95439.png" alt="Professional man on phone call" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-4 text-[#2bb4f1]">Inbound Calls</h3>
                      <p className="text-gray-300 mb-6">
                        Human like virtual receptionist to handle your incoming calls.
                      </p>
                      <Button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full">
                        Get Started →
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-gradient-to-br from-cyan-600/20 to-blue-700/20 backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group cursor-pointer rounded-2xl overflow-hidden">
                <Link to="/outbound">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-cyan-600/30 to-blue-700/30 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full"></div>
                      <img src="/lovable-uploads/f73c5bf8-6cc5-40b4-bd88-35310f3b89d5.png" alt="Professional man on phone call" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-4 text-[#2bb4f1]">Outbound Calls</h3>
                      <p className="text-gray-300 mb-6">
                        Fully automate reminders, follow-ups & more.
                      </p>
                      <Button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full">
                        Get Started →
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in mx-0 my-[10px]"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-16 animate-fade-in"
          >
            Choose the plan that's right for you.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Starter Plan */}
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#427bf5]">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">$0.5</span>
                    <span className="text-gray-400">/min</span>
                  </div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Free Minutes</span>
                      <span className="text-white">100 mins/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Voice Agents Included</span>
                      <span className="text-white">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Integrations</span>
                      <span className="text-white">Basic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Minutes</span>
                      <span className="text-white">1,000 mins</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full mb-8 transition-all duration-300 hover:scale-105">
                    <a href="#contact">Unlock</a>
                  </Button>
                  
                  {/* Capabilities Section */}
                  <div className="border-t border-slate-700/30 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Capabilities:</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white font-semibold">English</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Voice Cloning</span>
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white font-semibold">24/7 Support</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Weekly Calls</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro Plan */}
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-purple-400/50 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative rounded-2xl group scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">$0.4</span>
                    <span className="text-gray-400">/min</span>
                  </div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Free Minutes</span>
                      <span className="text-white">400 mins/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Voice Agents Included</span>
                      <span className="text-white">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Integrations</span>
                      <span className="text-white">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Minutes</span>
                      <span className="text-white">10,000 mins</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full mb-8 transition-all duration-300 hover:scale-105">
                    <a href="#contact">Unlock</a>
                  </Button>
                  
                  {/* Capabilities Section */}
                  <div className="border-t border-slate-700/30 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Capabilities:</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white font-semibold">10 Languages</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Voice Cloning</span>
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white font-semibold">24/7 Support</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Weekly Calls</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#427bf5]">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">$0.3</span>
                    <span className="text-gray-400">/min</span>
                  </div>
                  <div className="space-y-3 mb-8 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Free Minutes</span>
                      <span className="text-white">600 mins/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Voice Agents Included</span>
                      <span className="text-white">Unlimited</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Integrations</span>
                      <span className="text-white">Custom API</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Minutes</span>
                      <span className="text-white">25,000+ mins</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-full mb-8 transition-all duration-300 hover:scale-105">
                    <a href="#contact">Contact Sales</a>
                  </Button>
                  
                  {/* Capabilities Section */}
                  <div className="border-t border-slate-700/30 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Capabilities:</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white font-semibold">42+ Languages</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Voice Cloning</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white font-semibold">24/7 Support</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Weekly Calls</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Need a custom solution? Let's talk about your specific requirements.
            </p>
            <Button asChild className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
              <a href="#contact">Contact Sales Team</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            The Technology Behind Our AI Voices
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto"
          >
            Our AI Assistant uses the most advanced speech technologies to enable hyper-realistic conversations that are indistinguishable from the real thing.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Neural Text-to-Speech</h3>
                  <p className="text-gray-300">
                    Advanced neural networks generate human-sounding voices with natural intonation and emotion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Automatic Speech Recognition</h3>
                  <p className="text-gray-300">
                    Accurate speech recognition that performs excellently even in noisy environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Natural Language Understanding</h3>
                  <p className="text-gray-300">
                    Understands the context and intent of conversations, including nuances and implied meanings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-left">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Conversational AI</h3>
                  <p className="text-gray-300">
                    Engage in natural conversations with dynamic responses and context awareness.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Moved above FAQ */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-16"
          >
            Let's Connect
          </motion.h2>
          
          {/* Calendly Widget */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="calendly-inline-widget" data-url="https://calendly.com/muhammadjeralkhan/new-meeting" style={{
            minWidth: '320px',
            height: '700px'
          }}></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Moved below Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-16 text-center"
          >
            Common Questions
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                <AccordionItem value="item-1" className="bg-slate-800/30 backdrop-blur-lg border border-cyan-400/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    What can VOCLY AI actually do?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    VOCLY AI can handle inbound calls, qualify leads, book appointments, conduct outbound sales calls, follow up with prospects, and integrate with your existing CRM systems. Our AI agents work 24/7 with perfect memory and consistent performance.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                <AccordionItem value="item-2" className="bg-slate-800/30 backdrop-blur-lg border border-cyan-400/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    How is this different from other AI tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Unlike generic chatbots, VOCLY AI is specifically trained for voice conversations and sales processes. We provide custom conversation flows, seamless CRM integration, and human-like voice quality that your customers won't distinguish from real agents.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                <AccordionItem value="item-3" className="bg-slate-800/30 backdrop-blur-lg border border-cyan-400/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    Is my data secure with VOCLY AI?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and secure data handling practices. Your customer data and business information are protected with the highest security standards.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                <AccordionItem value="item-4" className="bg-slate-800/30 backdrop-blur-lg border border-cyan-400/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    What kind of support do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    We provide 24/7 technical support, dedicated account management for Enterprise clients, comprehensive onboarding, and ongoing optimization of your AI agents based on performance data.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                <AccordionItem value="item-5" className="bg-slate-800/30 backdrop-blur-lg border border-cyan-400/30 rounded-lg px-6">
                  <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-left">
                    How quickly can I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Most clients are up and running within 24-48 hours. We handle the technical setup, train the AI on your specific business needs, and provide testing before going live.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;
