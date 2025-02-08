import React from "react";
import { useParams, Link } from "react-router-dom";

const Courses = ({ showAll }) => {
  const courses = [
    { id: "web-dev", title: "Full Stack Web Development", description: "Learn front-end to back-end development." },
    { id: "app-dev", title: "App Development", description: "Build Android and iOS applications." },
    { id: "software-dev", title: "Software Development", description: "Learn software development principles." },
  ];

  const { courseId } = useParams();
  const course = courses.find(course => course.id === courseId);

  if (showAll) {
    return (
      <div>
        <h1>All Courses</h1>
        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <Link to={`/courses/${course.id}`} className="text-blue-500">View Course</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (course) {
    return (
      <div>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </div>
    );
  }

  return <div>No course found!</div>;
};

export default Courses;
