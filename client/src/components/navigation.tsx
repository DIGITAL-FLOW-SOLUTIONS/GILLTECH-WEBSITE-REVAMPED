import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  
  let dropdownTimeout: NodeJS.Timeout;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/favicon.png" 
                alt="Gill Technologies Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="font-spartan font-bold text-2xl text-brand-primary">Gill Technologies</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - moved to right side */}
          <div className="hidden md:flex items-center space-x-4">
            <div 
              className="relative"
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout);
                setSolutionsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout = setTimeout(() => setSolutionsDropdownOpen(false), 200);
              }}
            >
              <button className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium flex items-center">
                Solutions
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link href="/innovation">
                    <div className="block px-4 py-2 font-inter text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200">Innovation</div>
                  </Link>
                  <Link href="/brand-strategy">
                    <div className="block px-4 py-2 font-inter text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200">Brand Strategy</div>
                  </Link>
                  <Link href="/brand-experience">
                    <div className="block px-4 py-2 font-inter text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200">Brand Experience</div>
                  </Link>
                </div>
              )}
            </div>
            <a href="#" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">Case Studies</a>
            <Link href="/about" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">About</Link>
            <Button className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-600 text-white hover:from-orange-600 hover:via-gray-500 hover:to-blue-700 font-inter font-semibold transition-all duration-200 hover:shadow-lg">
              Book a Demo
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
                    <Link href="/innovation">
                      <div className="block font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200">Innovation</div>
                    </Link>
                    <Link href="/brand-strategy">
                      <div className="block font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200">Brand Strategy</div>
                    </Link>
                    <Link href="/brand-experience">
                      <div className="block font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200">Brand Experience</div>
                    </Link>
                  </div>
                )}
              </div>
              <a href="#" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">Case Studies</a>
              <Link href="/about" className="font-inter text-gray-600 hover:text-brand-primary transition-colors duration-200 font-medium">About</Link>
              <Button className="bg-gradient-to-r from-orange-500 via-gray-400 to-blue-600 text-white hover:from-orange-600 hover:via-gray-500 hover:to-blue-700 font-inter font-semibold transition-all duration-200 hover:shadow-lg w-full mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}