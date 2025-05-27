
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Phone, Users, Calendar, CircleDollarSign } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI voice solutions tailored for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 group">
              <Link to="/inbound">
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                    <Phone className="w-20 h-20 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Inbound Calls</h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      Human-like virtual receptionist to handle your incoming calls with perfect professionalism and efficiency.
                    </p>
                    <ul className="text-gray-400 mb-6 space-y-2">
                      <li>• 24/7 call answering</li>
                      <li>• Lead qualification</li>
                      <li>• Appointment scheduling</li>
                      <li>• Customer support</li>
                    </ul>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group">
              <Link to="/outbound">
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center overflow-hidden">
                    <img src="pexels-yankrukov-7691739.jpg" alt="Man in suit on phone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Outbound Calls</h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      Fully automate reminders, follow-ups, and proactive customer engagement campaigns.
                    </p>
                    <ul className="text-gray-400 mb-6 space-y-2">
                      <li>• Automated follow-ups</li>
                      <li>• Appointment reminders</li>
                      <li>• Sales outreach</li>
                      <li>• Customer surveys</li>
                    </ul>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="glass-card border-cyan-500/20 text-center">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Instant Response</h3>
                <p className="text-gray-400 text-sm">Never miss a call with immediate AI response</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-blue-500/20 text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Smart Scheduling</h3>
                <p className="text-gray-400 text-sm">Intelligent calendar integration and booking</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-500/20 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Lead Qualification</h3>
                <p className="text-gray-400 text-sm">Automatically qualify and score prospects</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-green-500/20 text-center">
              <CardContent className="p-6">
                <CircleDollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Sales Automation</h3>
                <p className="text-gray-400 text-sm">Automated sales processes and upselling</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild className="gradient-bg text-white px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
