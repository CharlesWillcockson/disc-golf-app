import { createContext, useState } from "react";

import COURSES from "../courseData.json";

export const CoursesContext = createContext({
  courses: [],
});

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(COURSES);
  const value = { courses };
  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};
