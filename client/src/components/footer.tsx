import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/favicon.png" 
                alt="Gill Technologies Logo" 
                className="h-10 w-10 mr-3"
              />
              <span className="font-spartan font-bold text-2xl text-white">Gill Technologies</span>
            </div>
            <p className="font-inter text-gray-300 text-lg mb-6 max-w-md">
              Transforming innovation into market-leading solutions. We help brands build impactful experiences through AI-driven insights and strategic innovation.
            </p>
            <div className="text-brand-secondary font-inter font-semibold text-lg">Dream. Build. Grow.</div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-spartan font-bold text-lg text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">AI Strategy</a></li>
              <li><Link href="/brand-strategy" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Brand Strategy</Link></li>
              <li><Link href="/innovation" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Innovation</Link></li>
              <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Brand Experience</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-spartan font-bold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">About Us</Link></li>
              <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="font-inter text-gray-300 hover:text-brand-secondary transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
           <p className="font-inter text-gray-400 text-sm">
              © {new Date().getFullYear()} Gill Technologies. All rights reserved.
            </p>
             <div className="flex items-center mt-4">
             <a href="https://www.digitalflwsolutions.com/" 
                className="font-inter text-gray-400 hover:text-brand-secondary text-sm flex items-center">
  <span>
    Design made by
  </span>
  <img 
    src="https://digital-flow-solutions.github.io/Gill-Technologies-Website/img/logo_dfs.png" 
    alt="Digital Flow Solutions Logo" 
    className="h-5 w-30 ml-3"
  />
</a>

            </div>


          </div>
        </div>
      </div>
    </footer>
  );
}