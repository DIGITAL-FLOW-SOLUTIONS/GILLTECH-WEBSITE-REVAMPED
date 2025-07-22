import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Brain, 
  Search, 
  FlaskConical, 
  TrendingUp,
  Lightbulb,
  Target,
  Users,
  CheckCircle
} from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function Innovation() {
  const brands = [
    { name: "Mars", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Mars.png" },
    { name: "Logitech", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Logitech.png" },
    { name: "Nike", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Nike-China.png" },
    { name: "PepsiCo", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/pepsico.png" },
    { name: "Chick-fil-A", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/Chick-fil-A.png" },
    { name: "BritBox", src: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/brand/BritBox.png" }
  ];

  const benefits = [
    {
      benefit: "AI & Data-Driven Strategy",
      impact: "Predict market shifts and act before your competitors do."
    },
    {
      benefit: "Faster Product Development Cycles",
      impact: "Save time and money by quickly validating and launching the right products."
    },
    {
      benefit: "Scalable and Sustainable Solutions",
      impact: "Ensure long-term growth through innovation that balances business goals and real-world impact."
    },
    {
      benefit: "Future-Proof Branding",
      impact: "Adapt your brand to resonate with Gen Z, Millennials, and beyond."
    },
    {
      benefit: "Human-Centered Design Approach",
      impact: "Build solutions that are loved by your customers and adopted easily."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-spartan font-bold text-5xl lg:text-6xl mb-6">
                Innovation
              </h1>
              <p className="font-inter text-xl text-blue-100 mb-8 leading-relaxed">
                We identify gaps and trends in your industry using advanced market research and competitive analysis. 
                Our approach empowers you to stay ahead of the curve.
              </p>
              <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                Start Your Strategy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/product/innovation_product.jpg" 
                alt="Innovation Solutions" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-brand-secondary rounded-2xl p-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made Smarter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-secondary to-orange-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-6">
                Made Smarter.
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                Leverage AI-driven insights and rapid prototyping to design, test, and launch innovative products. 
                We help startups and enterprises turn ideas into real solutions.
              </p>
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-xl font-inter font-semibold">
                Explore How
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-8 text-center">
                Ignite Tomorrow's Solutions Today.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-gray-500 uppercase tracking-wide text-sm font-semibold mb-4">
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

      {/* Empowering Future Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/about-1.png" 
                alt="Innovation Process" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-6">
                Empowering the Future with Innovation
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                In today's fast-moving business landscape, bold ideas alone aren't enough—you need a structured 
                path from concept to commercial success. Our Innovation practice brings together competitive analysis, 
                AI-powered research, and rapid validation to turn hypotheses into high-potential ventures.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                By applying proven methodologies adapted to your unique context, we help you uncover hidden 
                opportunities, mitigate risk, and create solutions that resonate with modern consumers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-brand-secondary rounded-full p-2 mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-inter font-semibold text-gray-800">Innovation</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-brand-primary rounded-full p-2 mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-inter font-semibold text-gray-800">Artificial Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Market Research
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
                Illuminating trends and uncovering gaps through data
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                True innovation begins with understanding the terrain. We conduct comprehensive market and 
                competitive analyses—combining quantitative surveys, social listening, and industry benchmarking—to 
                map emerging trends and identify unmet needs.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                This data-first approach surfaces actionable insights, guiding strategic decisions on product features, 
                positioning, and go-to-market timing so you can outpace competitors and capture new audiences.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-Market-Research-1.avif" 
                alt="Market Research 1" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-Market-Research-2.avif" 
                alt="Market Research 2" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-Market-Research-3.avif" 
                alt="Market Research 3" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-AI-Driven-1.avif" 
                alt="AI-Driven Insights" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                AI-Driven Insights
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
                Predictive Power for Smarter Business
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                Artificial intelligence is revolutionizing how businesses operate—and we help you harness its full potential.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                Our proprietary AI tools provide predictive models, real-time insights, and automation frameworks that fuel 
                innovation. This means you can anticipate customer needs, stay ahead of industry changes, and create hyper-targeted strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototyping Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-4">
              Developing and Testing Product Ideas
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
              Real Innovation Is Built, Not Just Imagined.
            </h3>
            <p className="font-inter text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              At Gill Technologies, we don't just think—we build, test, and iterate. Prototyping is one of the most 
              critical phases of the innovation lifecycle. It allows ideas to come to life in a tangible, testable form 
              before full-scale deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-prototyping-1.png" 
                alt="Prototyping Process" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="font-spartan font-bold text-3xl text-brand-primary mb-4">
                Prototyping
              </h3>
              <h4 className="font-spartan font-bold text-xl text-brand-secondary mb-6">
                Turning ideas into tangible experiences
              </h4>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                Before you commit resources to a full launch, we help you iterate quickly and inexpensively. 
                Through rapid prototyping—whether low-fidelity mockups, functional proofs of concept, or interactive 
                simulations—you can test assumptions, gather user feedback, and refine features.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                This cycle of build-test-learn accelerates decision-making, reduces costly pivots, and ensures your 
                final product truly meets market needs.
              </p>
              
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-brand-primary rounded-full p-3 mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-inter text-gray-600 italic mb-2">
                      "By embracing prototyping early, we save clients time, reduce investment risk, and improve market fit before the full launch."
                    </p>
                    <p className="font-inter font-semibold text-brand-primary">Brian Gillo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-4">
              Helping Brands Grow with Innovative Solutions
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
              How We Build Brands with Purpose.
            </h3>
            <p className="font-inter text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Our approach to brand support is both creative and analytical. Instead of offering one-size-fits-all 
              branding packages, we treat each brand as a living system that evolves with the market and culture.
            </p>
          </div>

          <div className="mb-16">
            <h4 className="font-spartan font-bold text-xl text-brand-primary mb-8 text-center">
              What sets our brand support apart:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <img 
                    src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-01.jpg" 
                    alt="Consumer Psychology" 
                    className="rounded-xl mb-4 w-full h-48 object-cover"
                  />
                  <p className="font-inter text-gray-600">
                    We tap into consumer psychology and emerging trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <img 
                    src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-02.jpg" 
                    alt="Brand Ecosystems" 
                    className="rounded-xl mb-4 w-full h-48 object-cover"
                  />
                  <p className="font-inter text-gray-600">
                    We craft <strong>cohesive brand ecosystems</strong>—from tone and identity to campaign execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <img 
                    src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/innovation-03.jpg" 
                    alt="AI Insights" 
                    className="rounded-xl mb-4 w-full h-48 object-cover"
                  />
                  <p className="font-inter text-gray-600">
                    We blend AI insights with emotional storytelling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="font-inter text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether launching a new brand or repositioning an existing one, our goal is to build a narrative that 
              sticks, scales, and sparks engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-4">
              Key Benefits of Using Gill Technologies' Innovative Technological Solutions
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary">
              Why Choose Gill Technologies for Your Innovative Needs?
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            Ready to Innovate with Purpose?
          </h2>
          <p className="font-inter text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your vision into market-leading solutions with our AI-powered innovation framework.
          </p>
          <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold text-lg">
            Start Your Innovation Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}