import { useState } from "react";
import grass from '../assets/house.png';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Dhilip() {
  const [filter, setFilter] = useState("all"); // Tracks selected category

  const { id } = useParams(); // Get the id from the URL
  // const dhilip = vendor
  const [dhi] = useState([
    {
      id: 1,
      img: grass,
      name: "Course Name",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples",
      rate: "52hrs",
      star: "4/5",
      status: "all",
    },
    {
      id: 2,
      img: grass,
      name: "React Course",
      para: "Learn React step-by-step with projects.",
      rate: "40hrs",
      star: "4.5/5",
      status: "progress",
    },
    {
      id: 3,
      img: grass,
      name: "Node.js Course",
      para: "Backend development with Node.js.",
      rate: "60hrs",
      star: "5/5",
      status: "completed",
    },
    {
      id: 4,
      img: grass,
      name: "UI/UX Design",
      para: "Design stunning user interfaces.",
      rate: "30hrs",
      star: "3.5/5",
      status: "progress",
    },
    {
      id: 5,
      img: grass,
      name: "UI/UX Design",
      para: "Design stunning user interfaces.",
      rate: "30hrs",
      star: "3.5/5",
      status: "progress",
    },
  ]);

  const filteredCourses =
    filter === "all" ? dhi : dhi.filter((item) => item.status === filter);

  return (
    <>
     <div>
        <Link to={"/"}><h1 className="border border-red-400   text-[#12314a]">Home</h1></Link>
        <Link to={"/page"}><h1 className="border border-red-400   text-[#12314a]">video</h1></Link>
        <Link to={"/learning"}><h1 className="border border-red-400   text-[#12314a]">learn</h1></Link>
     </div>
      <div className="flex gap-5 text-[#00338D] cursor-pointer text-2xl ml-[30px] mt-[30px]">
        <p>All Course</p>
        <p>My Courses</p>
        <p>Paid Courses</p>
        <p>Free Courses</p>
      </div>

      <div className="flex gap-4 mt-[30px] ml-[30px]">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded cursor-pointer transition ${
            filter === "all"
              ? "bg-[#002766] text-white"
              : "bg-[#D3D3D3] text-[#4A4A4A] hover:bg-[#002766] hover:text-white"
          }`}
        >
          All Course
        </button>
        <button
          onClick={() => setFilter("progress")}
          className={`px-4 py-2 rounded cursor-pointer transition ${
            filter === "progress"
              ? "bg-[#002766] text-white"
              : "bg-[#D3D3D3] text-[#4A4A4A] hover:bg-[#002766] hover:text-white"
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded cursor-pointer transition ${
            filter === "completed"
              ? "bg-[#002766] text-white"
              : "bg-[#D3D3D3] text-[#4A4A4A] hover:bg-[#002766] hover:text-white"
          }`}
        >
          Completed
        </button>
        
              </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        
        {filteredCourses.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition "
          >
            <div>
            <img
              src={item.img}
              alt="Course"
              className="w-full h-48 object-cover rounded"
            />
            </div>
            <div>
            <div className="mb-100]">
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.para}</p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
              <span>⏱ {item.rate}</span>
              <span>⭐ {item.star}</span>
            </div>
            <button className="bg-[#12314a] center w-full h-[40px]"><Link to={`//${filteredCourses.id}`}>Click Here</Link></button>
            </div>
           </div>        
          </div>
        ))}
      </div>
    </>
  );
}

export default Dhilip;
