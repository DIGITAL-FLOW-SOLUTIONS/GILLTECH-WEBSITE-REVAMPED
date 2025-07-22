import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Brain, 
  Map, 
  Database, 
  Target, 
  FlaskConical, 
  BarChart3, 
  CheckCircle, 
  Star, 
  Lightbulb,
  Users,
  Trophy,
  TrendingUp
} from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function Home() {

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "15K+", label: "Happy Clients" },
    { number: "94%", label: "Success Rate" },
    { number: "330%", label: "ROI Increase" }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Use AI-driven insights and data analytics to help businesses develop forward-thinking solutions and identify market opportunities.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Map,
      title: "Digital Roadmap",
      description: "Comprehensive branding, content marketing, and audience engagement strategies that make businesses stand out in competitive markets.",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      icon: Database,
      title: "Content Intelligence",
      description: "Create personalized, authentic, and immersive brand experiences tailored to modern consumers through data-driven content strategies.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Through deep behavioral insights and data-driven targeting strategies, we ensure your message reaches the right audience at the right time.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: FlaskConical,
      title: "Innovation Labs",
      description: "Test, validate, and refine innovative concepts before market launch using advanced market intelligence and trend analysis.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Pinpoint your highest-value customer segments and anticipate where market demand is heading through advanced analytics.",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Research & Analysis",
      description: "Conduct comprehensive market research and competitive analysis to identify opportunities and validate concepts through AI-driven insights.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      number: "2",
      title: "Strategy Development",
      description: "Develop comprehensive branding and product strategies that align with market needs and business objectives for maximum impact.",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      number: "3",
      title: "Design & Prototype",
      description: "Create compelling designs and prototypes that resonate with target audiences while maintaining brand consistency and user experience.",
      gradient: "from-green-500 to-green-600"
    },
    {
      number: "4",
      title: "Testing & Validation",
      description: "Test and validate solutions through data-driven approaches, ensuring optimal performance before market launch.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "5",
      title: "Launch & Implementation",
      description: "Execute strategic launch plans with precision timing and multi-channel approaches for maximum market penetration.",
      gradient: "from-red-500 to-red-600"
    },
    {
      number: "6",
      title: "Optimize & Scale",
      description: "Continuously monitor performance and optimize strategies for sustainable growth and long-term market success.",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, TechFlow Solutions",
      content: "Gill Technologies transformed our brand strategy completely. Their AI-driven insights helped us identify new market opportunities that increased our revenue by 240%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Sarah Johnson",
      role: "Founder, EcoNutrition",
      content: "The innovation process at Gill Technologies is remarkable. They helped us launch our sustainable food product and achieve international recognition.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b74088b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "David Rodriguez",
      role: "CMO, Digital Dynamics",
      content: "Outstanding data analytics and customer insights. Their approach to digital advertising helped us reduce acquisition costs by 45% while doubling our conversion rates.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const brands = [
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    { name: "Logitech", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Logitech.png" },
    { name: "Nike", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png" },
    { name: "PepsiCo", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" },
    { name: "Chick-fil-A", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Chick-fil-A.png" },
    { name: "BritBox", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-brand-primary leading-tight mb-6">
                Transform Your <br />
                Vision With <br />
                <span className="text-brand-secondary">AI</span>
              </h1>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Build impactful brands with cutting-edge innovation and strategic insights. We help businesses tell their stories, launch new products, and engage modern consumers through AI-driven research and data intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-xl font-inter font-semibold">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern tech workspace with AI elements" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-brand-secondary rounded-2xl p-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-primary rounded-2xl p-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-gray-500 uppercase tracking-wide text-sm font-semibold mb-4">
              Trusted by Industry Leaders
            </p>
            <p className="font-inter text-gray-600 text-lg">
              Trusted by thousands of companies across 50+ countries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-spartan font-bold text-4xl text-white mb-4">Our Impact in Numbers</h2>
            <p className="font-inter text-blue-100 text-lg">Results that speak louder than words</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-poppins font-bold text-5xl lg:text-6xl text-brand-secondary mb-2">
                  {stat.number}
                </div>
                <p className="font-inter text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-4">
              Our Digital Services Drive Innovation
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto">
              We create impact-driven solutions across industries through cutting-edge technology and strategic insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-spartan font-bold text-2xl text-brand-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="font-inter font-semibold text-brand-secondary hover:text-orange-600 transition-colors duration-200 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-r from-brand-secondary to-orange-600 rounded-xl p-1 inline-block mb-6">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="font-inter font-semibold text-brand-secondary">Case Study</span>
                </div>
              </div>
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-6">
                How We Helped <br />
                <span className="text-brand-secondary">TamuBoost</span> <br />
                Increase Market Efficiency <br />
                by 264%
              </h2>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                In a bold stride toward nutrition innovation, TamuBoost Clusters earned global recognition as a Top 15 Winner at the prestigious DISH Competition 2024. These wholesome snacks are crafted with locally sourced Kenyan fruits, seeds, and spices.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-inter text-gray-700 font-medium">264% increase in market efficiency</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-inter text-gray-700 font-medium">Top 15 Winner at DISH Competition 2024</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-inter text-gray-700 font-medium">Locally sourced sustainable ingredients</span>
                </div>
              </div>
              <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                Read Full Case Study
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business meeting discussing success metrics" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute top-8 right-8 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-brand-secondary">264%</div>
                  <div className="font-inter text-sm text-gray-600">Efficiency Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-4">
              Our Innovation Process
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto">
              Dream. Build. Grow. - Our systematic approach to transforming ideas into market-leading solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${step.gradient} rounded-full w-12 h-12 flex items-center justify-center mb-6`}>
                    <span className="font-spartan font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-4">
              What Our Partners Say
            </h2>
            <p className="font-inter text-blue-100 text-lg">
              Trusted by industry leaders worldwide for innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex text-brand-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="font-inter text-white/90 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-inter font-semibold text-white">{testimonial.name}</div>
                      <div className="font-inter text-sm text-blue-100">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-secondary to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            Ready to Transform Your <br />
            Business With AI Innovation?
          </h2>
          <p className="font-inter text-orange-100 text-xl mb-10 max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies who have partnered with Gill Technologies to achieve breakthrough results. Dream. Build. Grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-brand-secondary hover:bg-gray-100 px-10 py-4 rounded-xl font-inter font-bold">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-secondary px-10 py-4 rounded-xl font-inter font-bold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/favicon.png" 
                  alt="Gill Technologies Logo" 
                  className="h-10 w-10 mr-3"
                />
                <span className="font-spartan font-bold text-2xl text-white">Gill Technologies</span>
              </div>
              <p className="font-inter text-gray-300 text-lg mb-6 max-w-md">
                Transforming innovation into market-leading solutions. We help brands build impactful experiences through AI-driven insights and strategic innovation.
              </p>
              <div className="text-brand-secondary font-inter font-semibold text-lg">Dream. Build. Grow.</div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-spartan font-bold text-lg text-white mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">AI Strategy</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Brand Strategy</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Innovation Labs</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Data Analytics</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Digital Advertising</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-spartan font-bold text-lg text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Our Team</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-inter text-gray-400 text-sm">
                © 2024 Gill Technologies. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="font-inter text-gray-400 hover:text-brand-secondary text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="font-inter text-gray-400 hover:text-brand-secondary text-sm transition-colors duration-200">Terms of Service</a>
                <a href="#" className="font-inter text-gray-400 hover:text-brand-secondary text-sm transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
