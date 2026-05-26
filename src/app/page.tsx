import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">
          Discover Your Dream College
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Search, compare, and save top colleges
          across India with a modern discovery
          experience.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/colleges"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg"
          >
            Explore Colleges
          </Link>

          <Link
            href="/compare"
            className="border border-black px-6 py-3 rounded-xl text-lg"
          >
            Compare Colleges
          </Link>
        </div>
      </div>
    </main>
  );
}