import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <header className="bg-[#121212] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Bilvasoft Logo" width={150} height={50} />
          </Link>
          <nav className="flex space-x-8 text-1rem">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="/solutions" className="hover:text-blue-400 transition-colors">Solutions</Link>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">{children}</main>
      
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Integration Services</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Data Analytics</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Connect</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">2150 S Central Expy</li>
                <li className="text-gray-300">Suite 200</li>
                <li className="text-gray-300">McKinney, TX 75070</li>
                <li className="text-gray-300 mt-4">info@bilvasoft.com</li>
                <li className="text-gray-300">+1-469-344-1376</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bilvasoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

