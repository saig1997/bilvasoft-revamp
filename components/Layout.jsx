import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Bilvasoft Logo" width={180} height={60} priority />
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
                className="font-medium tracking-wide text-base hover:text-blue-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-grow">{children}</main>
      
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <Image src={logo} alt="Bilvasoft Logo" width={200} height={70} className="mb-4" priority={false} />
              <p className="text-gray-300 text-lg leading-relaxed">
                Building innovative solutions for a digital future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Solutions</h3>
              <ul className="space-y-4">
                <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">Integration Services</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">Data Analytics</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Connect</h3>
              <ul className="space-y-4">
                <li className="text-gray-300 text-lg">2150 S Central Expy</li>
                <li className="text-gray-300 text-lg">Suite 200</li>
                <li className="text-gray-300 text-lg">McKinney, TX 75070</li>
                <li className="text-gray-300 mt-6 text-lg">info@bilvasoft.com</li>
                <li className="text-gray-300 text-lg">+1-469-344-1376</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; {new Date().getFullYear()} Bilvasoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

