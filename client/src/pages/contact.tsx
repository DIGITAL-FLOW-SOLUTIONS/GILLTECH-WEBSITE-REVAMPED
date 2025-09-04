"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const faqItems = [
    {
      question: "How do you approach brand strategy development?",
      answer: "We begin with comprehensive market research and competitive analysis to understand your position. Our strategic approach combines data-driven insights with creative thinking to develop a unique brand positioning that resonates with your target audience and drives business growth."
    },
    {
      question: "What's included in your innovation consulting?",
      answer: "Our innovation consulting includes market opportunity assessment, concept development and validation, prototype creation, testing methodologies, and implementation roadmaps. We help you transform ideas into market-ready solutions with measurable impact."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Brand strategy projects typically take 8-12 weeks, while innovation consulting can range from 6-16 weeks. We provide detailed timelines during our initial consultation to ensure clear expectations."
    },
    {
      question: "Do you work with startups and enterprises?",
      answer: "Yes, we work with companies of all sizes, from early-stage startups to Fortune 500 enterprises. Our approach is tailored to each client's unique needs, resources, and market position to deliver maximum value and impact."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-spartan font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Have any questions?<br />
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                We're happy to answer them!
              </span>
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team of experts to discuss your project needs, explore partnership opportunities, or learn more about how we can help transform your business through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 md:p-12">
              
                <h2 className="font-spartan font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 text-center">
                  <span className="bg-gradient-to-r from-blue-500 to-orange-600 bg-clip-text text-transparent">
                    Get In Touch 
                  </span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg font-inter text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 border border-gray-200 rounded-lg font-inter text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-inter text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500 transition-colors resize-none"
                      placeholder="Tell us about your project or ask us anything..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-inter font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="font-spartan font-bold text-3xl md:text-4xl text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="border border-gray-200 bg-white">
                  <Collapsible
                    open={openFaq === index}
                    onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <h3 className="font-inter font-semibold text-left text-gray-900">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0 ml-4">
                          {openFaq === index ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="font-inter text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}