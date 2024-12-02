import React, { useState } from 'react';

const Checklist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [course, setCourse] = useState('CS'); // Add state to determine the course (CS or IT)

  // List of semesters and their courses
  const csSemesters = [
    {
      label: 'First Year, First Semester',
      courses: [
        { code: 'GNED 02', name: 'Ethics', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'GNED 05', name: 'Purposive Communication', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'GNED 11', name: 'Kontekstwalisadong Komunikasyon sa Filipino', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'COSC 50', name: 'Discrete Structures', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 21', name: 'Introduction to Computing', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 22', name: 'Computer Programming I', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'FITT 1', name: 'Movement Enhancement', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'NSTP 1', name: 'National Service Training Program 1', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'CvSU 101', name: 'Institutional Orientation', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
      ],
    },
    {
      label: 'First Year, Second Semester',
      courses: [
        { code: 'GNED 01', name: 'Art Appreciation', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'GNED 03', name: 'Mathematics in the Modern World', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'GNED 06', name: 'Science, Technology, and Society', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'GNED 12', name: 'Dalumat Ng/Sa Filipino', prerequisite: 'GNED 11', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 23', name: 'Computer Programming II', prerequisite: 'DCIT 22', grade: 'N/A', instructor: 'TBA' },
        { code: 'ITEC 50', name: 'Web Systems and Technologies', prerequisite: 'DCiT 21', grade: 'N/A', instructor: 'TBA' },
        { code: 'FITT 2', name: 'Fitness Exercises', prerequisite: 'None', grade: 'FITT 1', instructor: 'TBA' },
        { code: 'NSTP 2', name: 'National Service Training Program 2', prerequisite: 'NSTP 1', grade: 'N/A', instructor: 'TBA' },
      ],
    },
    {
      label: 'Second Year, First Semester',
      courses: [
        { code: 'GNED 04', name: 'Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'MATH 1', name: 'Analytic Geometry', prerequisite: 'GNED 03', grade: 'N/A', instructor: 'TBA' },
        { code: 'COSC 55', name: 'Discrete Structures II', prerequisite: 'COSC 50', grade: 'N/A', instructor: 'TBA' },
        { code: 'COSC 60', name: 'Digital Logic Design', prerequisite: 'COSC 50, DCIT 23', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 50', name: 'Object Oriented Programming', prerequisite: 'DCIT 23', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 24', name: 'Information Management', prerequisite: 'DCIT 23', grade: 'N/A', instructor: 'TBA' },
        { code: 'INSY 50', name: 'Fundamentals of Information Systems', prerequisite: 'DCIT 21', grade: 'N/A', instructor: 'TBA' },
        { code: 'FITT 3', name: 'Physical Activities towards Health and Fitness 1', prerequisite: 'FITT 1', grade: 'N/A', instructor: 'TBA' },
      ],
    },
    {
      label: 'Second Year, Second Semester',
      courses: [
        { code: 'GNED 08', name: 'Understanding the Self', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'GNED 14', name: 'Panitikang Panlipunan', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'MATH 2', name: 'Calculus', prerequisite: 'MATH 1', grade: 'N/A', instructor: 'TBA' },
        { code: 'COSC 65', name: 'Architecture and Organization', prerequisite: 'COSC 60', grade: 'N/A', instructor: 'TBA' },
        { code: 'COSC 70', name: 'Software Engineering', prerequisite: 'DCIT 50, DCIT 24', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 25', name: 'Data Structures and Algorithms', prerequisite: 'DCIT 23', grade: 'N/A', instructor: 'TBA' },
        { code: 'DCIT 55', name: 'Advanced Database Management System', prerequisite: 'DCIT 24', grade: 'N/A', instructor: 'TBA' },
        { code: 'FITT 4', name: 'Physical Activities towards Health and Fitness 2', prerequisite: 'FITT 1', grade: 'N/A', instructor: 'TBA' },
      ],
    },
      {
        label: "Third Year, First Semester",
        courses: [
          { code: "MATH 3", name: "Linear Algebra", prerequisite: "MATH 2", grade: 'N/A', instructor: 'TBA'},
          { code: "COSC 75", name: " Software Engineering II", prerequisite: "COSC 70", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 80", name: " Operating Systems", prerequisite: "DCIT 25", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 85", name: " Networks and Communication", prerequisite: "ITEC 50", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 101", name: " CS Elective 1 (Computer Graphics and Visual Computing)", prerequisite: "DCIT 23", grade: 'N/A', instructor: 'TBA' },
          { code: "DCIT 26", name: " Applications Dev't and Emerging Technologies", prerequisite: "ITEC 50", grade: 'N/A', instructor: 'TBA' },
          { code: "DCIT 65", name: " Social and Professional Issues", prerequisite: "None", grade: 'N/A', instructor: 'TBA' },
        ]
      },
      {
        label: "Third Year, Second Semester",
        courses: [
          { code: "GNED 08", name: " Life and Works of Rizal", prerequisite: "GNED 04", grade: 'N/A', instructor: 'TBA' },
          { code: "MATH 4", name: " Experimental Statistics", prerequisite: "MATH 2", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 90", name: " Design and Analysis of Algorithm", prerequisite: "DCIT 25", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 95", name: " Programming Languages", prerequisite: "DCIT 25", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 106", name: " CS Elective 2 (Introduction to Game Development)", prerequisite: "MATH 3, COSC 101", grade: 'N/A', instructor: 'TBA' },
          { code: "DCIT 60", name: " Methods of Research", prerequisite: "Third Year Standing", grade: 'N/A', instructor: 'TBA' },
          { code: "ITEC 85", name: " Information Assurance and Security", prerequisite: "DCIT 24", grade: 'N/A', instructor: 'TBA' },
        ]
      },
      {
        label: "Third Year, Mid-Year",
        courses: [
          { code: "COSC 199", name: " Practicum (240 hours)", prerequisite: "Incoming Forth Year", grade: 'N/A', instructor: 'TBA' },
        ]
      },
      {
        label: "Fourth Year, First Semester",
        courses: [
          { code: "ITEC 80", name: " Human Computer Interaction", prerequisite: "ITEC 85", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 80", name: " Automata Theory and Formal Languages", prerequisite: "COSC 90", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 105", name: " Intelligent Systems", prerequisite: "MATH 4, COSC 55, DICT 50", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 111", name: " CS Elective 3 (Internet of Things)", prerequisite: "COSC 60", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 200A", name: " Undergraduate Thesis 1", prerequisite: "Forth Year Standing", grade: 'N/A', instructor: 'TBA' },
        ]
      },
      {
        label: "Fourth Year, Second Semester",
        courses: [
          { code: "GNED 09", name: " The Contemporary World", prerequisite: "None", grade: 'N/A', instructor: 'TBA' },
          { code: "GNED 10", name: " Gender and Society", prerequisite: "None", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 110", name: " Numerical and Symbolic Computation", prerequisite: "COSC 50", grade: 'N/A', instructor: 'TBA' },
          { code: "COSC 200B", name: " Undergraduate Thesis II", prerequisite: "COCS 200A", grade: 'N/A', instructor: 'TBA' },
        ]
      }
    ];

  // List of IT semesters and their courses
  const itSemesters = [
    {
      label: 'First Year, First Semester',
      courses: [
        { code: 'ITGN 01', name: 'Introduction to IT', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'ITGN 02', name: 'Mathematics for IT', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'ITGN 03', name: 'Networking Fundamentals', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'ITP 01', name: 'IT Programming Basics', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        // Add more IT courses as needed
      ],
    },
    {
      label: 'First Year, Second Semester',
      courses: [
        { code: 'ITGN 04', name: 'Introduction to Cyber Security', prerequisite: 'None', grade: 'N/A', instructor: 'TBA' },
        { code: 'ITGN 05', name: 'Database Management Systems', prerequisite: 'ITGN 02', grade: 'N/A', instructor: 'TBA' },
        // Add more IT courses as needed
      ],
    },
    // Add more semesters for IT if needed
  ];

  const currentSemester = course === 'CS' ? csSemesters[currentIndex] : itSemesters[currentIndex];

  

  return (
    <div className="min-h-screen bg-gray-100  p-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          {course === 'CS' ? 'Computer Science' : 'Information Technology'} Student Checklist
        </h1>

           {/* Dropdown to switch between courses */}
           <div className="mb-4">
          <select
            className="p-2 bg-gray-200 rounded-md"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="CS">Computer Science</option>
            <option value="IT">Information Technology</option>
          </select>
        </div>

        <div className="flex items-center justify-center mb-4">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            className="mr-4 p-2 bg-gray-200 text-gray-800 rounded-md"
          >
            &#8592; Prev
          </button>
          <span className="font-semibold text-xl">{currentSemester.label}</span>
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, (course === 'CS' ? csSemesters : itSemesters).length - 1))}
            className="ml-4 p-2 bg-gray-200 text-gray-800 rounded-md"
          >
            Next &#8594;
          </button>
        </div>


        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-sm text-gray-800">Course Code</th>
              <th className="border border-gray-300 px-4 py-2 text-sm text-gray-800">Course Name</th>
              <th className="border border-gray-300 px-4 py-2 text-sm text-gray-800">Prerequisite</th>
              <th className="border border-gray-300 px-4 py-2 text-sm text-gray-800">Grade</th>
              <th className="border border-gray-300 px-4 py-2 text-sm text-gray-800">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {currentSemester.courses.map((course, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">{course.code}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">{course.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">{course.prerequisite}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">{course.grade}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-800">{course.instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checklist;
