import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  ArrowRight, 
  Target, 
  Users, 
  TrendingUp,
  Heart,
  Eye,
  MessageCircle,
  Star,
  Palette,
  PenTool,
  BarChart3,
  Zap
} from "lucide-react";

export default function BrandStrategy() {
  const brands = [
    { name: "PepsiCo", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" },
    { name: "BritBox", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png" },
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    { name: "NTUC Singapore", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/NTUC-Singapore.png" },
    { name: "Bimbo Canada", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Bimbo-Canada.png" },
    { name: "Burlington", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Burlington.png" },
    { name: "Ricola", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png" },
    { name: "Nike China", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png" }
  ];

  const benefits = [
    {
      title: "Data-Informed Strategy",
      description: "We blend storytelling with analytics to build effective brand systems.",
      icon: BarChart3
    },
    {
      title: "Cross-Platform Consistency", 
      description: "Ensure your message and identity are cohesive across digital and physical platforms.",
      icon: Target
    },
    {
      title: "Increased Brand Loyalty",
      description: "Our techniques keep your audience engaged and emotionally connected.",
      icon: Heart
    },
    {
      title: "Higher Visibility",
      description: "Our content strategies improve discoverability and amplify reach.",
      icon: Eye
    },
    {
      title: "Adaptability", 
      description: "Built to evolve with market trends and consumer behaviors.",
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: "Linda Mayer",
      role: "Brand Manager, Ricola Candies",
      content: "Their approach to storytelling and brand development helped us refresh how Ricola connects with customers in emerging markets.",
      brand: "Ricola",
      rating: 4.5,
      brandSrc: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png"
    },
    {
      name: "Chen Lu",
      role: "Brand Activation Manager, Nike China",
      content: "Their insights helped us shape a regional campaign in China that felt both authentic and on-trend.",
      brand: "Nike China",
      rating: 4.5,
      brandSrc: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png"
    },
    {
      name: "Anthony Blake",
      role: "Marketing Lead, Chick-fil-A",
      content: "The Gill team helped us launch a purpose-driven campaign that reflected our brand values perfectly.",
      brand: "Chick-fil-A",
      rating: 4.5,
      brandSrc: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Chick-fil-A.png"
    },
    {
      name: "Sarah Thompson",
      role: "Marketing Director, PepsiCo",
      content: "Gill Technologies helped us discover valuable market insights that made our product launch a success.",
      brand: "PepsiCo",
      rating: 4.5,
      brandSrc: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png"
    },
    {
      name: "Michael Reyes",
      role: "Consumer Insights Lead, Logitech",
      content: "The team at Gill Technologies is creative, insightful, and truly understands how to build brand experiences that stick.",
      brand: "Logitech",
      rating: 4.5,
      brandSrc: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Logitech.png"
    }
  ];

  const contentStats = [
    { stat: "70%", description: "of consumers say they feel closer to a brand after engaging with its content." },
    { stat: "3x", description: "more leads per dollar spent with strategic content marketing." },
    { stat: "Trust", description: "Content that educates builds trust and authority—two key pillars of brand growth." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-secondary via-orange-600 to-red-500 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Palette className="w-8 h-8 text-white mr-3" />
                <span className="font-inter text-white font-semibold">Strategic Branding</span>
              </div>
              <h1 className="font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-6">
                Crafting Brands That <br />
                <span className="text-yellow-200">Connect</span>, Compete, <br />
                and <span className="text-yellow-200">Endure</span>
              </h1>
              <p className="font-inter text-orange-100 text-lg mb-8 leading-relaxed">
                Think of your brand as a person—how they dress, speak, and act. Consistency in identity makes them trustworthy, memorable, and admired. Accelerate Global Growth with our AI Expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-brand-secondary hover:bg-gray-100 px-8 py-4 rounded-xl font-inter font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-secondary px-8 py-4 rounded-xl font-inter font-semibold">
                  Talk to an Expert
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Brand strategy meeting" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Creative brand workshop" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-spartan font-bold text-2xl text-brand-primary mb-8">
            Over 100+ Trusted Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center">
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

      {/* Content Marketing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Creating Valuable Content for Audience Engagement
              </h2>
              <h3 className="font-inter font-semibold text-2xl text-gray-700 mb-8">Content Marketing</h3>
              
              <div className="space-y-6 mb-8">
                {contentStats.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-brand-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <span className="font-spartan font-bold text-2xl text-brand-secondary">{item.stat}</span>
                      <p className="font-inter text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-spartan font-bold text-xl text-brand-primary mb-4">What We Offer:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="font-inter text-gray-600 flex items-center">
                    <MessageCircle className="w-4 h-4 text-brand-secondary mr-2" />
                    Editorial calendars tailored to your audience
                  </li>
                  <li className="font-inter text-gray-600 flex items-center">
                    <PenTool className="w-4 h-4 text-brand-secondary mr-2" />
                    SEO-optimized blogs, social media, and email campaigns
                  </li>
                  <li className="font-inter text-gray-600 flex items-center">
                    <Eye className="w-4 h-4 text-brand-secondary mr-2" />
                    Story-driven videos and thought leadership articles
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="font-inter font-semibold text-brand-primary">The Gill Edge:</p>
                  <p className="font-inter text-gray-600">Every piece of content we craft is rooted in insight—because we don't just create, we communicate.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Content marketing strategy" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-primary rounded-2xl p-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Brand identity design" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -left-6 bg-brand-secondary rounded-2xl p-4 shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Establishing a Strong and Recognizable Brand Identity
              </h2>
              <h3 className="font-inter font-semibold text-2xl text-gray-700 mb-6">Identity Development</h3>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                Your identity is more than a logo—it's the emotional and visual fingerprint of your business. We take a holistic approach to identity development, ensuring your brand leaves a lasting impression at every touchpoint.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                We ensure every interaction with your brand feels familiar—like meeting an old friend in a new place.
              </p>

              <div className="bg-gradient-to-r from-brand-primary to-blue-800 rounded-xl p-6 text-white mb-8">
                <h4 className="font-spartan font-bold text-lg mb-4">At Gill Technologies, we help you define that "personality" by developing:</h4>
                <ul className="space-y-2">
                  <li className="font-inter flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Cohesive visual systems (logo, color palette, fonts, graphics)
                  </li>
                  <li className="font-inter flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Brand story and foundational messaging
                  </li>
                  <li className="font-inter flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Behavioral consistency across digital and physical platforms
                  </li>
                </ul>
              </div>

              <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                Get Brand Identity
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Relationships Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Techniques to Build and Maintain Customer Relationships
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              Turn Conversations into Connections, and Connections into Loyalty
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="text-center">
              <div className="bg-red-100 rounded-xl p-6 mb-6">
                <h3 className="font-spartan font-bold text-lg text-red-800 mb-2">The Problem:</h3>
                <blockquote className="font-inter text-red-700 italic">
                  "Today's consumers demand more than just products—they want experiences, personalization, and values they align with."
                </blockquote>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-xl p-6 mb-6">
                <h3 className="font-spartan font-bold text-lg text-blue-800 mb-4">Our Solution:</h3>
                <h4 className="font-inter font-semibold text-blue-700 mb-4">Gill Technologies uses data-powered engagement strategies that foster real connection. We help brands:</h4>
                <ul className="space-y-2 text-left">
                  <li className="font-inter text-blue-700 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Create emotionally resonant campaigns
                  </li>
                  <li className="font-inter text-blue-700 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Implement loyalty systems and feedback loops
                  </li>
                  <li className="font-inter text-blue-700 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Utilize customer segmentation for personalized communication
                  </li>
                  <li className="font-inter text-blue-700 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Optimize digital UX to improve conversion
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-xl p-6 mb-6">
                <h3 className="font-spartan font-bold text-lg text-green-800 mb-2">Result:</h3>
                <blockquote className="font-inter text-green-700 italic">
                  "Stronger customer relationships, increased retention, and brand evangelism that grows organically."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Customer relationship building" 
              className="rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Key Benefits of Using Gill Technologies' Brand Strategy Solutions
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Why Choose Gill Technologies for Your Brand Strategy?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-brand-secondary to-orange-600 p-4 rounded-xl inline-block mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-spartan font-bold text-xl mb-4 group-hover:text-brand-secondary transition-colors">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">What Our Clients Say</h2>
            <p className="font-inter text-xl text-gray-600">Testimonials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.brandSrc} 
                      alt={testimonial.brand}
                      className="h-8 w-auto mr-4"
                    />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 font-inter text-sm text-gray-600">{testimonial.rating}</span>
                    </div>
                  </div>
                  <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>
                  <div>
                    <div className="font-spartan font-bold text-lg text-brand-primary">{testimonial.name}</div>
                    <div className="font-inter text-sm text-gray-500">{testimonial.role}</div>
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
            Let's Build a Brand That Works Harder Than Your Competition
          </h2>
          <p className="font-inter text-orange-100 text-xl mb-10 max-w-3xl mx-auto">
            Ready to transform your brand strategy and create lasting connections with your audience? Let's craft a brand that truly resonates.
          </p>
          <Button className="bg-white text-brand-secondary hover:bg-gray-100 px-10 py-4 rounded-xl font-inter font-bold">
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}