import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Eye,
  Heart,
  Lightbulb,
  Target,
  Award,
  Globe,
  Palette,
  Brain,
  Rocket,
  Star,
  ChevronDown,
  Plus,
  Minus,
  Mail,
  Phone,
  Sparkles,
  Smartphone,
  Monitor,
  Headphones,
  Zap
} from "lucide-react";

export default function BrandExperience() {
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
      setTimeout(() => setGlitching(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const glitchAnimation = {
    x: glitching ? [0, -3, 3, -2, 2, 0] : 0,
    textShadow: glitching 
      ? [
        "0 0 0 transparent",
        "3px 0 0 #ff7849, -3px 0 0 #1e40af",
        "-3px 0 0 #ff7849, 3px 0 0 #1e40af",
        "3px 0 0 #ff7849, -3px 0 0 #1e40af",
        "0 0 0 transparent"
      ]
      : "0 0 0 transparent",
    transition: { duration: 0.15 }
  };

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "We begin with comprehensive research to understand your market, competitors, and target audience, uncovering unique opportunities for your brand experience strategy."
    },
    {
      step: "2", 
      title: "Conceptualization",
      description: "Our creative team develops innovative experience concepts that align with your brand vision and create meaningful emotional connections with your audience."
    },
    {
      step: "3",
      title: "Build the System",
      description: "We implement cohesive brand experience systems that deliver consistent, memorable interactions across all customer touchpoints and channels."
    }
  ];

  const differentiators = [
    {
      title: "Strategic Storytelling",
      description: "We craft compelling brand narratives that resonate deeply with your audience, creating authentic emotional connections that drive loyalty and engagement.",
      icon: Lightbulb
    },
    {
      title: "System Thinking",
      description: "Our holistic approach ensures every brand experience element works together harmoniously, creating seamless journeys that amplify your brand's impact.",
      icon: Brain
    },
    {
      title: "Digital Innovation",
      description: "We leverage cutting-edge technology and digital platforms to bring your brand experience to life across all channels with precision and creativity.",
      icon: Rocket
    }
  ];

  const brandHighlights = [
    {
      title: "Brand Strategy",
      description: "Comprehensive brand positioning and strategic experience planning",
      icon: CheckCircle,
      color: "from-orange-100 to-orange-200",
      iconColor: "text-orange-600"
    },
    {
      title: "Visual Experience", 
      description: "Distinctive visual systems and immersive brand environments",
      icon: CheckCircle,
      color: "from-blue-100 to-blue-200", 
      iconColor: "text-blue-600"
    },
    {
      title: "Customer Journey",
      description: "Seamless experiences across all customer touchpoints and interactions",
      icon: CheckCircle,
      color: "from-orange-100 to-blue-200",
      iconColor: "text-orange-600"
    }
  ];

   const benefits = [
    {
      title: "Deeper Engagement",
      description: "Interactive experiences increase dwell time by an average of 60%.",
      icon: Eye
    },
    {
      title: "Stronger Loyalty",
      description: "Personalized journeys foster emotional bonds, boosting repeat purchase rates by up to 35%.",
      icon: Heart
    },
    {
      title: "Data-Backed Optimization",
      description: "Real-time analytics let you pivot mid-campaign—maximizing ROI and reducing wasted budget.",
      icon: Target
    },
    {
      title: "Cross-Channel Consistency",
      description: "Seamless handoffs between in-store, mobile, and web interactions create unified brand impressions.",
      icon: Globe
    },
    {
      title: "Scalable Impact",
      description: "From local activations to global rollouts, our modular frameworks adapt to any budget and geography.",
      icon: Zap
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-white"
      style={{ 
        scrollBehavior: "smooth"
      }}
    >
      <Navigation />

      {/* Hero Section - Dark with Brand Experience theme */}
      <motion.section 
        className="bg-white py-20 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background decorative elements with parallax */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{ y: backgroundY }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full blur-3xl"
          style={{ y: textY }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              
               <div className="flex items-center mb-6 group">
                <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-inter text-orange-500 font-semibold tracking-wide">Brand Experience</span>
              </div>

              <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-gray-900">
              Brand Experiences That Resonate with <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Modern Consumers</span> 
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Transform your brand identity with innovative experience solutions that capture attention, build trust, and drive meaningful engagement across all touchpoints.          
                  </p>

               <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                whileHover={{ 
                                  scale: 1.05,
                                  rotateY: 5,
                                  rotateX: 5
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Link href="/contact">
                                  <Button 
                                    className="bg-gradient-to-r from-orange-500 to-blue-500 text-white hover:from-orange-600 hover:to-blue-600 px-8 py-4 rounded-xl font-inter font-bold transition-all duration-300"
                                    data-testid="button-get-started"
                                  >
                                    Get Started
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                whileHover={{ 
                                  scale: 1.05,
                                  rotateY: 5,
                                  rotateX: 5
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-md">
                    Get a Quote
                  </Button>
                </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.02
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div 
                className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
                whileHover={{
                  boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
                  borderColor: "rgba(255, 120, 73, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="https://media.istockphoto.com/id/961236600/photo/customer-diagram-on-blackboard.jpg?s=612x612&w=0&k=20&c=Fjt3U47jHMaWq_vWprJ5uIK43vyUotmOTyEko-gbxt0=" 
                  alt="Brand design workspace with creative materials and design tools" 
                  className="rounded-xl w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full p-3 shadow-lg"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(255, 120, 73, 0.6)"
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Branding That Demands Attention Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
            Branding That Demands Attention
          </h2>
          <p className="font-inter text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Our strategic approach to brand experience combines creativity with data-driven insights to create memorable journeys that resonate with your audience. We don't just design touchpoints—we craft complete brand ecosystems that tell your story across every customer interaction.
          </p>
           </div>
          {/* Key Brand Highlights */}
         <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1652736719079-b12b89b8ffa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJhbmRpbmclMjBUaGF0JTIwRGVtYW5kcyUyMEF0dGVudGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Premium brand product showcase featuring creative design elements" 
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            
            {/* Floating brand indicators */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="font-inter text-white text-sm font-medium">✓ Design Thinking</span>
            </div>
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="font-inter text-white text-sm font-medium">✓ Brand Experience</span>
            </div>
            <div className="absolute bottom-16 right-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="font-inter text-white text-sm font-medium">✓ Digital Integration</span>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-spartan font-bold text-2xl mb-2">
                Premium Brand Excellence
              </h3>
              <p className="font-inter text-gray-200">
                Crafting distinctive brand experiences that stand out in competitive markets
              </p>
            </div>
          </div>
        </div>       
      </motion.section>


       {/* Brand Experience Section */}
            <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="font-spartan font-bold text-4xl text-gray-900 mb-8">
                      Brand Experience
                    </h2>
                    <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                      We believe branding should be more than a visual—it should be a multi-sensory journey that lives in the mind long after the moment has passed. By weaving in sensory integration—from evocative soundscapes and subtle haptic feedback to dynamic visuals—we engage audiences on every level.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="bg-orange-600 rounded-full p-2 mr-3">
                          <Headphones className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-inter text-sm">Multi-Sensory</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-600 rounded-full p-2 mr-3">
                          <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-inter text-sm">AI-Driven</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                      alt="Immersive brand experience" 
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 shadow-lg">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>      

     
      {/* Our Brand Expeience Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
              Our Brand Experience Process
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto">
              Our proven methodology ensures every brand experience we create is strategic, memorable, and perfectly aligned with your business goals and customer expectations.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {process.map((step, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  className="text-center relative" 
                  data-testid={`process-step-${index}`}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 8,
                    rotateX: 5
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Step Number Circle */}
                  <motion.div 
                    className="bg-gradient-to-r from-orange-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(255, 120, 73, 0.5)"
                    }}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Connector Line - hide on last item */}
                  {index < process.length - 1 && (
                    <motion.div 
                      className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8 -z-10"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                      style={{ originX: 0 }}
                    ></motion.div>
                  )}
                  
                  <motion.h3 
                    className="font-spartan font-bold text-2xl text-gray-900 mb-4"
                  >
                    {step.title}
                  </motion.h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Brand Design Differentiator Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Brand design workspace featuring creative strategy materials and design tools" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-4 shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              {/* Floating experience indicators */}
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg">
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-8">
                Brand Experience Differentiator
              </h2>
              
              <motion.div 
                className="space-y-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {differentiators.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start" 
                    data-testid={`differentiator-${index}`}
                    variants={fadeInUp}
                    whileHover={{
                      x: 10,
                      scale: 1.02
                    }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-full p-3 mr-4 mt-1 flex-shrink-0"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-spartan font-bold text-xl text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Campaigns Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900">
                      Immersive Campaigns.
                    </h2>
                   <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                      Engage audiences with memorable, participatory experiences
                    </p>
                    <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                      Our immersive campaigns break past passive advertising by inviting audiences to interact, explore, and play. Augmented reality pop-ups let customers bring products to life in their own space—no app download required, just a simple scan.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="bg-orange-600 rounded-full p-2 mr-3">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-inter text-sm">AR Experiences</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-600 rounded-full p-2 mr-3">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-inter text-sm">Virtual Events</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                      alt="Immersive campaign experience" 
                      className="rounded-2xl shadow-2xl w-full h-auto"
                    />
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Benefits Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
                    Key Benefits of Leveraging Brand Experience Solutions
                  </h2>
                  <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                    Why Choose Gill Technologies for Your Brand Experience Needs?
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-8 text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-4 rounded-xl inline-block mb-6">
                          <benefit.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-spartan font-bold text-xl mb-4 group-hover:text-blue-600 transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="font-inter text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
      
            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-orange-600 to-blue-500">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
                  Let's craft your next immersive journey together
                </h2>
                <p className="font-inter text-white-600 text-xl mb-10 max-w-3xl mx-auto">
                  Ready to create brand experiences that captivate, engage, and inspire lasting connections with your audience?
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-inter font-bold">
                  Get in Touch for a Brand Experience Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </section>

      <Footer />
    </motion.div>
  );
}