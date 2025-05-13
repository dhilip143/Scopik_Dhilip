import { useState } from "react";
// import grp from "./assets/group.png";
// // import good from "../assets/Good Certificate.png";
// import worldMap from "../assets/Earth.png";

function Syllabus() {
  const [openIndex, setOpenIndex] = useState(null);

  const syllabus = [
    {
      title: "01 : LMS Orientation",
      items: ["LMS Login", "Intro"],
    },
    {
      title: "02 : Elective - Sound Design",
      items: ["LMS Login", "Intro"],
    },
    {
      title: "03 : Video Production",
      items: ["LMS Login", "Intro"],
    },
    {
      title: "04 : VR Application Development",
      items: ["LMS Login", "Intro"],
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>
    
      {/* Course Modules Section */}
      <div id="course" className="bg-[#F6FBFE] px-6 md:px-[100px] py-10   item-center">
        <div className="w-[1248px]  ml-[100px]">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            Course <span className="text-[#FC4C4C]">Modules</span>
          </h2>

          <div className="w-full max-w-5xl">
            {syllabus.map((section, index) => (
              <div
                key={index}
                className="border-b py-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <strong>{section.title}</strong>
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </div>
                {openIndex === index && (
                  <ul className="ml-4 mt-2 list-disc text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
     
      </>
  );
}

export default Syllabus;
