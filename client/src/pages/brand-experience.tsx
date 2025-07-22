import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Smartphone, 
  Users, 
  Eye, 
  Zap,
  Award,
  Target,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function BrandExperience() {
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

  const stats = [
    { icon: Award, number: "5+", label: "Awards Win" },
    { icon: Users, number: "50+", label: "Business partnerships" }
  ];

  const benefits = [
    {
      benefit: "Deeper Engagement",
      impact: "Interactive experiences increase dwell time by an average of 60%."
    },
    {
      benefit: "Stronger Loyalty",
      impact: "Personalized journeys foster emotional bonds, boosting repeat purchase rates by up to 35%."
    },
    {
      benefit: "Data-Backed Optimization",
      impact: "Real-time analytics let you pivot mid-campaign—maximizing ROI and reducing wasted budget."
    },
    {
      benefit: "Cross-Channel Consistency",
      impact: "Seamless handoffs between in-store, mobile, and web interactions create unified brand impressions."
    },
    {
      benefit: "Scalable Impact",
      impact: "From local activations to global rollouts, our modular frameworks adapt to any budget and geography."
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
                <span className="font-inter font-semibold text-white">Designing Experiences That Matter in the Digital Age</span>
              </div>
              <h1 className="font-spartan font-bold text-5xl lg:text-6xl mb-6 leading-tight">
                Step Inside Your Brand's World
              </h1>
              <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold">
                Get Our Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/hero-experience-2.png" 
                alt="Brand Experience Visual 1" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/hero-experience-1.png" 
                alt="Brand Experience Visual 2" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-brand-secondary rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-spartan font-bold text-3xl text-brand-primary mb-2">
                  {stat.number}
                </div>
                <p className="font-inter text-gray-600">{stat.label}</p>
              </div>
            ))}
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

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-brand-primary mb-6">
              Where Your Brand's Story Comes to Life
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
              A seamless blend of physical and digital, crafted just for you
            </h3>
            <p className="font-inter text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Imagine walking into a story—your brand's story—tailored just for you. At Gill Technologies, 
              we design experience-driven journeys that blur the lines between the physical and digital, 
              leaving lasting impressions on your audiences.
            </p>
            <p className="font-inter text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mt-4">
              From the first touchpoint to the final interaction, every moment is crafted to feel personal, 
              authentic, and unforgettable.
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-first-Solution-1.avif" 
              alt="Brand Story Experience" 
              className="rounded-2xl shadow-xl mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Digital Storytelling Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-second-Solution-1.avif" 
                alt="Digital Storytelling" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Digital Storytelling
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
                Co-create compelling narratives with your audience
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                We believe your customers are the heroes of your brand's story. Through immersive narrative workshops, 
                we bring stakeholders and end users into the creative process, ensuring every twist and turn resonates 
                with real consumer values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Brand Experience
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
                Immersive branding that creates lasting memories
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                We believe branding should be more than a visual—it should be a multi-sensory journey that lives in 
                the mind long after the moment has passed. By weaving in sensory integration—from evocative soundscapes 
                and subtle haptic feedback to dynamic visuals—we engage audiences on every level.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                Our contextual relevance techniques ensure each interaction feels personal and timely, using AI-driven 
                ambient cues that respond to weather, location, or special events.
              </p>
            </div>
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-third-Solution-1.jpg" 
                alt="Brand Experience" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UX Design Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-fourth-Solution-1.avif" 
                alt="UX Design" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                UX Design
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
                Transforming interfaces into intuitive journeys
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                At Gill Technologies, every digital touchpoint begins with empathy mapping, where we immerse ourselves 
                in your users' goals, frustrations, and behaviors before a single wireframe is drawn.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                This deep understanding fuels rapid prototyping—clickable mockups and early-stage demos that let us 
                validate ideas in days rather than weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Campaigns Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-4">
                Immersive Campaigns
              </h2>
              <h3 className="font-spartan font-bold text-2xl text-brand-secondary mb-6">
                Engage audiences with memorable, participatory experiences
              </h3>
              <p className="font-inter text-gray-600 text-lg leading-relaxed mb-6">
                Our immersive campaigns break past passive advertising by inviting audiences to interact, explore, and play. 
                Augmented reality pop-ups let customers bring products to life in their own space—no app download required, 
                just a simple scan.
              </p>
              <p className="font-inter text-gray-600 text-lg leading-relaxed">
                Live virtual events seamlessly blend in-venue guests and online attendees, complete with interactive 
                polling and dynamic networking lounges.
              </p>
            </div>
            <div>
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/service/experience-fifth-Solution-1.avif" 
                alt="Immersive Campaigns" 
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
              Key Benefits of Leveraging Gill Technologies' Brand Experience Solutions
            </h2>
            <h3 className="font-spartan font-bold text-2xl text-brand-secondary">
              Why Choose Gill Technologies for Your Brand Experience Needs?
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
            Let's craft your next immersive journey together
          </h2>
          <Button className="bg-brand-secondary text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-inter font-semibold text-lg">
            Get in Touch for a Brand Experience Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}