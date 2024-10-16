
// // src/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import users from './users.json';

// const Home = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const user = users.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       navigate('/courses');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex items-center justify-center p-5">
//       <div className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-md border border-gray-200">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Welcome to B AD1523</h1>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label className="block text-gray-800 font-semibold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-800 font-semibold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-buttonGradientStart to-buttonGradientEnd text-white px-6 py-4 rounded-lg shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-8 text-center text-gray-500 text-sm">
//           &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;

// src/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './users.json';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate('/courses');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex items-center justify-center p-5">
      <div className="bg-white bg-opacity-80 p-12 rounded-3xl shadow-2xl w-full max-w-md border border-gray-300">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">B AD1523</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;
