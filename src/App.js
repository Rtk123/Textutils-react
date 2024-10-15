// import './App.css';
// import About from './components/About';

// import Alert from './components/Alert';
// import Navbar from './components/Navbar';
// import Text from './components/Text';

// import React, { useState } from 'react
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// function App(props) {
//   const [mode, setMode] = useState('light'); // Use lowercase "mode" for consistency
//   const[alert ,setAlert] = useState(null);
//   const showAlert =(message , type) =>{
//       setAlert({
//         msg:message,
//         type:type
//       })
//      setTimeout(() => {
//       setAlert(null)
//      }, 2000);
//   }
//   const toggleMode = () => {
//     if (mode === 'light') {
//         setMode('dark');
//         document.body.style.backgroundColor = '#042743'; // Dark mode background
//         showAlert("Dark mode has been enabled!", "success");
//         document.title = "Textutils - dark mode";
//     } else {
//         setMode('light');
//         document.body.style.backgroundColor = 'white'; // Light mode background
//         showAlert("Light mode has been enabled!", "success");
//         document.title = "Textutils - light mode";
//     }
// };

//   return (
//     <>
//     <Router>
//       <Navbar title="React_Ritik" about="Home" mode={mode} toggleMode={toggleMode} /> {/* Pass toggleMode */}
//     <Alert alert={alert}/>
//       <div className="container">
//       <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
         
//           <Route path="/">
//           <Text showAlert={showAlert} heading="Text Utility Pro Or Text Tweaker" mode={mode} />
//           </Route>
//         </Switch>
     
//     {/* <About/> */}

//       </div>
//       </Router>
//     </>
//   );
// }

// export default App;


import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';

import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Use lowercase "mode" for consistency
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // Dark mode background
      showAlert("Dark mode has been enabled!", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background
      showAlert("Light mode has been enabled!", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="React_Ritik" about="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<Text showAlert={showAlert} heading="Text Utility Pro Or Text Tweaker" mode={mode} />} /> */}
          {/* </Routes> */}
          <Text showAlert={showAlert} heading="Text Utility Pro Or Text Tweaker" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;


