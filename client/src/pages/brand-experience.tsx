import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { 
  ArrowRight, 
  Sparkles, 
  Users, 
  Eye,
  Heart,
  Zap,
  Play,
  Award,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Camera,
  Target
} from "lucide-react";

export default function BrandExperience() {
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

  const stats = [
    { icon: Award, number: "5+", label: "Awards Won" },
    { icon: Users, number: "50+", label: "Business Partnerships" }
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-yellow-200 mr-3" />
                <span className="font-inter text-yellow-200 font-semibold">Designing Experiences That Matter in the Digital Age</span>
              </div>
              <h1 className="font-poppins font-bold text-5xl lg:text-6xl leading-tight mb-6">
                Step Inside <br />
                Your <span className="text-yellow-200">Brand's</span> <br />
                World
              </h1>
              <p className="font-inter text-pink-100 text-lg mb-8 leading-relaxed">
                A seamless blend of physical and digital, crafted just for you. From the first touchpoint to the final interaction, every moment is designed to feel personal, authentic, and unforgettable.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-inter font-semibold">
                Get Our Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Brand experience design" 
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Digital experience" 
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-2xl p-4 shadow-lg">
                <Play className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl inline-block mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-spartan font-bold text-3xl text-brand-primary mb-2">{stat.number}</div>
                <div className="font-inter text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-gray-50">
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

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Where Your Brand's Story Comes to Life
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto">
              A seamless blend of physical and digital, crafted just for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Imagine walking into a story—your brand's story—tailored just for you. At Gill Technologies, we design experience-driven journeys that blur the lines between the physical and digital, leaving lasting impressions on your audiences.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                From the first touchpoint to the final interaction, every moment is crafted to feel personal, authentic, and unforgettable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded-full p-3 mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-spartan font-bold text-lg">Personal</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-600 rounded-full p-3 mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-spartan font-bold text-lg">Authentic</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Brand experience design" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Storytelling Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Digital storytelling" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-secondary rounded-2xl p-4 shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Digital Storytelling
              </h2>
              <h3 className="font-inter font-semibold text-xl text-gray-700 mb-6">
                Co-create compelling narratives with your audience
              </h3>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                We believe your customers are the heroes of your brand's story. Through immersive narrative workshops, we bring stakeholders and end users into the creative process, ensuring every twist and turn resonates with real consumer values.
              </p>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <span className="font-inter font-semibold text-gray-700">Customer-Centric Narratives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Brand Experience
              </h2>
              <h3 className="font-inter font-semibold text-xl text-gray-700 mb-6">
                Immersive branding that creates lasting memories
              </h3>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                We believe branding should be more than a visual—it should be a multi-sensory journey that lives in the mind long after the moment has passed. By weaving in sensory integration—from evocative soundscapes and subtle haptic feedback to dynamic visuals—we engage audiences on every level.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Our contextual relevance techniques ensure each interaction feels personal and timely, using AI-driven ambient cues that respond to weather, location, or special events.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded-full p-2 mr-3">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-inter text-sm">Multi-Sensory</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-600 rounded-full p-2 mr-3">
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
      </section>

      {/* UX Design Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="UX design process" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-primary rounded-2xl p-4 shadow-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                UX Design
              </h2>
              <h3 className="font-inter font-semibold text-xl text-gray-700 mb-6">
                Transforming interfaces into intuitive journeys
              </h3>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                At Gill Technologies, every digital touchpoint begins with empathy mapping, where we immerse ourselves in your users' goals, frustrations, and behaviors before a single wireframe is drawn.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                This deep understanding fuels rapid prototyping—clickable mockups and early-stage demos that let us validate ideas in days rather than weeks.
              </p>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-brand-primary mr-3" />
                <span className="font-inter font-semibold text-gray-700">User-Centered Design Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Campaigns Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-8">
                Immersive Campaigns
              </h2>
              <h3 className="font-inter font-semibold text-xl text-gray-700 mb-6">
                Engage audiences with memorable, participatory experiences
              </h3>
              <p className="font-inter text-gray-600 text-lg mb-6 leading-relaxed">
                Our immersive campaigns break past passive advertising by inviting audiences to interact, explore, and play. Augmented reality pop-ups let customers bring products to life in their own space—no app download required, just a simple scan.
              </p>
              <p className="font-inter text-gray-600 text-lg mb-8 leading-relaxed">
                Live virtual events seamlessly blend in-venue guests and online attendees, complete with interactive polling and dynamic networking lounges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-purple-600 rounded-full p-2 mr-3">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-inter text-sm">AR Experiences</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-600 rounded-full p-2 mr-3">
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
            <h2 className="font-spartan font-bold text-4xl text-brand-primary mb-6">
              Key Benefits of Leveraging Gill Technologies' Brand Experience Solutions
            </h2>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Why Choose Gill Technologies for Your Brand Experience Needs?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl inline-block mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-spartan font-bold text-xl mb-4 group-hover:text-purple-600 transition-colors">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-spartan font-bold text-4xl lg:text-5xl text-white mb-6">
            Let's craft your next immersive journey together
          </h2>
          <p className="font-inter text-pink-100 text-xl mb-10 max-w-3xl mx-auto">
            Ready to create brand experiences that captivate, engage, and inspire lasting connections with your audience?
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-inter font-bold">
            Get in Touch for a Brand Experience Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}