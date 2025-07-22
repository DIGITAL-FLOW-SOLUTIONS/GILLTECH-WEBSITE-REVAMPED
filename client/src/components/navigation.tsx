import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/favicon.png" 
                  alt="Gill Technologies Logo" 
                  className="h-8 w-8 mr-2"
                />
                <span className="font-spartan font-bold text-xl text-brand-primary">GillTech</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative">
                <button 
                  className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium flex items-center"
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  Solutions
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {solutionsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <Link href="/innovation" className="block px-4 py-2 font-inter text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200">Innovation</Link>
                    <Link href="/brand-strategy" className="block px-4 py-2 font-inter text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200">Brand Strategy</Link>
                    <Link href="/brand-experience" className="block px-4 py-2 font-inter text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200">Brand Experience</Link>
                  </div>
                )}
              </div>
              <a href="#" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">Case Studies</a>
              <Link href="/about" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">About</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-brand-secondary text-white hover:bg-orange-600 font-inter font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-brand-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <div>
                <button 
                  className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium flex items-center w-full text-left"
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                >
                  Solutions
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href="/innovation" className="block font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200">Innovation</Link>
                    <Link href="/brand-strategy" className="block font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200">Brand Strategy</Link>
                    <Link href="/brand-experience" className="block font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200">Brand Experience</Link>
                  </div>
                )}
              </div>
              <a href="#" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">Case Studies</a>
              <Link href="/about" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">About</Link>
              <Button className="bg-brand-secondary text-white hover:bg-orange-600 font-inter font-semibold w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}