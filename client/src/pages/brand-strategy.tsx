import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  PenTool, 
  Users, 
  Target, 
  TrendingUp,
  Star,
  MessageSquare,
  Zap,
  Eye,
  CheckCircle
} from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function BrandStrategy() {
  const brands = [
    { name: "PepsiCo", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" },
    { name: "BritBox", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png" },
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    { name: "NTUC Singapore", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/NTUC-Singapore.png" },
    { name: "Bimbo Canada", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Bimbo-Canada.png" },
    { name: "Burlington", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Burlington.png" },
    { name: "Ricola", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png" },
    { name: "Nike", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png" }
  ];

  const contentStats = [
    {
      stat: "70%",
      description: "of consumers say they feel closer to a brand after engaging with its content."
    },
    {
      stat: "3x",
      description: "more leads per dollar spent with strategic content marketing."
    },
    {
      stat: "Trust & Authority",
      description: "Content that educates builds trust and authority—two key pillars of brand growth."
    }
  ];

  const benefits = [
    {
      benefit: "Data-Informed Strategy",
      impact: "We blend storytelling with analytics to build effective brand systems."
    },
    {
      benefit: "Cross-Platform Consistency",
      impact: "Ensure your message and identity are cohesive across digital and physical platforms."
    },
    {
      benefit: "Increased Brand Loyalty",
      impact: "Our techniques keep your audience engaged and emotionally connected."
    },
    {
      benefit: "Higher Visibility",
      impact: "Our content strategies improve discoverability and amplify reach."
    },
    {
      benefit: "Adaptability",
      impact: "Built to evolve with market trends and consumer behaviors."
    }
  ];

  const testimonials = [
    {
      name: "Linda Mayer",
      role: "Brand Manager, Ricola Candies",
      content: "Their approach to storytelling and brand development helped us refresh how Ricola connects with customers in emerging markets.",
      rating: 4.5,
      logo: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png"
    },
    {
      name: "Chen Lu",
      role: "Brand Activation Manager, Nike China",
      content: "Their insights helped us shape a regional campaign in China that felt both authentic and on-trend.",
      rating: 4.5,
      logo: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png"
    },
    {
      name: "Anthony Blake",
      role: "Marketing Lead, Chick-fil-A",
      content: "The Gill team helped us launch a purpose-driven campaign that reflected our brand values perfectly.",
      rating: 4.5,
      logo: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Chick-fil-A.png"
    },
    {
      name: "Sarah Thompson",
      role: "Marketing Director, PepsiCo",
      content: "Gill Technologies helped us discover valuable market insights that made our product launch a success.",
      rating: 4.5,
      logo: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png"
    },
    {
      name: "Michael Reyes",
      role: "Consumer Insights Lead, Logitech",
      content: "The team at Gill Technologies is creative, insightful, and truly understands how to build brand experiences that stick.",
      rating: 4.5,
      logo: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Logitech.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-blue-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="bg-brand-secondary rounded-xl p-4 w-fit mb-6">
                <span className="font-inter font-semibold text-white">Strategic Branding</span>
              </div>
              <h1 className="font-spartan font-bold text-5xl lg:text-6xl mb-6 leading-tight">
                Crafting Brands That Connect, Compete, and Endure
              </h1>
              <p className="font-inter text-xl text-blue-100 mb-8 leading-relaxed">
                Think of your brand as a person—how they dress, speak, and act. Consistency in identity makes them trustworthy, memorable, and admired.
              </p>
              <p className="font-inter text-lg text-blue-200 mb-8">
                Accelerate Global Growth with our AI Expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-xl font-inter font-semibold">
                  Talk to an Expert
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/image-four.png" 
                alt="Brand Strategy Visual 1" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/image-one.jpg" 
                alt="Brand Strategy Visual 2" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-spartan font-bold text-3xl text-brand-primary mb-4">
              Over 100+ Trusted Company
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
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

      {/* Content Marketing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Creating Valuable Content for Audience Engagement
              </h2>
              <h3 className="font-spartan font-bold text-3xl text-brand-secondary mb-8">
                Content Marketing
              </h3>
              
              <div className="space-y-6 mb-8">
                {contentStats.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-brand-primary rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-spartan font-bold text-2xl text-brand-secondary">
                        {item.stat}
                      </span>
                      <p className="font-inter text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h4 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  What We Offer:
                </h4>
                <ul className="space-y-2 mb-6">
                  <li className="font-inter text-gray-600">• Editorial calendars tailored to your audience.</li>
                  <li className="font-inter text-gray-600">• SEO-optimized blogs, social media, and email campaigns.</li>
                  <li className="font-inter text-gray-600">• Story-driven videos and thought leadership articles.</li>
                </ul>
                
                <h4 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  The Gill Edge:
                </h4>
                <p className="font-inter text-gray-600">
                  Every piece of content we craft is rooted in insight—because we don't just create, we communicate.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/content-marketing.jpg" 
                alt="Content Marketing" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identity Development Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-fourth-Solution-1.avif" 
                alt="Identity Development" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Establishing a Strong and Recognizable Brand Identity
              </h2>
              <h3 className="font-spartan font-bold text-3xl text-brand-secondary mb-6">
                Identity Development.
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                Your identity is more than a logo—it's the emotional and visual fingerprint of your business. 
                We take a holistic approach to identity development, ensuring your brand leaves a lasting impression 
                at every touchpoint.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                We ensure every interaction with your brand feels familiar—like meeting an old friend in a new place.
              </p>
              
              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h4 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  At Gill Technologies, we help you define that "personality" by developing:
                </h4>
                <ul className="space-y-2">
                  <li className="font-inter text-gray-600 flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-secondary mr-2" />
                    Cohesive visual systems (logo, color palette, fonts, graphics).
                  </li>
                  <li className="font-inter text-gray-600 flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-secondary mr-2" />
                    Brand story and foundational messaging.
                  </li>
                  <li className="font-inter text-gray-600 flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-secondary mr-2" />
                    Behavioral consistency across digital and physical platforms.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Techniques to Build and Maintain Customer Relationships
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-8">
                Turn Conversations into Connections, and Connections into Loyalty
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h4 className="font-spartan font-bold text-lg text-gray-800 mb-2">The Problem:</h4>
                  <p className="font-inter text-gray-600 italic">
                    "Today's consumers demand more than just products—they want experiences, personalization, and values they align with."
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h4 className="font-spartan font-bold text-lg text-gray-800 mb-2">Result:</h4>
                  <p className="font-inter text-gray-600 italic">
                    "Stronger customer relationships, increased retention, and brand evangelism that grows organically."
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  Our Solution:
                </h4>
                <h5 className="font-spartan font-bold text-lg text-brand-secondary mb-4">
                  Gill Technologies uses data-powered engagement strategies that foster real connection. We help brands:
                </h5>
                <ul className="space-y-2">
                  <li className="font-inter text-gray-600">• Create emotionally resonant campaigns.</li>
                  <li className="font-inter text-gray-600">• Implement loyalty systems and feedback loops.</li>
                  <li className="font-inter text-gray-600">• Utilize customer segmentation for personalized communication.</li>
                  <li className="font-inter text-gray-600">• Optimize digital UX to improve conversion.</li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/product/blog-13.jpg" 
                alt="Customer Relationships" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-4">
              Key Benefits of Using Gill Technologies' Brand Strategy Solutions
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary">
              Why Choose Gill Technologies for Your Brand Strategy?
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-brand-primary to-blue-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-spartan font-bold">Benefit</th>
                  <th className="px-6 py-4 text-left font-spartan font-bold">Impact on Your Business</th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-inter font-semibold text-brand-primary">
                      {item.benefit}
                    </td>
                    <td className="px-6 py-4 font-inter text-gray-600">
                      {item.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
              Testimonials
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary">
              What Our Client Says
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-contain mr-4"
                    />
                    <div className="flex">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 font-inter text-sm text-gray-600">{testimonial.rating}</span>
                    </div>
                  </div>
                  <p className="font-inter text-gray-600 mb-4 flex-grow italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-spartan font-bold text-brand-primary">{testimonial.name}</p>
                    <p className="font-inter text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            Let's Build a Brand That Works Harder Than Your Competition
          </h2>
          <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold text-lg">
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}