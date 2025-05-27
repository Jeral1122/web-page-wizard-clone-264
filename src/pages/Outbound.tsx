import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Phone, Users, Calendar, Target, CheckCircle, Check, Mail, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Outbound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Animation variants
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
              variants={fadeUpVariants}
            >
              Outbound Calls
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={fadeUpVariants}
            >
              Fully automate reminders, follow-ups, and proactive customer engagement campaigns with intelligent AI calling.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-3xl font-bold text-white mb-6"
                variants={fadeUpVariants}
              >
                Proactive Customer Engagement
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                variants={fadeUpVariants}
              >
                Transform your customer outreach with AI-powered calling that feels natural and personal. 
                From appointment reminders to sales follow-ups, reach every customer at the right time.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-8"
                variants={fadeUpVariants}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Automated appointment reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Personalized follow-up campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Lead nurturing sequences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Customer satisfaction surveys</span>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpVariants}>
                <Button onClick={() => scrollToSection('contact')} className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="glass-card border-purple-500/20 p-8 animate-float">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Outreach</h3>
                  <p className="text-gray-300">Targeted, timely, and totally automated</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: Calendar, title: "Appointment Reminders", desc: "Reduce no-shows with timely, friendly reminders", color: "purple" },
              { icon: Phone, title: "Sales Follow-ups", desc: "Automated follow-up sequences that convert", color: "blue" },
              { icon: Users, title: "Customer Surveys", desc: "Gather feedback and improve satisfaction", color: "cyan" },
              { icon: Target, title: "Lead Nurturing", desc: "Convert prospects with strategic touchpoints", color: "green" }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className={`glass-card border-${feature.color}-500/20 text-center hover:scale-105 transition-all duration-300`}>
                  <CardContent className="p-6">
                    <feature.icon className={`w-12 h-12 text-${feature.color}-400 mx-auto mb-4`} />
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Campaign Types */}
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-12"
              variants={fadeUpVariants}
            >
              Campaign Types
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeUpVariants}>
                <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <CardContent className="p-8 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Reminder Campaigns</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Appointment confirmations</li>
                      <li>• Payment due dates</li>
                      <li>• Renewal notifications</li>
                      <li>• Event reminders</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeUpVariants}>
                <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <CardContent className="p-8 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Sales Campaigns</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Lead qualification calls</li>
                      <li>• Follow-up sequences</li>
                      <li>• Upselling opportunities</li>
                      <li>• Win-back campaigns</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl font-bold gradient-text mb-12"
              variants={fadeUpVariants}
            >
              How Outbound Works
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Setup Campaign", desc: "Define your target list and message", color: "purple" },
                { step: "2", title: "Schedule Calls", desc: "AI calls at optimal times", color: "blue" },
                { step: "3", title: "Natural Conversation", desc: "Personalized, context-aware dialogue", color: "cyan" },
                { step: "4", title: "Track Results", desc: "Monitor performance and optimize", color: "green" }
              ].map((item, index) => (
                <motion.div key={index} className="text-center" variants={fadeUpVariants}>
                  <div className={`w-16 h-16 bg-${item.color}-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <section id="faq" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16 animate-fade-in"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold gradient-text mb-6"
                  variants={fadeUpVariants}
                >
                  Common Questions
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300"
                  variants={fadeUpVariants}
                >
                  Everything you need to know about VOCLY AI
                </motion.p>
              </motion.div>

              <motion.div 
                className="max-w-4xl mx-auto animate-fade-in" 
                style={{
                  animationDelay: '0.1s'
                }}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Accordion type="single" collapsible className="space-y-6">
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        What can VOCLY AI actually do?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        VOCLY AI can handle inbound calls, make outbound calls for appointments and follow-ups, 
                        qualify leads, book appointments, and provide 24/7 customer service with human-like conversation capabilities.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-2" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        How is this different from other AI tools?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Unlike text-based AI tools, VOCLY AI specializes in voice interactions with natural conversation flow, 
                        real-time responses, and integration with your existing business systems for seamless operations.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-3" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold transition-colors text-slate-50">
                        Is my data secure with VOCLY AI?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Yes, we use enterprise-grade encryption and security protocols. All call data is stored securely 
                        and you maintain full control over your customer information.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-4" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        What kind of support do you offer?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        We provide 24/7 technical support, dedicated account managers for enterprise clients, 
                        and comprehensive onboarding to ensure successful implementation.
                      </AccordionContent>
                    </AccordionItem>
                  </div>

                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <AccordionItem value="item-5" className="border-none">
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                        How quickly can I get started?
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gray-300 text-lg leading-relaxed">
                        Most clients can be up and running within 24-48 hours. Our team handles the setup and 
                        integration with your existing systems.
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </Accordion>
              </motion.div>

              {/* Custom Solution CTA - Removed background */}
              <motion.div 
                className="text-center animate-fade-in mt-16" 
                style={{
                  animationDelay: '0.4s'
                }}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl text-gray-300 mb-8">
                    Need a custom solution? Let's talk about your specific requirements.
                  </p>
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    className="gradient-bg text-white px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Contact Sales Team
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Outbound;
