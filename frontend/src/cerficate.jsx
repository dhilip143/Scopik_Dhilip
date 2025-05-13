import React from 'react';
import grp from './assets/Group.png';
import gpn from './assets/Big Data.png';
import gpn2 from './assets/32.png';

function Certificate() {
  const course = [
    {
      id: 1,
      img: gpn2,
      head: "Course",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Samples"
    },
    {
      // id: 2,
      // img: 
      // head: "Course",
      // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Samples"
    }
  ];

  return (
    <>
      <div id='cerficate' className="flex flex-col items-center mt-10">
        <h1 className="text-[#003C71] text-2xl font-bold mb-4 text-center">Certificate</h1>
        
        {/* <img src={gpn} alt="Big Data" className="max-w-full h-auto mb-4" /> */}
        <img src={grp} alt="Certificate Graphic" className="max-w-full h-auto" />
      </div>

      <div>
        {/* You can use the `course` array here if needed */}
      </div>

      <div>
        
        {course.map((courses) => (
          <div key={courses.id}>
            <img src={courses.img} alt={courses.head} />

            <h1>{courses.head}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Certificate;
