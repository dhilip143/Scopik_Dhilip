import React from "react";
import land from "./assets/landing.png";
import logo1 from "./assets/logo1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
// import eart from "../assets/Earth.png"

function Course() {
    return (
        <>
            <div
                
                className="relative w-full h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${land})` }}
            >
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-10 py-20">
                    {/* Left Section */}
                    <div className="max-w-xl text-gray-800">
                        <h1 className="text-4xl font-bold text-blue-900 mb-6">3D Design</h1>
                        <p className="text-lg leading-relaxed mb-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <button class="relative inline-block px-10 py-3 md:px-12 text-white text-sm font-medium [background-color:#084D90] border border-[#084D90] rounded-md shadow-[4px_4px_0_0_#fff,4px_4px_0_1px_#000] hover:shadow-[4px_4px_0_0_#fff,4px_4px_0_1px_#000] active:shadow-[2px_2px_0_0_#fff,2px_2px_0_1px_#000] active:translate-x-[2px] active:translate-y-[2px] focus:outline-none">
                        Enroll Now
</button>



                    </div>

                    {/* Right Section */}
                    <div className=" mt-[300px]">
                        <div className="bg-white rounded-2xl shadow-lg p-6 w-96 flex flex-col gap-4">
                            <div className="text-3xl font-semibold text-blue-900">₹ 35,000</div>
                            <div className="text-sm text-gray-500">32k Enrolled</div>
                            <div className="">
                            <div className="flex gap-2 mt-[4] text-gray-700">
                                <div className="flex items gap-1">
                                    <span>📘</span> Intermediate
                                </div>
                                <div className="flex items gap-1">
                                    <span>📅</span> January 30
                                </div>
                                <div className="flex items gap-1">
                                    <span>📄</span> Certificate
                                </div>
                            </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="h-[72px] flex items-center  gap-x-6 border border-gray-300 rounded-md  mx-auto mt-6  px-4 w-1440   ">
                
                <AnchorLink className="anchor-link" href="">
                    <p className="cursor-pointer text-gray-700 hover:text-[#FFA705] ">About</p>
                </AnchorLink>
                <AnchorLink className="anchor-link" href="#course">
                    <p className="cursor-pointer text-gray-700 hover:text-[#FFA705] ">Course</p>
                </AnchorLink>
                <AnchorLink className="anchor-link" href="#cerficate">
                <p className="cursor-pointer text-gray-700 hover:text-[#FFA705] ">Certificate</p>
                </AnchorLink>
                <AnchorLink className="anchor-link"href="#related">
                <p className="cursor-pointer text-gray-700 hover:text-[#FFA705]">Related Course</p>
                </AnchorLink>
                <AnchorLink className="anchor-link"href="#reviews" >
                <p className="cursor-pointer text-gray-700 hover:text-[#FFA705]">Reviews</p>
                </AnchorLink>
                </div>
            

            {/* What You'll Learn Section */}
            <div className="mt-8 px-[90px]">
                <h1
                    className="text-[#004C8E] text-2xl font-medium"
                    style={{ fontFamily: "Newsreader" }}
                >
                    What You’ll Learn
                </h1>
                <h2 className="text-lg font-inter mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book...
                </h2>
            </div>

            {/* Logo Info Section */}
            <div  className="grid grid-cols-2 md:grid-cols-4 gap-6 px-[90px] mt-10 text-center">
                <div>
                    <img src={logo1} alt="Students" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">12,836</h3>
                    <p className="text-sm">Students</p>
                </div>
                <div>
                    <img src={logo1} alt="Detailed Classes" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Detailed</h3>
                    <p className="text-sm">Classes</p>
                </div>
                <div>
                    <img src={logo1} alt="Courses" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">35+</h3>
                    <p className="text-sm">Courses</p>
                </div>
                <div>
                    <img src={logo1} alt="Staff" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Professional</h3>
                    <p className="text-sm">Staff</p>
                </div>
            </div>
            

        </>
    );
}

export default Course;
