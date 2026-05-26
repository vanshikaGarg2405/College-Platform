"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border border-gray-200 p-4 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-200 focus:border-blue-400"
      />
    </div>
  );
}