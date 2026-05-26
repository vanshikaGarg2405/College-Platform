"use client";

import { useEffect, useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements: string;
};

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  function toggleCollege(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      if (selected.length < 3) {
        setSelected([...selected, id]);
      }
    }
  }

  const comparedColleges = colleges.filter((college) =>
    selected.includes(college.id)
  );

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Compare Colleges
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="border p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">
              {college.name}
            </h2>

            <button
              onClick={() => toggleCollege(college.id)}
              className={`mt-3 px-4 py-2 rounded-lg text-white ${
                selected.includes(college.id)
                  ? "bg-red-500"
                  : "bg-black"
              }`}
            >
              {selected.includes(college.id)
                ? "Remove"
                : "Compare"}
            </button>
          </div>
        ))}
      </div>

      {comparedColleges.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">
                  Feature
                </th>

                {comparedColleges.map((college) => (
                  <th
                    key={college.id}
                    className="border p-3"
                  >
                    {college.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3 font-semibold">
                  Location
                </td>

                {comparedColleges.map((college) => (
                  <td
                    key={college.id}
                    className="border p-3"
                  >
                    {college.location}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  Fees
                </td>

                {comparedColleges.map((college) => (
                  <td
                    key={college.id}
                    className="border p-3"
                  >
                    ₹{college.fees}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  Rating
                </td>

                {comparedColleges.map((college) => (
                  <td
                    key={college.id}
                    className="border p-3"
                  >
                    ⭐ {college.rating}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="border p-3 font-semibold">
                  Placements
                </td>

                {comparedColleges.map((college) => (
                  <td
                    key={college.id}
                    className="border p-3"
                  >
                    {college.placements}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}