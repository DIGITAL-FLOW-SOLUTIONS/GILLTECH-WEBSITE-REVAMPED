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
  CheckCircle
} from "lucide-react";

export default function Innovation() {
  const brands = [
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    { name: "Logitech", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Logitech.png" },
    { name: "Nike", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png" },
    { name: "PepsiCo", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" },
    { name: "Chick-fil-A", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Chick-fil-A.png" },
    { name: "BritBox", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png" },
    { name: "Burlington", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Burlington.png" },
    { name: "Ricola", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Ricola-Candies.png" }
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
      title: "Scalable and Sustainable Solutions",
      description: "Ensure long-term growth through innovation that balances business goals and real-world impact.",
      icon: TrendingUp
    },
    {
      title: "Future-Proof Branding",
      description: "Adapt your brand to resonate with Gen Z, Millennials, and beyond.",
      icon: Target
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-brand-secondary mr-3" />
                <span className="font-inter text-brand-secondary font-semibold">Innovation</span>
              </div>
              <h1 className="font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-6">
                Ignite Tomorrow's <br />
                <span className="text-brand-secondary">Solutions</span> Today
              </h1>
              <p className="font-inter text-blue-100 text-lg mb-8 leading-relaxed">
                We identify gaps and trends in your industry using advanced market research and competitive analysis. Our approach empowers you to stay ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                  Start Your Strategy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-xl font-inter font-semibold">
                  Explore How
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Innovation and technology" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-brand-secondary rounded-2xl p-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made Smarter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="AI and innovation workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-primary rounded-2xl p-4 shadow-lg">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-brand-secondary mr-3" />
              </div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
                Made Smarter.
              </h2>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Leverage AI-driven insights and rapid prototyping to design, test, and launch innovative products. We help startups and enterprises turn ideas into real solutions.
              </p>
              <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                Explore How
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-spartan font-bold text-2xl text-brand-primary mb-8">
            Trusted by thousands of companies across 50+ countries
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

      {/* Empowering Future Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Empowering the Future with Innovation
              </h2>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                In today's fast-moving business landscape, bold ideas alone aren't enough—you need a structured path from concept to commercial success.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Our Innovation practice brings together competitive analysis, AI-powered research, and rapid validation to turn hypotheses into high-potential ventures. By applying proven methodologies adapted to your unique context, we help you uncover hidden opportunities, mitigate risk, and create solutions that resonate with modern consumers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-brand-secondary rounded-full p-3 mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-spartan font-bold text-lg">Innovation</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-brand-primary rounded-full p-3 mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-spartan font-bold text-lg">Artificial Intelligence</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Innovation workspace" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Research Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Market Research
              </h2>
              <h3 className="font-inter font-semibold text-xl text-gray-700 mb-6">
                Illuminating trends and uncovering gaps through data
              </h3>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                True innovation begins with understanding the terrain. We conduct comprehensive market and competitive analyses—combining quantitative surveys, social listening, and industry benchmarking—to map emerging trends and identify unmet needs.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                This data-first approach surfaces actionable insights, guiding strategic decisions on product features, positioning, and go-to-market timing so you can outpace competitors and capture new audiences.
              </p>
              <div className="flex items-center">
                <Search className="w-6 h-6 text-brand-secondary mr-3" />
                <span className="font-inter font-semibold text-gray-700">Deep Market Intelligence</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Market research data" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Analytics dashboard" 
                className="rounded-xl shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Research insights" 
                className="rounded-xl shadow-lg -mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Insights Section */}
      <section className="py-20 bg-gradient-to-r from-brand-secondary to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="AI technology visualization" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl mb-8">
                AI-Driven Insights
              </h2>
              <h3 className="font-inter font-semibold text-xl mb-6 opacity-90">
                Predictive Power for Smarter Business
              </h3>
              <p className="font-inter text-orange-100 text-lg mb-6 leading-relaxed">
                Artificial intelligence is revolutionizing how businesses operate—and we help you harness its full potential.
              </p>
              <p className="font-inter text-orange-100 text-lg mb-8 leading-relaxed">
                Our proprietary AI tools provide predictive models, real-time insights, and automation frameworks that fuel innovation. This means you can anticipate customer needs, stay ahead of industry changes, and create hyper-targeted strategies.
              </p>
              <div className="flex items-center">
                <Brain className="w-6 h-6 text-white mr-3" />
                <span className="font-inter font-semibold">Predictive Analytics & Real-time Intelligence</span>
              </div>
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
              Real Innovation Is Built, Not Just Imagined. At Gill Technologies, we don't just think—we build, test, and iterate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
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
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                This cycle of build-test-learn accelerates decision-making, reduces costly pivots, and ensures your final product truly meets market needs.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Key Benefits of Using Gill Technologies' Innovative Technological Solutions
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Why Choose Gill Technologies for Your Innovative Needs?
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            Ready to Lead with Innovation?
          </h2>
          <p className="font-inter text-blue-100 text-xl mb-10 max-w-3xl mx-auto">
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