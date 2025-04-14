import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-[#121212] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Bilvasoft Logo" width={150} height={50} />
          </Link>
          <nav className="flex space-x-8 text-1rem">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/solutions" className="hover:text-gray-300">Solutions</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <div className="bg-[#000000] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div>
              <h3 className="font-bold mb-2">Microsoft</h3>
              <ul>
                <li>
                  <a href="#">Azure</a>
                </li>
                <li>
                  <a href="#">Microsoft 365</a>
                </li>
                <li>
                  <a href="#">Dynamics 365</a>
                </li>
                <li>
                  <a href="#">Power Platform</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Managed IT</h3>
              <ul>
                <li><a href="#">IT Support</a></li>
                <li><a href="#">Cloud Services</a></li>
                <li><a href="#">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Security Services</h3>
              <ul>
                <li><a href="#">Threat Protection</a></li>
                <li><a href="#">Data Security</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Compliance</h3>
              <ul>
                <li><a href="#">HIPAA</a></li>
                <li><a href="#">PCI DSS</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Industries We Work With</h3>
              <ul>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Retail</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Whitepapers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#121212] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Bilvasoft. All rights reserved.</p>
      </footer>
    </div>
  );
}

