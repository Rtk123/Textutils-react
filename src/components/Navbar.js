// import React from 'react';
// import PropTypes from 'prop-types'; // Capital "P"
// import { link } from 'react-router-dom';
// export default function Navbar(props) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <link className="navbar-brand" to="/">{props.title}</link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//        <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <link className="nav-link active" aria-current="page" to="/">{props.about}</link>
//             </li>
//             <li className="nav-item">
//               <link className="nav-link" to="/About">About</link>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             {/* 
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button> 
//             */}
//             <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
//               <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
//               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
//                 Enable DarkMode
//               </label>
//             </div>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string,
//   about: PropTypes.string,
// };

import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // Correct capitalization for "Link"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a> {/* Use "Link" instead of "link" */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.about}</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            {/* 
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button> 
            */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable DarkMode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
