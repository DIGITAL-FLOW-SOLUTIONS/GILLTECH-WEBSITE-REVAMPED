import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  ArrowRight, 
  Users, 
  Trophy, 
  Globe,
  Target,
  Brain,
  CheckCircle,
  Star,
  Award
} from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: Trophy,
      title: "Fortune 500 Collaborations",
      description: "Executed market research that redefined product strategies for global leaders, boosting their market share and customer engagement."
    },
    {
      icon: Brain,
      title: "AI Engagement Models",
      description: "Developed predictive consumer-engagement frameworks that increased conversion rates by up to 30% for major brands."
    },
    {
      icon: Globe,
      title: "Global Industry Impact",
      description: "Featured speakers and panelists at international conferences, sharing best practices in AI-driven research and sustainable innovation."
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Co-created technology initiatives with NGOs and social enterprises, delivering scalable solutions in health, agriculture, and education."
    },
    {
      icon: Award,
      title: "DISH Competition 2024 Finalist",
      description: "Our TamuBoost Clusters project was honored for tackling childhood malnutrition in underserved communities."
    }
  ];

  const approaches = [
    { 
      number: "1", 
      title: "Discover & Define",
      description: "Deep-dive workshops and ethnographic studies to uncover unmet needs and market gaps."
    },
    { 
      number: "2", 
      title: "Data-Driven Analysis", 
      description: "Comprehensive analysis using AI-powered insights to validate market opportunities."
    },
    { 
      number: "3", 
      title: "Ideation & Prototyping", 
      description: "Creative ideation sessions followed by rapid prototyping to bring concepts to life."
    },
    { 
      number: "4", 
      title: "Validation & Refinement", 
      description: "Testing with real users and iterating based on feedback and data insights."
    },
    { 
      number: "5", 
      title: "Launch & Scale", 
      description: "Strategic launch execution with optimization for sustainable growth and market impact."
    }
  ];

  const values = [
    {
      title: "AI-Powered Insights",
      description: "Leverage predictive analytics to understand Gen Z and Millennial behaviors, ensuring your campaigns resonate deeply."
    },
    {
      title: "End-to-End Market Research", 
      description: "From competitor benchmarking to brand positioning, our holistic analysis equips you with a clear path to market leadership."
    },
    {
      title: "Tailored Brand Growth",
      description: "We combine digital storytelling with experiential design to build authentic connections and foster customer loyalty."
    }
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
                Meet the <br />
                <span className="text-brand-secondary">Gill Technologies</span> <br />
                Team
              </h1>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                For years we've been on a mission to help our clients' companies reveal their full potential by providing them with All-in-One AI Solution for Market Intelligence.
              </p>
              <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaboration" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-primary rounded-2xl p-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-brand-secondary to-orange-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="bg-white rounded-xl p-4">
                <img 
                  src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/Dish-competition-logo.png" 
                  alt="DISH Competition Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-spartan font-bold text-3xl mb-2">Proud finalists of the DISH Competition 2024</h2>
                <p className="font-inter text-xl opacity-90">TamuBoost Clusters: Top 15 Winner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Company Overview
              </h2>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2022, Gill Technologies emerged from a desire to tackle World's most pressing challenges through innovation and sustainable impact. What began as a small team of technologists and strategists has evolved into a leading hub for market research, AI development, and product incubation.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                From our first partnership designing a clean-energy cooking solution to large-scale consumer behavior studies for global brands, our journey has been defined by a steadfast commitment to driving economic growth across the continent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-brand-secondary rounded-full p-3 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-spartan font-bold text-lg">Founded in 2022</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-brand-primary rounded-full p-3 mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-spartan font-bold text-lg">Three Core Areas</div>
                    <div className="font-inter text-sm text-gray-600">Innovation • Strategy • Experience</div>
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">Our Approach</h2>
            <p className="font-inter text-gray-600 text-xl max-w-3xl mx-auto">
              We begin with deep-dive workshops and ethnographic studies to uncover unmet needs and market gaps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {approaches.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-brand-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-spartan font-bold text-lg mb-3">{step.title}</h3>
                  <p className="font-inter text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission-Driven Approach Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="AI technology visualization" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Tailored Brand Growth
              </h2>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Over the years we've gained the extensive expertise and tuned our work processes. At Gill Technologies, our mission-driven approach harnesses the power of artificial intelligence and cutting-edge research to propel companies into the future:
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-brand-secondary rounded-full p-2 mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-spartan font-bold text-lg mb-2">{value.title}</h3>
                      <p className="font-inter text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">Achievements & Recognition</h2>
            <p className="font-inter text-gray-600 text-xl max-w-3xl mx-auto">
              Our commitment to innovation and excellence has earned recognition from industry leaders and organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-brand-secondary to-orange-600 p-3 rounded-xl">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-spartan font-bold text-xl mb-4 group-hover:text-brand-secondary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
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
            Ready to Shape the Future Together?
          </h2>
          <p className="font-inter text-orange-100 text-xl mb-10 max-w-3xl mx-auto">
            Join our mission to transform innovative ideas into market-leading solutions that drive economic growth and positive change.
          </p>
          <Button className="bg-white text-brand-secondary hover:bg-gray-100 px-10 py-4 rounded-xl font-inter font-bold">
            Get in Touch Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}