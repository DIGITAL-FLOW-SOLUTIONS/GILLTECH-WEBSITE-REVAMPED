import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  ArrowRight, 
  Users, 
  Trophy, 
  Globe,
  Target,
  Brain,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Zap,
  Heart,
  Shield,
  Rocket,
  TrendingUp,
  BarChart3,
  Clock,
  Eye,
  Sparkles
} from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Glitch effect state
  const [glitching, setGlitching] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const glitchAnimation = {
    x: glitching ? [0, -2, 2, -2, 2, 0] : 0,
    textShadow: glitching 
      ? [
        "0 0 0 transparent",
        "2px 0 0 #ff6b6b, -2px 0 0 #4ecdc4",
        "-2px 0 0 #ff6b6b, 2px 0 0 #4ecdc4",
        "2px 0 0 #ff6b6b, -2px 0 0 #4ecdc4",
        "0 0 0 transparent"
      ]
      : "0 0 0 transparent",
    transition: { duration: 0.2 }
  };
  const stats = [
    { number: "30+", label: "Global Projects", description: "Successful projects worldwide" },
    { number: "92%", label: "Client Satisfaction", description: "Exceptional results delivered" },
    { number: "5,000+", label: "Solutions Deployed", description: "Innovative solutions implemented" },
    { number: "3+", label: "Years Experience", description: "Years of proven expertise" }
  ];

  const services = [
    {
      icon: Brain,
      title: "Strategic Campaign Planning",
      description: "Comprehensive strategy development using AI-powered market intelligence and consumer behavior analysis."
    },
    {
      icon: Target,
      title: "AI-Driven Advertising",
      description: "Leverage predictive analytics and machine learning to optimize campaign performance and maximize ROI."
    },
    {
      icon: Sparkles,
      title: "Brand Development & Innovation",
      description: "Create compelling brand narratives and innovative solutions that resonate with modern consumers."
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Experience",
      subtitle: "Integrity, Growth & Excellence",
      description: "Our core values drive everything we do. We believe in honest partnerships, continuous innovation, and delivering exceptional results that exceed expectations."
    },
    {
      step: "02", 
      title: "Strategy",
      subtitle: "Data-Driven Methodology",
      description: "We leverage advanced analytics and AI-powered insights to develop comprehensive strategies that are both innovative and grounded in solid market research."
    },
    {
      step: "03",
      title: "Innovation",
      subtitle: "Cutting-Edge Solutions", 
      description: "Our team combines creative thinking with the latest technology to deliver breakthrough solutions that drive sustainable growth and competitive advantage."
    }
  ];

  const team = [
    {
      name: "Strategic Leadership",
      description: "Our executive team brings decades of combined experience in AI, market research, and digital transformation across Fortune 500 companies.",
      image: "https://media.istockphoto.com/id/1287677376/photo/television-streaming-multimedia-wall-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=hXXTBGHJCJzdHrlyjV93iUOep0IYvAls4eIC4bYuNP0="
    },
    {
      name: "Innovation Experts", 
      description: "A diverse team of data scientists, strategists, and creative professionals dedicated to pushing the boundaries of what's possible.",
      image: "https://media.istockphoto.com/id/1419358775/photo/television-streaming-video-multimedia-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=ETEfAxL08FkYjtzeXa0vGBSDiaJyNbWkR2G9-5Z9gu4="
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-white"
      style={{ 
        scrollBehavior: "smooth"
      }}
    >
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      > 
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
              </motion.div>
              <span className="font-inter text-gray-700 font-semibold">About Gill Technologies</span>
            </motion.div>
            
            <motion.h1 
              className="font-spartan font-bold text-5xl lg:text-7xl text-gray-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, ...glitchAnimation }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Powerful, Lasting <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 bg-clip-text text-transparent"
                whileHover={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                Brand Impact
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="font-inter text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              At our core, we are storytellers. With Years of experience in helping brands discover their authentic voice, we've learned that true brand power comes from understanding what makes each company unique and bringing that story to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white font-inter font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                   Get a Quote
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/innovation">
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-xl font-inter font-semibold">
                    View Our Work
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  className="text-center"
                  variants={fadeInUp}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 10
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <motion.div 
                    className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="font-inter font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="font-inter text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Service Approach Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-6"
            >
              Shaping Brands <br />
              <span className="bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                Through Powerful Advertising
              </span>
            </motion.h2>
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto">
              Our strategic approach combines creativity with data-driven insights to deliver campaigns that not only capture attention but drive meaningful business results.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-50px" });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 15,
                    rotateX: 10,
                    z: 50
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </motion.div>
                      <h3 className="font-spartan font-bold text-xl text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Approach Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {approach.map((item, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  className="relative"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 10,
                    rotateX: 5
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <motion.div 
                    className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(255, 123, 77, 0.5)"
                    }}
                  >
                    {item.step}
                  </motion.div>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 pt-8">
                    <CardContent className="p-8">
                      <h3 className="font-spartan font-bold text-2xl text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <h4 className="font-inter font-semibold text-orange-600 mb-4">
                        {item.subtitle}
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Drive Media Behind <br />
              <span className="bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 bg-clip-text text-transparent">
                Every Campaign
              </span>
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in advertising, technology, and strategic consulting to deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {team.map((member, index) => (
              <div key={index} className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-spartan font-bold text-2xl mb-2">
                      {member.name}
                    </h3>
                    <p className="font-inter text-gray-200 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="font-spartan font-bold text-3xl mb-6">
                  Empowering Brands with <br />
                  Powerful Advertising <br />
                  Solutions
                </h3>
                <p className="font-inter text-orange-100 mb-8 leading-relaxed">
                  We transform creative visions into measurable business growth through strategic campaigns, innovative technology, and data-driven insights that resonate with your target audience.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-spartan font-bold text-3xl mb-1">150%</div>
                    <div className="font-inter text-sm text-white-400">Average ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="font-spartan font-bold text-3xl mb-1">85%</div>
                    <div className="font-inter text-sm text-white-400">Client Retention Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-spartan font-bold text-4xl text-gray-900 mb-8">
                Our Mission & Values
              </h2>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                We believe in the power of authentic storytelling and innovative technology to create meaningful connections between brands and their audiences. Our commitment goes beyond just delivering campaigns – we build lasting partnerships that drive sustainable growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 mt-1">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-spartan font-bold text-lg mb-2 text-gray-900">Authentic Partnerships</h3>
                    <p className="font-inter text-gray-600">Building genuine relationships based on trust, transparency, and shared success.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 mt-1">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-spartan font-bold text-lg mb-2 text-gray-900">Innovation First</h3>
                    <p className="font-inter text-gray-600">Leveraging cutting-edge technology and creative thinking to stay ahead of market trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-spartan font-bold text-lg mb-2 text-gray-900">Measurable Impact</h3>
                    <p className="font-inter text-gray-600">Delivering data-driven results that translate into real business growth and market success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl p-12 text-white text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 col-lg-12">
              <div className="bg-white rounded-2xl p-6 flex-shrink-0">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/Dish-competition-logo.png" 
                    alt="DISH Competition Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="text-center md:text-left col-lg-8">
                <h2 className="font-spartan font-bold text-4xl mb-4">
                  Proud Finalists of the DISH Competition 2024
                </h2>
                <p className="font-inter text-xl text-white-100 mb-4">
                  TamuBoost Clusters: Recognized among the top 15 innovative solutions for tackling global challenges
                </p>
                <p className="text-xl text-white-100 mb-4"> TamuBoost Clusters – A nutritious, locally sourced school snack addressing malnutrition, improving children’s health and cognitive development,  was recognized for its role in 
                  promoting healthy diets and well-being in underserved communities. </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <a href="https://youtu.be/rasf2fiNbZQ" className="font-inter font-semibold">Watch Now <ArrowRight className="inline-block ml-2 w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-orange-900 to-blue-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-6xl text-white mb-8">
            Ready to Transform <br />
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              Your Brand Story?
            </span>
          </h2>
          <p className="font-inter text-gray-300 text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Let's collaborate to create powerful advertising solutions that drive meaningful growth, build lasting connections, and establish your brand as an industry leader.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white font-inter font-bold px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
              </Link>
            <Link href="/home">
            <Button variant="outline" className="border-2 border-gray-400 text-gray-800 hover:border-white hover:text-gray-900 px-10 py-4 rounded-xl font-inter font-bold backdrop-blur-sm">
              View Case Studies
            </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}