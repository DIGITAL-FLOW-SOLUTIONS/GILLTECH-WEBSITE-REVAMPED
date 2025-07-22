import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  ArrowRight, 
  Brain, 
  Database, 
  Target, 
  FlaskConical, 
  BarChart3, 
  CheckCircle, 
  Star, 
  Lightbulb,
  Trophy,
  TrendingUp,
  Play,
  Shield,
  Zap,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "200+", label: "Projects Completed", description: "Successful AI implementations across industries" },
    { number: "15K+", label: "Happy Clients", description: "Satisfied customers worldwide" },
    { number: "94%", label: "Success Rate", description: "Project completion rate" },
    { number: "330%", label: "ROI Increase", description: "Average return on investment" }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Advanced AI solutions for business transformation and competitive advantage.",
    },
    {
      icon: Database,
      title: "Digital Platforms",
      description: "Scalable digital platforms for modern enterprises and growth.",
    },
    {
      icon: Shield,
      title: "Content Intelligence",
      description: "Smart content strategies that drive engagement and results.",
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Performance-driven advertising campaigns with measurable ROI.",
    },
    {
      icon: FlaskConical,
      title: "Innovation Labs",
      description: "Rapid prototyping and product development solutions.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Comprehensive business intelligence and data insights.",
    }
  ];

  const innovationSteps = [
    {
      step: "Step 1",
      title: "Discovery",
      description: "We start by understanding your business challenges and identifying opportunities for innovation.",
      icon: Lightbulb,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      step: "Step 2", 
      title: "Strategy",
      description: "Our team develops a comprehensive strategy tailored to your specific needs and market position.",
      icon: Target,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      step: "Step 3",
      title: "Development",
      description: "We build and test solutions using cutting-edge technology and best practices.",
      icon: FlaskConical,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      step: "Step 4",
      title: "Implementation",
      description: "Seamless deployment with ongoing support to ensure optimal performance.",
      icon: CheckCircle,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      step: "Step 5",
      title: "Optimization",
      description: "Continuous monitoring and improvement to maximize results and ROI.",
      icon: TrendingUp,
      gradient: "from-orange-400 to-orange-500"
    },
    {
      step: "Step 6",
      title: "Scale",
      description: "Expand successful solutions across your organization for maximum impact.",
      icon: Trophy,
      gradient: "from-orange-400 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, TechVision Inc.",
      content: "Gill Technologies completely transformed our approach to AI implementation. Their strategic insights and cutting-edge solutions helped us achieve remarkable growth and establish ourselves as industry leaders.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Founder, EcoNutrition",
      content: "Working with Gill Technologies was a game-changer. Their innovative process and dedication to excellence helped us launch our sustainable product line and achieve international recognition.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b74088b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "CMO, Digital Dynamics",
      content: "The data analytics and insights provided by Gill Technologies revolutionized our marketing approach. We saw a 45% reduction in acquisition costs while doubling our conversion rates.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "CTO, InnovateCorp",
      content: "Their technical expertise and innovative solutions helped us modernize our entire technology stack. The results exceeded all our expectations and positioned us for future growth.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    }
  ];

  const brands = [
    { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Netflix", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Adobe", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
    { name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl opacity-60 transform rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl opacity-60 transform -rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="font-spartan font-bold text-5xl lg:text-6xl text-gray-900 leading-tight">
                Transform Your <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Digital Future
                </span> <br />
                With AI
              </h1>
              
              <p className="font-inter text-gray-600 text-xl leading-relaxed max-w-lg">
                Harness advanced technology solutions, strategic insights and market intelligence to unlock your digital potential.
              </p>

              {/* Feature list */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="font-inter text-gray-700">Advanced AI-powered market intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="font-inter text-gray-700">Strategic digital transformation consulting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="font-inter text-gray-700">Data-driven innovation solutions</span>
                </div>
              </div>

              {/* Email input and button */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 font-inter"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Hero image */}
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Digital transformation workspace"
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <Brain className="w-12 h-12 text-orange-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float animation-delay-1000">
                  <BarChart3 className="w-12 h-12 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-inter text-gray-500 text-sm mb-8">Trusted by leading brands</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-gray-900 mb-4">
              Our <span className="text-orange-500">Impact</span> in Numbers
            </h2>
            <p className="font-inter text-gray-600 text-lg">Results that speak louder than words</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="font-poppins font-bold text-4xl lg:text-5xl text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <h3 className="font-inter text-gray-900 font-semibold text-lg mb-2">{stat.label}</h3>
                  <p className="font-inter text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Digital Services</span> Drive Innovation
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto">
              We create impact-driven solutions across industries through cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group hover:scale-105 border-0">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-spartan font-bold text-xl text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <button className="font-inter font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 flex items-center text-sm">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-1 inline-block mb-6">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-inter font-semibold text-orange-600">Case Study</span>
                </div>
              </div>
              
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
                How We Helped <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">HealthTech</span> <br />
                Increase Market Efficiency <br />
                by <span className="text-orange-500">264%</span>
              </h2>
              
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Through AI-powered analytics and strategic digital transformation, we helped HealthTech revolutionize their patient care system and achieve unprecedented growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-gray-700">264% increase in operational efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-gray-700">50% reduction in patient wait times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-gray-700">95% customer satisfaction rating</span>
                </div>
              </div>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="HealthTech case study"
                  className="rounded-xl shadow-lg w-full h-auto hover:rotate-1 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-orange-500">264%</div>
                <div className="text-sm text-gray-600">Efficiency Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Innovation</span> Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`}></div>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-orange-500 font-inter font-semibold text-sm mb-2">{step.step}</div>
                  <h3 className="font-spartan font-bold text-xl text-gray-900 mb-4">{step.title}</h3>
                  <p className="font-inter text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-white mb-4">
              What Our <span className="text-orange-500">Partners</span> Say
            </h2>
            <p className="font-inter text-gray-300 text-lg">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="relative">
            <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                  ))}
                </div>
                
                <p className="font-inter text-white text-xl leading-relaxed mb-8 text-center">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-inter font-semibold text-white text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="font-inter text-gray-300">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation buttons */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            What's Needed is Your Contribution!
          </h2>
          <p className="font-inter text-orange-100 text-xl mb-10 max-w-3xl mx-auto">
            Ready to Transform Your Business With AI-Powered Solutions?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-inter text-white">Digital Transformation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-inter text-white">AI Strategy Implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-inter text-white">Data Analytics Solutions</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-inter text-white">Innovation Consulting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-inter text-white">Market Intelligence</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="font-inter text-white">Business Optimization</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 font-inter bg-white/10 border-white/20 text-white placeholder-white/70"
            />
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-inter font-bold transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}