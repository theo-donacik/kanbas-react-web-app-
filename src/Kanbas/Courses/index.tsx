import { useState, useEffect } from "react";
import axios from "axios";
import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css"
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses({ courses } : any) {
  const { courseId } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  const location = useLocation()
  const pathList = location.pathname.split('/')

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <h1 className="wd-course-title"><HiMiniBars3 />
        Course {course?.name}
        {' > '}
        {pathList.slice(4).join(">")} 
      </h1>
      <div className="d-flex">
        <CourseNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;
