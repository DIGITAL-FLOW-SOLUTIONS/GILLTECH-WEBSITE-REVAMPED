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
  Play,
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
      gradient: "from-blue-500 to-cyan-400",
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
      gradient: "from-purple-500 to-pink-400",
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
      gradient: "from-green-500 to-emerald-400",
      features: ["Brand Voice Development", "Messaging Architecture", "Content Strategy", "Copywriting Excellence"],
    },
    {
      title: "Digital Brand Experience",
      description:
        "Comprehensive digital brand presence that ensures consistency and impact across all online platforms.",
      icon: Globe,
      gradient: "from-orange-500 to-red-400",
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
      gradient: "from-indigo-500 to-blue-400",
      features: ["Innovation Strategy", "Growth Planning", "Market Expansion", "Future-Proofing"],
    },
    {
      title: "Brand Performance Analytics",
      description: "Data-driven insights and performance measurement to optimize brand strategy and maximize ROI.",
      icon: BarChart3,
      gradient: "from-teal-500 to-cyan-400",
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
      number: "300+",
      label: "Brands Transformed",
      description: "Successful brand transformations worldwide",
      icon: Award,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Exceptional results and partnerships",
      icon: ThumbsUp,
    },
    { number: "25+", label: "Years Experience", description: "Decades of proven expertise", icon: Clock },
    { number: "150M+", label: "Brand Reach", description: "Global audience impact", icon: Globe },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CMO, TechCorp Global",
      content:
        "Gill Technologies completely revolutionized our brand strategy. Their data-driven approach and creative excellence helped us achieve 300% growth in brand recognition within 18 months.",
      avatar: "/placeholder.svg?height=60&width=60&text=SM",
      rating: 5,
      company: "TechCorp",
    },
    {
      name: "David Chen",
      role: "Founder, InnovateLab",
      content:
        "The strategic insights and creative execution exceeded our expectations. They didn't just rebrand us – they repositioned us as industry leaders.",
      avatar: "/placeholder.svg?height=60&width=60&text=DC",
      rating: 5,
      company: "InnovateLab",
    },
    {
      name: "Maria Rodriguez",
      role: "VP Marketing, RetailMax",
      content:
        "Working with Gill Technologies was transformative. Their comprehensive approach helped us build a brand that truly connects with our customers and drives measurable business growth.",
      avatar: "/placeholder.svg?height=60&width=60&text=MR",
      rating: 5,
      company: "RetailMax",
    },
  ]

  const caseStudies = [
    {
      title: "Fortune 500 Digital Transformation",
      category: "Brand Repositioning",
      description: "Complete brand overhaul resulting in 40% increase in market share and $50M revenue growth.",
      image: "/placeholder.svg?height=300&width=400&text=Case+Study+1",
      results: ["40% Market Share Increase", "$50M Revenue Growth", "85% Brand Recognition Lift"],
      industry: "Technology",
    },
    {
      title: "Startup to Unicorn Journey",
      category: "Brand Building",
      description: "Strategic brand development that supported Series A to Unicorn status in 24 months.",
      image: "/placeholder.svg?height=300&width=400&text=Case+Study+2",
      results: ["Unicorn Valuation", "500% User Growth", "Global Market Entry"],
      industry: "FinTech",
    },
    {
      title: "Retail Brand Renaissance",
      category: "Brand Revitalization",
      description: "Heritage brand modernization that increased customer loyalty by 60% and sales by 35%.",
      image: "/placeholder.svg?height=300&width=400&text=Case+Study+3",
      results: ["60% Loyalty Increase", "35% Sales Growth", "Award-Winning Campaign"],
      industry: "Retail",
    },
  ]

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-white font-medium">Award-Winning Brand Strategy</span>
            </motion.div>

            <h1 className="font-bold text-6xl lg:text-8xl leading-tight mb-8 text-white">
              Transform Your
              <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Brand Story
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We craft extraordinary brand experiences that captivate audiences, drive growth, and create lasting impact
              in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-lg rounded-2xl bg-transparent"
                >
                  <Play className="mr-2 w-6 h-6" />
                  Watch Our Story
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex space-x-8 bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">300+</div>
                <div className="text-sm text-gray-300">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Comprehensive Brand Solutions</h2>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-2 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors mt-auto bg-transparent"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
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
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 inline-block group-hover:bg-white/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
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
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Stories That Inspire</h2>
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
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
              Ready to Transform
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Your Brand?
              </span>
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
