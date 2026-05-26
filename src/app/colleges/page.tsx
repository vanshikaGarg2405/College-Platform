"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
  placements: string;
};

export default function CollegesPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchColleges() {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/colleges?search=${search}&location=${location}&rating=${rating}`
      );

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();

      setColleges(data);

      setError("");
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchColleges();
  }, [search, location, rating]);

  function saveCollege(college: College) {
    const saved = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    const alreadySaved = saved.find(
      (item: College) => item.id === college.id
    );

    if (alreadySaved) {
      alert("College already saved!");
      return;
    }

    saved.push(college);

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(saved)
    );

    alert("College saved!");
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="mb-12">
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
            Explore Colleges
          </h1>

          <p className="text-gray-600 text-xl leading-8 max-w-2xl">
            Search, filter, compare and discover
            top engineering colleges across India
            with a modern discovery experience.
          </p>
        </div>

        {/* Filters */}

        <div className="grid md:grid-cols-3 gap-4 mb-12 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/40">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <input
            type="text"
            placeholder="Filter by location"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="border border-gray-200 p-4 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-200 focus:border-blue-400"
          />

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
            className="border border-gray-200 p-4 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-200 focus:border-blue-400"
          >
            <option value="">
              Filter by rating
            </option>

            <option value="4">
              4+ Rating
            </option>

            <option value="4.5">
              4.5+ Rating
            </option>

            <option value="4.8">
              4.8+ Rating
            </option>
          </select>
        </div>

        {/* Loading */}

        {loading && (
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-md text-center">
            <p className="text-xl font-semibold">
              Loading colleges...
            </p>
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="bg-red-100 text-red-600 rounded-2xl p-6 text-lg font-medium">
            {error}
          </div>
        )}

        {/* Empty State */}

        {!loading &&
          !error &&
          colleges.length === 0 && (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-md text-center">
              <h2 className="text-2xl font-bold mb-3">
                No colleges found
              </h2>

              <p className="text-gray-600">
                Try changing your search or
                filters.
              </p>
            </div>
          )}

        {/* College Cards */}

        {!loading &&
          !error &&
          colleges.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {colleges.map((college) => (
                <div
                  key={college.id}
                  className="card-hover p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Top */}

                    <div className="flex items-start justify-between mb-5">
                      <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                        {college.name}
                      </h2>

                      <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
                        ⭐ {college.rating}
                      </span>
                    </div>

                    {/* Location */}

                    <p className="text-gray-500 mb-4 text-lg">
                      📍 {college.location}
                    </p>

                    {/* Fees */}

                    <div className="mb-5">
                      <p className="font-bold text-3xl text-blue-600">
                        ₹{college.fees}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Average Tuition Fees
                      </p>
                    </div>

                    {/* Overview */}

                    <div className="min-h-[100px]">
                      <p className="text-gray-700 leading-8">
                        {college.overview}
                      </p>
                    </div>

                    {/* Placement */}

                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 my-6 min-h-[95px] border border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">
                        Placements
                      </p>

                      <p className="font-semibold text-lg">
                        {college.placements}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4 mt-auto">
                    <Link
                      href={`/colleges/${college.id}`}
                      className="flex-1 text-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-3 rounded-2xl hover:scale-105 hover:shadow-lg"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() =>
                        saveCollege(college)
                      }
                      className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-3 rounded-2xl hover:scale-105 hover:shadow-xl"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </main>
  );
}