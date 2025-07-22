import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Trophy,
  Lightbulb,
  TrendingUp,
  Star,
  CheckCircle
} from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function About() {
  const achievements = [
    {
      title: "Fortune 500 Collaborations",
      description: "Executed market research that redefined product strategies for global leaders, boosting their market share and customer engagement.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/bg-img-01.jpg"
    },
    {
      title: "AI Engagement Models",
      description: "Developed predictive consumer-engagement frameworks that increased conversion rates by up to 30% for major brands.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/bg-img-02.jpg"
    },
    {
      title: "Global Industry Impact",
      description: "Featured speakers and panelists at international conferences, sharing best practices in AI-driven research and sustainable innovation.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/bg-img-01.jpg"
    },
    {
      title: "Community Partnerships",
      description: "Co-created technology initiatives with NGOs and social enterprises, delivering scalable solutions in health, agriculture, and education.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/bg-img-02.jpg"
    },
    {
      title: "DISH Competition 2024 Finalist",
      description: "Our TamuBoost Clusters project was honored for tackling childhood malnutrition in underserved communities.",
      image: "https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/bg-img-01.jpg"
    }
  ];

  const processSteps = [
    "Discover & Define",
    "Data-Driven Analysis", 
    "Ideation & Prototyping",
    "Validation & Refinement",
    "Launch & Scale"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-spartan font-bold text-5xl lg:text-6xl mb-6">
              Meet the Gill Technologies Team
            </h1>
            <p className="font-inter text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              For years we've been on a mission to help our clients' companies reveal their 
              full potential by providing them with All-in-One AI Solution for Market Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/new_team_grid_gill.png" 
            alt="Gill Technologies Team" 
            className="rounded-2xl shadow-xl mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
              You're in Good Hands
            </h2>
            <div className="bg-gradient-to-r from-brand-secondary to-orange-600 rounded-2xl p-8 max-w-2xl mx-auto">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/Dish-competition-logo.png" 
                alt="DISH Competition Logo" 
                className="mx-auto mb-4 h-16"
              />
              <h3 className="font-spartan font-bold text-2xl text-white mb-2">
                Proud finalists of the DISH Competition 2024
              </h3>
              <p className="font-inter text-orange-100 text-lg">
                TamuBoost Clusters: Top 15 Winner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-6">
                The Foundation
              </h2>
              <h3 className="font-spartan font-bold text-3xl text-gray-800 mb-6">
                Company Overview
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                Founded in 2022, Gill Technologies emerged from a desire to tackle World's most pressing 
                challenges through innovation and sustainable impact. What began as a small team of 
                technologists and strategists has evolved into a leading hub for market research, AI 
                development, and product incubation.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                From our first partnership designing a clean-energy cooking solution to large-scale 
                consumer behavior studies for global brands, our journey has been defined by a steadfast 
                commitment to driving economic growth across the continent.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-brand-secondary rounded-full p-2 mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-inter font-semibold text-gray-800">Founded in 2022</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-brand-primary rounded-full p-2 mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-inter text-gray-600">
                    <div>1. Innovation</div>
                    <div>2. Strategy</div>
                    <div>3. Experience</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/about_img_1.png" 
                alt="About Image 1" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/about_img_2.png" 
                alt="About Image 2" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
                Our Approach
              </h2>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                We begin with deep-dive workshops and ethnographic studies to uncover unmet needs and market gaps.
              </p>
              
              <div className="space-y-4 mb-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-brand-secondary rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="font-inter font-bold text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="font-inter font-semibold text-gray-800">{step}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-4">
                Tailored Brand Growth
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                At Gill Technologies, our mission-driven approach harnesses the power of artificial 
                intelligence and cutting-edge research to propel companies into the future.
              </p>
            </div>
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/about/about_img_4.avif" 
                alt="Our Approach" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Over the years we've gained extensive expertise
            </h2>
            <p className="font-inter text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              At Gill Technologies, our mission-driven approach harnesses the power of artificial intelligence 
              and cutting-edge research to propel companies into the future:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-brand-primary to-blue-800 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  AI-Powered Insights
                </h3>
                <p className="font-inter text-gray-600">
                  Leverage predictive analytics to understand Gen Z and Millennial behaviors, 
                  ensuring your campaigns resonate deeply.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-brand-secondary to-orange-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  End-to-End Market Research
                </h3>
                <p className="font-inter text-gray-600">
                  From competitor benchmarking to brand positioning, our holistic analysis 
                  equips you with a clear path to market leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-spartan font-bold text-xl text-brand-primary mb-4">
                  Tailored Brand Growth
                </h3>
                <p className="font-inter text-gray-600">
                  We combine digital storytelling with experiential design to build authentic 
                  connections and foster customer loyalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-6">
              Achievements & Recognition
            </h2>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="font-spartan font-bold text-white text-lg">{index + 1}</span>
                    </div>
                    <h3 className="font-spartan font-bold text-2xl text-brand-primary">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="font-inter text-gray-600 text-lg leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            Ready to Shape the Future Together?
          </h2>
          <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold text-lg">
            Get in touch today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}