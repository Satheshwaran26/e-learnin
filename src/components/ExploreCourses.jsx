import React from "react";
import { Link } from "react-router-dom";

const ExploreCourses = () => {
  const bestSellingCourses = [
    {
      title: "Become the Developer Companies Need",
      description:
        "Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
      shortDescription: "Full Stack Web Development",
      image: "./assets/web.png", // Fixed the image path
      alt: "Full Stack Development Course Image",
      rating: 4.5,
      path: "/courses/web-dev",
    },
    {
      title: "Become the Developer Companies Need",
      description:
        "Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
      shortDescription: "Full Stack Web Development",
      image: "./assets/app.png", // Fixed the image path
      alt: "Full Stack Development Course Image",
      rating: 4.2,
      path: "/courses/app-dev",
    },
    {
      title: "Become the Developer Companies Need",
      description:
        "Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
      shortDescription: "Full Stack Web Development",
      image: "./assets/python (2).png", // Fixed the image path
      alt: "Full Stack Development Course Image",
      rating: 4.8,
      path: "/courses/software-dev",
    },
  ];

  const renderCourses = (courses) => {
    return courses.map((course, index) => {
      const fullStars = Math.floor(course.rating);
      const halfStar = course.rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      return (
        <div key={index} className="bg-white rounded-3xl border-2 border-gray-100 p-6">
          <img
            alt={course.alt}
            src={course.image}
            className="w-full h-56 object-cover rounded-lg"
          />
          <h2 className="text-xl font-medium text-gray-700 mt-4">{course.title}</h2>
          <p className="text-gray-500 my-2 text-lg ">{course.shortDescription}</p>
          <p className="text-gray-700 mt-2 text-[1em] border-b-2 border-gray-100 pb-4">
            {course.description}
          </p>

          <div className="flex items-center my-2">
            <span className="text-yellow-500 text-2xl">
              {"★".repeat(fullStars)}
              {"☆".repeat(emptyStars)}
            </span>
            <span className="text-gray-500 text-lg ml-2">{course.rating}</span>
          </div>

          <div className="flex my-4">
            <Link to={course.path}>
              <button className="border-2 text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:shadow-md">
                View Course
              </button>
            </Link>
            <button className="hover:shadow-xl bg-gray-900 ml-4 text-white px-4 py-2 rounded-md transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-white text-black my-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-normal text-center text-gray-800 mb-6">
          Explore Our Best Selling Courses
        </h1>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCourses(bestSellingCourses)}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/courses">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
              View More Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
