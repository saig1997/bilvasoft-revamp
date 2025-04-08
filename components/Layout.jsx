import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="bg-gray-100 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">Bilvasoft</Link>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Bilvasoft. All rights reserved.</p>
      </footer>
    </div>
  );
}
