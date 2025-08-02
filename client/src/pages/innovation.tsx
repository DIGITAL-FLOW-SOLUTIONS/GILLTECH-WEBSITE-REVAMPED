import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  ArrowRight, 
  Lightbulb,
  TrendingUp,
  Target,
  Brain,
  FlaskConical,
  BarChart3,
  Rocket,
  Zap,
  Search,
  Users,
  CheckCircle,
  Sparkles,
  Globe,
  Award,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Innovation() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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

  const benefits = [
    {
      title: "AI & Data-Driven Strategy",
      description: "Predict market shifts and act before your competitors do.",
      icon: Brain
    },
    {
      title: "Faster Product Development Cycles",
      description: "Save time and money by quickly validating and launching the right products.",
      icon: Rocket
    },     
    {
      title: "Human-Centered Design Approach",
      description: "Build solutions that are loved by your customers and adopted easily.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
   
        
        {/* Animated background elements */}
        <div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl opacity-60 transform rotate-12 z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        ></div>
        <div 
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl opacity-60 transform -rotate-12 z-10"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(-12deg)` }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center mb-6 group">
                <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-inter text-orange-500 font-semibold tracking-wide">INNOVATION</span>
              </div>
              
              <h1 className="font-spartan font-bold text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Helping Brands Grow with  <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse">Innovative Solutions</span>
              </h1>
              
              <p className="font-inter text-gray-600 text-xl leading-relaxed max-w-lg mb-8">
                We identify gaps and trends using advanced market research and competitive analysis. Our approach empowers you to stay ahead of the curve.
              </p>             

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  Start Your Innovation Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-md">
                  Get a Quote
                </Button>
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1681398576587-4553857e4f3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                    alt="Innovation and technology" 
                    className="rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating animated icons */}
                  <div className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl p-3 shadow-lg animate-bounce">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-2xl p-3 shadow-lg animate-pulse">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-orange-500 mr-2" />
              <span className="font-inter text-orange-500 font-semibold">OUR PROCESS</span>
            </div>
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              How We Drive <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Innovation</span>
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach transforms ideas into market-ready solutions through proven methodologies and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Research & Analysis",
                description: "Deep market research and competitive analysis to identify opportunities and gaps in your industry.",
                icon: Search,
                color: "blue"
              },
              {
                number: "02", 
                title: "Strategy Development",
                description: "Create comprehensive innovation strategies tailored to your business goals and market position.",
                icon: Target,
                color: "blue"
              },
              {
                number: "03",
                title: "Rapid Prototyping",
                description: "Build and test prototypes quickly to validate concepts before full development investment.",
                icon: FlaskConical,
                color: "blue"
              },
              {
                number: "04",
                title: "AI Integration",
                description: "Leverage artificial intelligence and machine learning to enhance your innovation capabilities.",
                icon: Brain,
                color: "blue"
              },
              {
                number: "05",
                title: "Testing & Validation", 
                description: "Rigorous testing and validation processes to ensure market readiness and user acceptance.",
                icon: CheckCircle,
                color: "blue"
              },
              {
                number: "06",
                title: "Launch & Scale",
                description: "Strategic launch execution and scaling support to maximize market impact and growth.",
                icon: TrendingUp,
                color: "blue"
              }
            ].map((step, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <step.icon className={`w-6 h-6 text-${step.color}-500`} />
                    </div>
                    <span className={`ml-4 text-2xl font-bold text-${step.color}-500 opacity-50`}>{step.number}</span>
                  </div>
                  <h3 className="font-spartan font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${step.color}-400 to-${step.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-inter text-blue-500 font-semibold">PROVEN RESULTS</span>
              </div>
              
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
                Why Choose Our <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Innovation</span> Approach
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-spartan font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 mt-4">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Innovation workspace" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="AI workspace" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Team collaboration" 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Technology innovation" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating animated elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Glitch Effect */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full mb-8">
              <Zap className="w-5 h-5 text-white mr-2" />
              <span className="font-inter text-white font-semibold">READY TO INNOVATE?</span>
            </div>
            
            <h2 className="font-spartan font-bold text-5xl lg:text-6xl mb-6 glitch-effect">
              Let's Build the <span className="tilt-effect inline-block">Future</span> Together
            </h2>
            
            <p className="font-inter text-xl text-white text-opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business with cutting-edge innovation strategies. Join over 200+ companies who trust us to drive their digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 font-inter font-bold px-12 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl group">
                Start Your Innovation Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <div className="flex items-center space-x-6 text-white text-opacity-90">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-inter">Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span className="font-inter">Global Reach</span>
                </div>
              </div>
            </div>
            
            {/* Stats with animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: "200+", label: "Projects" },
                { number: "50+", label: "Countries" },
                { number: "94%", label: "Success Rate" },
                { number: "85%", label: "ROI Increase" }
              ].map((stat, index) => (
                <div key={index} className="text-center fade-in-scale">
                  <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-white text-opacity-80 font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white bg-opacity-10 rounded-2xl transform rotate-45 animate-pulse"></div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full mb-8">
            <Award className="w-5 h-5 text-gray-500 mr-2" />
            <span className="font-inter text-gray-500 font-semibold">TRUSTED GLOBALLY</span>
          </div>
          <h3 className="font-spartan font-bold text-3xl text-gray-900 mb-4">
            Trusted by <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse">1000+</span> companies across <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse">50+</span> countries
          </h3>
          <p className="font-inter text-gray-600 mb-12 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, organizations worldwide choose us to drive their innovation initiatives.
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16 items-center">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group">
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group">
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prototyping Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Developing and Testing Product Ideas
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Real Innovation Is Built, Not Just Imagined. At Gill Technologies we build, test, and iterate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1682145934698-5922e583b462?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Prototyping workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-secondary rounded-2xl p-4 shadow-lg">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-spartan font-bold text-2xl text-brand-primary mb-6">
                Prototyping: Turning ideas into tangible experiences
              </h3>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                Before you commit resources to a full launch, we help you iterate quickly and inexpensively. Through rapid prototyping—whether low-fidelity mockups, functional proofs of concept, or interactive simulations—you can test assumptions, gather user feedback, and refine features.
              </p>             
              <div className="bg-brand-primary rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <Users className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-inter text-white italic text-lg mb-2">
                      "By embracing prototyping early, we save clients time, reduce investment risk, and improve market fit before the full launch."
                    </p>
                    <p className="font-inter text-blue-100 font-semibold">Brian Gillo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-blue mb-6">
            Ready to Lead with <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Innovation </span>?</h2>
          <p className="font-inter text-gray-600 text-xl mb-10 max-w-3xl mx-auto">
            Get in Touch for Innovation Solutions and transform your business with cutting-edge technology and strategic insights.
          </p>
          <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-10 py-4 rounded-xl font-inter font-bold">
            Let's Talk Innovation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}