
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300">
              Choose the plan that's right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Starter Plan */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">$0.5</span>
                      <span className="text-gray-400 text-lg">/min</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Price</span>
                      <span className="text-white font-semibold">$0.5/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Free Minutes</span>
                      <span className="text-white font-semibold">100 mins/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Voice Agents Included</span>
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Integrations</span>
                      <span className="text-white font-semibold">Basic</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Monthly Minutes</span>
                      <span className="text-white font-semibold">1,000 mins</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-8 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                    <Link to="/#contact">Unlock</Link>
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-white text-lg mb-4">Capabilities:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white font-semibold">English</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Voice Cloning</span>
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white font-semibold">24/7 Support</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Weekly Calls</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pro Plan */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                    Most Popular
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-4">Pro</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">$0.4</span>
                      <span className="text-gray-400 text-lg">/min</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Price</span>
                      <span className="text-white font-semibold">$0.4/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Free Minutes</span>
                      <span className="text-white font-semibold">400 mins/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Voice Agents Included</span>
                      <span className="text-white font-semibold">5</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Integrations</span>
                      <span className="text-white font-semibold">Advanced</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Monthly Minutes</span>
                      <span className="text-white font-semibold">10,000 mins</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-8 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                    <Link to="/#contact">Unlock</Link>
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-white text-lg mb-4">Capabilities:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white font-semibold">10 Languages</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Voice Cloning</span>
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white font-semibold">24/7 Support</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Weekly Calls</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enterprise Plan */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">$0.3</span>
                      <span className="text-gray-400 text-lg">/min</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Price</span>
                      <span className="text-white font-semibold">$0.3/min</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Free Minutes</span>
                      <span className="text-white font-semibold">600 mins/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Voice Agents Included</span>
                      <span className="text-white font-semibold">Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-700/30">
                      <span className="text-gray-400">Integrations</span>
                      <span className="text-white font-semibold">Custom API</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-400">Monthly Minutes</span>
                      <span className="text-white font-semibold">25,000+ mins</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold mb-8 rounded-xl h-12 transition-all duration-300 hover:scale-105">
                    <Link to="/#contact">Contact Sales</Link>
                  </Button>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-white text-lg mb-4">Capabilities:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Languages Supported</span>
                        <span className="text-white font-semibold">42+ Languages</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Voice Cloning</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Support</span>
                        <span className="text-white font-semibold">24/7 Support</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-400">Weekly Calls</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                  Common Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Everything you need to know about VOCLY AI
                </p>
              </div>

              <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
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
                      <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
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
              </div>

              <div className="text-center animate-fade-in mt-16" style={{ animationDelay: '0.4s' }}>
                <p className="text-gray-400 mb-6">
                  Need a custom solution? Let's talk about your specific requirements.
                </p>
                <Button onClick={() => scrollToSection('contact')} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
