import React, { useState } from "react";
import aniya from "./assets/ani.mp4";
// import { useParams } from "react-router-dom";
// Quiz Component
const Quiz = () => {
  const questions = [
    {
      id:1,
      question: "What is the short form of LMS Orientation?",
      options: ["LMS Login", "into", "hai", "bye"],
    },
    {
      question: "Which one is a frontend framework?",
      options: ["React", "Node.js", "MongoDB", "Express"],
    },
     {
      question: "Which one is a frontend framework?",
      options: ["hai", "Nod.js", "MongoB", "Exprss"],
    },
     {
      question: "Which one is a frontend framework?",
      options: ["hai", "Nod.js", "MongoB", "Exprss"],
    },
     {
      question: "Which one is a frontend framework?",
      options: ["hai", "Nod.js", "MongoB", "Exprss"],
    },
  ];

  // const { id } = useParams();
  // const courses = question === id ? Number(id) : 0;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Quiz</h2>

      <div className="mb-6">
        <p className="text-lg font-semibold mb-4">
          {String(currentQuestion + 1).padStart(2, "0")} : {question.question}
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          {question.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 text-base text-gray-800"
            >
              <input
                type="radio"
                name={`question${currentQuestion}`}
                value={option}
                checked={selectedOptions[currentQuestion] === option}
                onChange={handleOptionChange}
                className="accent-blue-700 w-4 h-4"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Syllabus Component
function Name() {
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
    <div className="bg-[#F6FBFE] p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">
        Course <span className="text-[#FC4C4C]">Modules</span>
      </h2>

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
  );
}

// Main Course Page Component
export default function CoursePage() {
  return (
    <>
      {/* Video Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Course Name</h1>
      </div>

      <div className="flex flex-col items-center">
        <video className="w-[1280px] h-[468px] rounded-lg shadow-lg" controls>
          <source src={aniya} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Syllabus and Quiz Section Side-by-Side */}
      <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-20 mt-10">
        {/* Left: Syllabus */}
        <div className="lg:w-1/2 w-full">
          <Name />
        </div>

        {/* Right: Dynamic Quiz */}
        <Quiz />
      </div>
    </>
  );
}
