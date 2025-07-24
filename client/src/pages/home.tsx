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
  ChevronRight,
  Users
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
    { number: "200+", label: "Projects Completed", description: "Successful AI implementations across industries", icon: CheckCircle },
    { number: "15K+", label: "Happy Clients", description: "Satisfied customers worldwide", icon: Users },
    { number: "94%", label: "Success Rate", description: "Project completion rate", icon: Trophy },
    { number: "330%", label: "ROI Increase", description: "Average return on investment", icon: TrendingUp }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Test, validate, and refine innovative concepts before market launch.",
    },
    {
      icon: Award,
      title: "Brand Experience",
      description: "Integrate digital storytelling techniques to build strong customer relationships.",
    },
    {
      icon: Shield,
      title: "Brand Strategy",
      description: "Use data-driven content strategies to amplify brand visibility and influence.",
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Performance-driven advertising campaigns with measurable ROI.",
    },
     {
      icon: Brain,
      title: "AI Strategy",
      description: "Advanced AI solutions for business transformation and competitive advantage.",
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
      name: "Senior Strategist",
      role: "PepsiCo.",
      content: "Gill Technologies’ team was available 24/7, adapting to our needs and timelines. Their flexibility and speed made our collaboration seamless.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/testimonial/pepsico.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Digital Innovation Officer",
      role: "Liberty Insurance",
      content: "We saw a 40% increase in customer engagement thanks to Gill’s data-driven marketing models. They understand how to make technology drive business results.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/testimonial/Liberty-Insurance.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4
    },
    {
      name: "Brand Manager",
      role: "Ricola Candies",
      content: "Gill Technologies helped us launch a powerful campaign that deeply resonated with our target market. The team brought energy, creativity, and results.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/testimonial/Ricola-Candies.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 5
    },
    {
      name: "Marketing Lead",
      role: "Nike China",
      content: "Their data insights and campaign execution brought a measurable uplift in our brand interaction across China. Truly professional and innovative team.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/testimonial/Nike-China.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      rating: 4
    }
  ];

  const brands = [
    { name: "Ricola", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png" },
    { name: "Logitech", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Logitech.png" },
    { name: "Burlington", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Burlington.png" },
    { name: "Adtalem", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Adtalem.png" },
    { name: "Liberty-Insurance", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Liberty-Insurance.png" },
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    { name: "Nike-China", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png" },
    { name: "pepsico", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" }
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
                Transforming Ideas into <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent"> Digital Excellence
                </span> <br />
                with AI
              </h1>              
              <p className="font-inter text-gray-600 text-xl leading-relaxed max-w-lg">
                We blend innovation, experience, and strategic thinking to create breakthrough solutions that drive your business forward in the digital age.
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
                  placeholder="Enter your business email" 
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
                  src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-second-Solution-1.avif?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Digital transformation workspace"
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-500 text-xs font-semibold">#</div>
                    <div>
                      <div className="text-blue-500 text-sm font-semibold">Innovation</div>
                      <div className="text-blue-500 text-xs">Leader</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float animation-delay-1000">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-100 rounded p-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-green-600 text-xs">Growth Rate</div>
                      <div className="text-green-600 text-lg font-bold">87%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by brands */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-inter text-gray-500 text-sm mb-8">Trusted by leading brands</p>
          <div className="relative">
            <div className="flex animate-scroll space-x-16 items-center">
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent">Impact</span> in Numbers
            </h2>
            <p className="font-inter text-gray-600 text-lg">Results that speak louder than words</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <stat.icon className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
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
              Our <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent">Digital Services</span> Drive Innovation
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
              <div className="bg-gradient-to-r from-orange-200 to-orange-200 rounded-xl p-1 inline-block mb-6">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-inter font-semibold text-orange-600">Case Study</span>
                </div>
              </div>
              
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
                How we helped 
                <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent"> BRANDS</span> <br />
                increase market efficiency 
                by <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent"> 85%</span>
              </h2>
              
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                By intergrating AI-driven insights and leading digital transformation strategies, we empowered multiple brands to streamline operations, make smarter decisions, and scale faster in dynamic markets.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Achieved a 85% boost in overall operational efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Cut process delays by over 50% across industries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Elevated customer satisfaction rates to as high as 95%</span>
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
                  src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/ilustration/Frame%20214.avif?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Brands case study"
                  className="rounded-xl shadow-lg w-full h-auto hover:rotate-1 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-orange-500">85%</div>
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
              Our <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent">Innovation</span> Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500"></div>
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
              What Our <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent">Partners</span> Say
            </h2>
            <p className="font-inter text-gray-300 text-lg">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{transform: `translateX(-${currentTestimonial * 100}%)`}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
                    <CardContent className="p-12">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                        ))}
                      </div>
                      
                      <p className="font-inter text-white text-xl leading-relaxed mb-8 text-center">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-inter font-semibold text-white text-lg">
                            {testimonial.name}
                          </div>
                          <div className="font-inter text-gray-300">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
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
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Main CTA */}
            <div className="text-white">
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl mb-6 leading-tight">
                Ready to Transform Your Business with Advanced Insights?
              </h2>
              <p className="font-inter text-orange-100 text-lg mb-8 leading-relaxed">
                Get your free, no-obligation consultation and discover how we can accelerate your digital innovation journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-lg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-inter font-semibold transition-all duration-300">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            {/* Right side - What's Included */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-spartan font-bold text-2xl text-white mb-6">
                What's Included in Your Consultation:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-white">Digital Assessment</div>
                    <p className="font-inter text-white/80 text-sm">A comprehensive review of your current technology landscape.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-white">Market Analysis</div>
                    <p className="font-inter text-white/80 text-sm">See how you compare to industry leaders and competitors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-white">Innovation Opportunities</div>
                    <p className="font-inter text-white/80 text-sm">Discover untapped technology opportunities for your business.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-white">Strategic Roadmap</div>
                    <p className="font-inter text-white/80 text-sm">Get a tailored action plan to accelerate your digital transformation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}