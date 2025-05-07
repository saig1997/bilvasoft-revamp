import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/solution-logos/Bilvasoft-Logo.png";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="bg-white text-teal-500 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Bilvasoft Logo" width={240} height={80} priority className="w-auto h-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/solutions", label: "Solutions" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium tracking-wide text-base text-teal-500 hover:text-teal-600 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-teal-500"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Open mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col md:hidden">
            <div className="bg-white text-teal-500 w-full p-8 flex flex-col space-y-6 shadow-lg">
              <button
                className="self-end mb-4 text-2xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                &times;
              </button>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/solutions", label: "Solutions" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium tracking-wide text-lg text-teal-500 hover:text-teal-600 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">{children}</main>
      
      <footer className="bg-teal-50 text-teal-500 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6 text-center md:text-left">
              <Image src={logo} alt="Bilvasoft Logo" width={300} height={100} className="w-auto h-auto mb-4 mx-auto md:mx-0" />
              <p className="text-teal-700 text-lg leading-relaxed">Building innovative solutions for a digital future.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-500">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-black hover:text-teal-600 hover:underline transition-colors text-lg">About Us</Link></li>
                <li><Link href="/contact" className="text-black hover:text-teal-600 hover:underline transition-colors text-lg">Contact</Link></li>
                <li><Link href="/careers" className="text-black hover:text-teal-600 hover:underline transition-colors text-lg">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-500">Solutions</h3>
              <ul className="space-y-4">
                <li><Link href="/solutions" className="text-black hover:text-teal-600 hover:underline transition-colors text-lg">Integration Services</Link></li>
                <li><Link href="/solutions" className="text-black hover:text-teal-600 hover:underline transition-colors text-lg">Data Analytics</Link></li>
                <li><Link href="/solutions" className="text-black hover:text-teal-600 hover:underline transition-colors text-lg">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-500">Connect</h3>
              <ul className="space-y-4">
                <li className="text-black text-lg">2150 S Central Expy</li>
                <li className="text-black text-lg">Suite 200</li>
                <li className="text-black text-lg">McKinney, TX 75070</li>
                <li className="text-black mt-6 text-lg">info@bilvasoft.com</li>
                <li className="text-black text-lg">+1-469-344-1376</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-100 mt-12 pt-8 text-center text-teal-400">
            <p className="text-lg">&copy; {new Date().getFullYear()} Bilvasoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

