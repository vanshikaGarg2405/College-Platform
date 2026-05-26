import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
        >
          CollegeFinder
        </Link>

        <div className="flex items-center gap-8 font-medium text-gray-700">
          <Link
            href="/colleges"
            className="hover:text-blue-600 hover:scale-105"
          >
            Colleges
          </Link>

          <Link
            href="/compare"
            className="hover:text-blue-600 hover:scale-105"
          >
            Compare
          </Link>

          <Link
            href="/saved"
            className="hover:text-blue-600 hover:scale-105"
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}