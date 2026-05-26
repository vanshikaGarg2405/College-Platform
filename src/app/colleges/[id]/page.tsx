import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg p-10 border border-white/40">
        <h1 className="text-5xl font-bold mb-6">
          {college.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-500 mb-2">
              Location
            </p>

            <p className="text-xl font-semibold">
              📍 {college.location}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-500 mb-2">
              Rating
            </p>

            <p className="text-xl font-semibold">
              ⭐ {college.rating}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-500 mb-2">
              Fees
            </p>

            <p className="text-xl font-semibold text-blue-600">
              ₹{college.fees}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-gray-500 mb-2">
              Placements
            </p>

            <p className="text-xl font-semibold">
              {college.placements}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-6">
          <h2 className="text-3xl font-bold mb-4">
            Overview
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            {college.overview}
          </p>
        </div>
      </div>
    </main>
  );
}