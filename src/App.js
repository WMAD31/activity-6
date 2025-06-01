import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import More from "./second_page"; // 

// function Profile() {
//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow p-4 text-center" style={{ maxWidth: "400px" }}>
//         <header className="mb-3">
//           <h1 className="text-primary">MY PROFILE</h1>
//         </header>
//         <div className="mb-3">
//           <p className="fw-bold">Name: <span className="text-secondary">Francine Mae G. Ginares</span></p>
//           <p className="fw-bold">Section: <span className="text-secondary">B</span></p>
//         </div>
//         <Link className="btn btn-primary w-100" to="/second_page">
//           More about me
//         </Link>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} /> {/* Home Page: kaning profile */}
        <Route path="/second_page" element={<More />} /> {/* More about me page */}
      </Routes>
    </Router>
  );
}

export default App;




// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


function Profile(){
  return( 
  <div className="Profile">
    <header className="Profile-header">
      <h1>
        MY PROFILE
      </h1>
    </header>
  <div>
      <p>Name: Wenna Marie Angela Delfin</p>
      <p>Section: D</p>
  </div>

    <Link className="More" to="/second_page">
           More about me
    </Link>
  </div>
  );
}

// export default Profile;