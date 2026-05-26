"use client";

import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function SavedPage() {
  const [savedColleges, setSavedColleges] = useState<
    College[]
  >([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    setSavedColleges(saved);
  }, []);

  function removeCollege(id: string) {
    const updated = savedColleges.filter(
      (college) => college.id !== id
    );

    setSavedColleges(updated);

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(updated)
    );
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p className="text-lg">
          No saved colleges yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedColleges.map((college) => (
            <div
              key={college.id}
              className="border rounded-xl p-5 shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {college.name}
              </h2>

              <p className="mb-2">
                📍 {college.location}
              </p>

              <p className="mb-2">
                💰 Fees: ₹{college.fees}
              </p>

              <p className="mb-4">
                ⭐ Rating: {college.rating}
              </p>

              <button
                onClick={() =>
                  removeCollege(college.id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}