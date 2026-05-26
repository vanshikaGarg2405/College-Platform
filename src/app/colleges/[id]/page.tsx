async function getCollege(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/colleges/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch college");
  }

  return res.json();
}

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await getCollege(id);

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">
        {college.name}
      </h1>

      <div className="space-y-4 text-lg">
        <p>
          📍 <strong>Location:</strong>{" "}
          {college.location}
        </p>

        <p>
          💰 <strong>Fees:</strong> ₹
          {college.fees}
        </p>

        <p>
          ⭐ <strong>Rating:</strong>{" "}
          {college.rating}
        </p>

        <p>
          🎓 <strong>Placements:</strong>{" "}
          {college.placements}
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Overview
          </h2>

          <p className="text-gray-700">
            {college.overview}
          </p>
        </div>
      </div>
    </main>
  );
}