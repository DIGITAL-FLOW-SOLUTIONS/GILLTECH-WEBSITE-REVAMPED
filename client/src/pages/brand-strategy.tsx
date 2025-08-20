"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  Target,
  TrendingUp,
  MessageCircle,
  Star,
  Palette,
  BarChart3,
  CheckCircle,
  Award,
  Lightbulb,
  Globe,
  Rocket,
  Brain,
  Sparkles,
  ArrowUpRight,
  Quote,
  Clock,
  ThumbsUp,
} from "lucide-react"

export default function BrandStrategy() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const brands = [
    {
      name: "PepsiCo",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png",
    },
    {
      name: "BritBox",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png",
    },
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    {
      name: "NTUC Singapore",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/NTUC-Singapore.png",
    },
    {
      name: "Bimbo Canada",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Bimbo-Canada.png",
    },
    {
      name: "Burlington",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Burlington.png",
    },
    {
      name: "Ricola",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png",
    },
    {
      name: "Nike China",
      src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png",
    },
  ]

  const services = [
    {
      title: "Brand Strategy & Positioning",
      description:
        "Comprehensive strategic foundation that defines your brand's unique position in the market and creates lasting competitive advantage.",
      icon: Target,
      gradient: "from-blue-500 to-orange-400",
      features: [
        "Market Research & Analysis",
        "Competitive Intelligence",
        "Brand Architecture Design",
        "Strategic Roadmap Development",
      ],
    },
    {
      title: "Visual Identity & Design",
      description:
        "Complete visual identity systems that capture your brand essence and create memorable experiences across all touchpoints.",
      icon: Palette,
      gradient: "from-orange-500 to-blue-400",
      features: [
        "Logo & Visual Identity",
        "Brand Guidelines Creation",
        "Color & Typography Systems",
        "Digital Asset Libraries",
      ],
    },
    {
      title: "Brand Voice & Messaging",
      description:
        "Authentic brand voice development and strategic messaging frameworks that resonate with your target audience.",
      icon: MessageCircle,
      gradient: "from-blue-500 to-orange-400",
      features: ["Brand Voice Development", "Messaging Architecture", "Content Strategy", "Copywriting Excellence"],
    },
    {
      title: "Digital Brand Experience",
      description:
        "Comprehensive digital brand presence that ensures consistency and impact across all online platforms.",
      icon: Globe,
      gradient: "from-orange-500 to-blue-400",
      features: [
        "Digital Brand Guidelines",
        "Website Brand Integration",
        "Social Media Strategy",
        "Digital Campaign Design",
      ],
    },
    {
      title: "Brand Innovation & Growth",
      description:
        "Forward-thinking brand strategies that drive innovation and sustainable growth in evolving markets.",
      icon: Rocket,
      gradient: "from-blue-500 to-orange-400",
      features: ["Innovation Strategy", "Growth Planning", "Market Expansion", "Future-Proofing"],
    },
    {
      title: "Brand Performance Analytics",
      description: "Data-driven insights and performance measurement to optimize brand strategy and maximize ROI.",
      icon: BarChart3,
      gradient: "from-orange-500 to-blue-400",
      features: ["Brand Health Tracking", "Performance Analytics", "ROI Measurement", "Strategic Optimization"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "Deep dive into your market, competitors, and audience to uncover strategic opportunities and insights.",
      icon: Brain,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Crafting comprehensive brand strategies with clear positioning, messaging, and implementation roadmaps.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Creative Execution",
      description:
        "Bringing your brand to life through compelling visual identity, authentic voice, and cohesive experiences.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description:
        "Strategic brand rollout with continuous monitoring, performance tracking, and ongoing optimization.",
      icon: TrendingUp,
    },
  ]

  const achievements = [
    {
      number: "100+",
      label: "Brands Transformed",
      description: "Successful brand transformations worldwide",
      icon: Award,
    },
    {
      number: "85%",
      label: "Client Satisfaction",
      description: "Exceptional results and partnerships",
      icon: ThumbsUp,
    },
    { number: "3+", label: "Years Experience", description: "Decades of proven expertise", icon: Clock },
    { number: "100+", label: "Brand Reach", description: "Global audience impact", icon: Globe },
  ]

  const testimonials = [
    {
      name: "CEO",
      role: "Burlington",
      content:
        "Gill Technologies completely revolutionized our brand strategy. Their data-driven approach and creative excellence helped us achieve 300% growth in brand recognition within 18 months.",
      avatar: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Burlington.png?height=60&width=60&text=SM",
      rating: 5,
      company: "Burlington",
    },
    {
      name: "CEO",
      role: "Ricola Candies",
      content:
        "The strategic insights and creative execution exceeded our expectations. They didn't just rebrand us – they repositioned us as industry leaders.",
      avatar: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png?height=60&width=60&text=DC",
      rating: 5,
      company: "Ricola Candies",
    },
    {
      name: "BritBox",
      role: "VP Marketing, BritBox",
      content:
        "Working with Gill Technologies was transformative. Their comprehensive approach helped us build a brand that truly connects with our customers and drives measurable business growth.",
      avatar: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png?height=60&width=60&text=MR",
      rating: 5,
      company: "BritBox",
    },
  ]

  const caseStudies = [
    {
      title: "Fortune 500 Digital Transformation",
      category: "Brand Repositioning",
      description: "Complete brand overhaul resulting in 40% increase in market share and $50M revenue growth.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/hero/brand-strategy-hero.avif?height=300&width=400&text=Case+Study+1",
      results: ["20% Market Share Increase", "$10M Revenue Growth", "65% Brand Recognition Lift"],
      industry: "Technology",
    },
    {
      title: "Startup to Unicorn Journey",
      category: "Brand Building",
      description: "Strategic brand development that supported Series A to Unicorn status in 24 months.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/hero/experience-hero.avif?height=300&width=400&text=Case+Study+2",
      results: ["Unicorn Valuation", "500% User Growth", "Global Market Entry"],
      industry: "FinTech",
    },
    {
      title: "Retail Brand Renaissance",
      category: "Brand Revitalization",
      description: "Heritage brand modernization that increased customer loyalty by 60% and sales by 35%.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/image-three.avif?height=300&width=400&text=Case+Study+3",
      results: ["60% Loyalty Increase", "35% Sales Growth", "Award-Winning Campaign"],
      industry: "Retail",
    },
  ]

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              
               <div className="flex items-center mb-6 group">
                <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-inter text-orange-500 font-semibold tracking-wide">Brand Strategy</span>
              </div>

              <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-gray-900">
                Building a strong brand starts with a <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> clear</span> strategy 
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Whether you're launching something new or refining your brand, having a well-defined plan ensures consistency, builds trust, and sets you apart from the competition.          
                  </p>

               <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                  Start Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 px-8 py-3 rounded-lg font-inter font-semibold transition-all duration-300 hover:shadow-md">
                  Get a Quote
                </Button>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Team working together"
                  className="w-full h-auto rounded-2xl"
                />

                {/* Overlay Card */}
                <div className="absolute top-6 left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    Creating Impactful Brand Strategy for Your Business!
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <span className="font-bold text-4xl text-gray-900 mr-3">9.6</span>
                    <div>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
  <div className="flex -space-x-2 mr-3">
     <div className="w-11 h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
      <img 
        src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" 
        alt="Mars" 
        className="w-10 h-10 object-contain"
      />
    </div>    
    <div className="w-11 h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
      <img 
        src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png" 
        alt="BritBox" 
        className="w-10 h-10 object-contain"
      />
    </div> 
    <div className="w-11 h-11 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
      <img 
        src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" 
        alt="PepsiCo" 
        className="w-10 h-10 object-contain"
      />
    </div>  
  </div>
  <span className="text-sm font-medium text-gray-700">Our Client Active</span>
</div>
                </div>

                {/* Bottom Green Button */}
                <div className="absolute bottom-6 right-6">
                  <Button className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-600 text-white hover:from-orange-600 hover:via-gray-500 hover:to-blue-700 font-inter font-semibold transition-all duration-200 hover:shadow-lg w-full mt-4">
                    Join the Future of Branding
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Growth & Success Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Card - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/hero-experience-2.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                    alt="Team collaboration"
                    className="rounded-xl w-full lg:w-64 h-48 object-cover"
                  />
                </div>
                <div className="flex-1 text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Branding is simply, brand recognition
                  </h3>
                  <p className="mb-6 leading-relaxed">
                    We craft compelling campaigns through classic media, building brand recognition, trust, and visibility that stand the test of time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Takes 1 column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-lg-start">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg-end text-2xl font-bold text-gray-900 mb-4 mb-lg-4">Success Our Priority</h3>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We Provide Brilliant Ideas & adding The World Called Sucess To Your Brand
                </p>

                {/* Statistics Card */}
                <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-white-900 mb-1">92%</div>
                      <div className="text-xs lg:text-sm font-medium text-white-700">Branding Startegy</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-white-900 mb-1">90%</div>
                      <div className="text-xs lg:text-sm font-medium text-white-700">Brand Conslutant</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-white-900 mb-1">87%</div>
                      <div className="text-xs lg:text-sm font-medium text-white-700">Brand Recognition</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Global Leaders</h3>
            <p className="text-xl text-gray-600">Building iconic brands across industries worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex justify-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={brand.src || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Brand <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Solutions</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we deliver end-to-end brand solutions that drive measurable business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:shadow-purple-200/50 h-full bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div
                      className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 
                    className={`text-2xl font-bold text-gray-900 mb-4 group-hover:${service.gradient} transition-colors`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className={`w-5 h-5 text-green-500 group-hover:${service.gradient} mr-3 flex-shrink-0`} />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                   
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Our Strategic Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that transforms brands through strategic thinking and creative excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block group-hover:bg-white/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Success <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Stories</span> That Inspire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results, measurable impact, and transformative brand growth across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-gray-800">{study.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-3 py-1">
                      <span className="text-xs font-semibold">{study.industry}</span>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                    <div className="space-y-2 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="font-medium text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-purple-500 group-hover:text-purple-500 bg-transparent"
                    >
                      View Case Study
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Numbers That Tell Our Story</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measurable impact and proven results across global markets
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                  <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{achievement.label}</h3>
                  <p className="text-blue-100 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Success <span className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-500 bg-clip-text text-transparent animate-pulse"> Stories</span></h2>
            <p className="text-xl text-gray-600">Hear from leaders who've transformed their brands with us</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 h-full bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-purple-400 mb-4" />
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                        <div className="text-purple-600 text-sm font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful brands who've partnered with us to create extraordinary brand experiences that
              drive growth and lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-6 text-lg rounded-2xl shadow-2xl">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-lg rounded-2xl bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 flex justify-center space-x-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-2xl font-bold text-orange-400">Free</div>
                <div className="text-sm text-gray-400">Strategy Session</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">24hr</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Satisfaction Guarantee</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
