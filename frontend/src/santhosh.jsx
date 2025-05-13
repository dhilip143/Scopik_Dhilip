import { useState } from "react";

// Dummy course data
const courses = [
  { id: 1, name: "AI Fundamentals", status: "All",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples", duration: 52, rating: 4.5 },
  { id: 2, name: "React Basics", status: "Completed",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples", duration: 48, rating: 4.7 },
  { id: 3, name: "3D Modelling", status: "In Progress",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples", duration: 60, rating: 4.2 },
  { id: 4, name: "Interior Design", status: "All",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples", duration: 50, rating: 4.3 },
  { id: 5, name: "Python for Data Science", status: "Current",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples", duration: 72, rating: 4.8 },
  { id: 5, name: "Python for Data Science", status: "Completed",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples", duration: 72, rating: 4.8 },
  // ...add more courses here
];

export default function Santhosh() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredCourses = courses
    .filter(course =>
      (filter === "All" || course.status === filter) &&
      course.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "duration") return b.duration - a.duration;
      return 0;
    });

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-8 mb-4 px-4 py-2 text-2xl text-[#00338D] font-semibold shadow-md">
        {["All", "In Progress","Course", "Completed",].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`${
              filter === status ? "border-b-2 pb-2 border-blue-500" : "border-blue-800"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="name">Sort by Name</option>
          <option value="rating">Sort by Rating</option>
          <option value="duration">Sort by Duration</option>
        </select>

        <input
          type="text"
          placeholder="Search any course..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredCourses.map((course) => (
    <div
      key={course.id}
      className="bg-white rounded-xl shadow transition-all duration-500 overflow-hidden max-h-[300px] hover:max-h-[500px] hover:shadow-lg p-4"
    >
      {/* Image or placeholder */}
      <div className="aspect-video bg-gray-200 rounded mb-4"></div>

      {/* Course name */}
      <h3 className="text-lg font-bold mb-2">{course.name}</h3>
     

      {/* Duration & Rating */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
          ⏱ {course.duration} Hrs
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">
          ⭐ {course.rating}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-2">
        {course.description}
      </p>

      {/* Read More link */}
      <a href="#" className="text-red-600 text-sm font-semibold">
        Read more
      </a>
    </div>
  ))}
</div>




    </div>
  );
}
