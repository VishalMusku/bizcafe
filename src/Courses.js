// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const Courses = () => {
// // //   const navigate = useNavigate();

// // //   const courseList = [
// // //     { id: 1, name: "Section 001" },
// // //     { id: 2, name: "Section 002" },
// // //     { id: 3, name: "Section 003" },
// // //     { id: 4, name: "Section 004" },
// // //     { id: 5, name: "Section 005" },
// // //     { id: 6, name: "Section 006" },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex flex-col">
// // //       {/* Top Bar for Courses Title */}
// // //       <div className="w-full bg-white shadow-lg py-4">
// // //         <h1 className="text-3xl font-semibold text-gray-800 text-center">Courses</h1>
// // //       </div>

// // //       {/* Course Cards */}
// // //       <div className="flex-grow flex items-center justify-center mt-8">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
// // //           {courseList.map((course) => (
// // //             <div
// // //               key={course.id}
// // //               className="bg-white rounded-lg shadow-lg p-10 cursor-pointer transition-transform transform hover:scale-105"
// // //               onClick={() => {
// // //                 window.location.href = `/dashboard${course.id}.html`;
// // //               }}
// // //             >
// // //               <h2 className="text-xl font-semibold text-gray-800 text-center" >{course.name}</h2>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Courses;


// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Courses = () => {
// //   const navigate = useNavigate();

// //   const courseList = [
// //     { id: 1, name: "Section 001" },
// //     { id: 2, name: "Section 002" },
// //     { id: 3, name: "Section 003" },
// //     { id: 4, name: "Section 004" },
// //     { id: 5, name: "Section 005" },
// //     { id: 6, name: "Section 006" },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex flex-col">
// //       {/* Top Bar for Courses Title */}
// //       <div className="w-full bg-transparent py-6">
// //         <h1 className="text-4xl font-semibold text-white text-center">Sections</h1>
// //       </div>

// //       {/* Course Cards */}
// //       <div className="flex-grow flex items-center justify-center mt-8">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl px-4">
// //           {courseList.map((course) => (
// //             <div
// //               key={course.id}
// //               className="bg-white rounded-lg shadow-lg p-16 cursor-pointer transition-transform transform hover:scale-105"
// //               onClick={() => {
// //                 window.location.href = `/dashboard${course.id}.html`;
// //               }}
// //             >
// //               <h2 className="text-2xl font-semibold text-gray-800 text-center">{course.name}</h2>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Courses;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Courses = () => {
//   const navigate = useNavigate();

//   const courseList = [
//     { id: 1, name: "Section 001" },
//     { id: 2, name: "Section 002" },
//     { id: 3, name: "Section 003" },
//     { id: 4, name: "Section 004" },
//     { id: 5, name: "Section 005" },
//     { id: 6, name: "Section 006" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex flex-col">
//       {/* Top Bar for Courses Title */}
//       <div className="w-full bg-transparent py-6">
//         <h1 className="text-4xl font-semibold text-white text-center">Sections</h1>
//       </div>

//       {/* Course Cards */}
//       <div className="flex-grow flex items-center justify-center mt-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl px-4">
//           {courseList.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white bg-opacity-50 rounded-lg shadow-xl p-8 cursor-pointer transition-transform transform hover:scale-105 backdrop-blur-lg border border-gray-200"
//               onClick={() => {
//                 window.location.href = `/dashboard${course.id}.html`;
//               }}
//             >
//               <h2 className="text-2xl font-semibold text-gray-800 text-center">{course.name}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const courseList = [
    { id: 1, name: "Section 001" },
    { id: 2, name: "Section 002" },
    { id: 3, name: "Section 003" },
    { id: 4, name: "Section 004" },
    { id: 5, name: "Section 005" },
    { id: 6, name: "Section 006" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex flex-col">
      {/* Top Bar for Courses Title */}
      <div className="w-full bg-transparent py-6">
      <h1 className="text-5xl font-bold mb-2 text-black text-center">Sections</h1>

      </div>

      {/* Course Cards */}
      <div className="flex-grow flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl px-4">
          {courseList.map((course) => (
            <div
              key={course.id}
              className="bg-white bg-opacity-80 rounded-lg shadow-xl p-6 cursor-pointer transition-transform transform hover:scale-105 backdrop-blur-lg border border-gray-200 h-64 flex items-center justify-center"
              onClick={() => {
                window.location.href = `/dashboard${course.id}.html`;
              }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 text-center">{course.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
