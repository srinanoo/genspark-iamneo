import React, { createContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComp from './components/ChildComp';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import ProtectedComp from './components/ProtectedComp';
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProtectedRoute from './components/ProtectedRoute';
import ToDoComp from './components/ToDoComp';
import ToDo from './components/ToDo';
import ToDoUse from './components/ToDoUse';
import ErrorBoundaries from './components/ErrorBoundaries';
import ErrorComp from './components/ErrorComp';

// class AppCls extends React.Component {

//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   render() {
//     return (
//       <>
//         <p>Class Component</p>
//       </>
//     )
//   }
// }

// function App() {
//   // let name = "Dinesh";
//   const [name, setName] = useState("Dinesh");
//   const [count, setCount] = useState(0);

//   const handleUpdate = () => {
//     console.log("old name: ", name);
//     // name = "Name has been changed";
//     setName("New Name");
//     console.log("new name: ", name);
//   }

//   useEffect(() => {
//     console.log("useEffect");
//     setCount(count + 1);
//   },[name])

//   console.log("render");

//   return (
//     <>
//       {/* <img src={reactLogo} alt={viteLogo} />
//       <img src="./vite.svg" alt={viteLogo} />
//       <h1 className='bg-orange-300 font-normal m-10 p-[15px]'>Hello, World!</h1> */}

//       {/* <ChildComp name={name} /> */}

//       Parent Name: {name}<br />
//       Count: {count}

//       <p><button onClick={handleUpdate}>Update Name</button></p>

//       {/* <AppCls /> */}
//     </>
//   )
// }

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [inputCtrl, setInputCtrl] = useState({
//     "username": "",
//     "password": ""
//   });

//   let username2 = useRef("");
//   let password2 = useRef("");

//   console.log("render");

//   // const handleUsername = (e) => {
//   //   setUsername(e.target.value);
//   // }

//   // const handlePassword = (e) => {
//   //   setPassword(e.target.value);
//   // }

//   // const handleChange = (e) => {
//   //   let inputControl = e.target.id;
//   //   switch(inputControl) {
//   //     case "username":
//   //       setUsername(e.target.value);
//   //       break;
//   //     case "password":
//   //       setPassword(e.target.value);
//   //       break;
//   //   }
//   // }

//   const handleChange = (e) => {
//     setInputCtrl((prev) => ({...prev, [e.target.id]: e.target.value}));
//   }

//   const handleImpureForm = () => {
//     let username1 = document.getElementById("username1").value;
//     let password1 = document.getElementById("password1").value;
//   }

//   const handleIntermediateForm = () => {
//     console.log(username2.current.value);
//     console.log(password2.current.value);
//   }

//   return (
//     <>
//       <h1>Pure and Impure Components</h1>
//       <h2>FORMS</h2>
//       <h3>Pure Component</h3>
//       <form>
//         <input type="text" placeholder='Username:' id="username" onChange={handleChange} /><br />
//         <input type="password" placeholder='Password:' id="password" onChange={handleChange} /><br />
//         <button>Submit</button>
//       </form>

//       <p>Username: {inputCtrl?.username}</p>
//       <p>Password: {inputCtrl?.password}</p>

//       <h3>Impure Component</h3>
//       <form>
//         <input type="text" placeholder='Username:' id="username1" /><br />
//         <input type="password" placeholder='Password:' id="password1" /><br />
//         <button type='button' onClick={handleImpureForm}>Submit</button>
//       </form>

     
//       <h3>Intermediate Component</h3>
//       <form>
//         <input type="text" placeholder='Username:' ref={username2} /><br />
//         <input type="password" placeholder='Password:' ref={password2} /><br />
//         <button type='button' onClick={handleIntermediateForm}>Submit</button>
//       </form>
//     </>
//   )
// }

// function App() {
//   const [isLogged, setIsLogged] = useState(false);

//   const handleLogin = (e) => {
//     setIsLogged(!isLogged);
//   }

//   return (
//     <>
//       <h1>Protected Routes/Components</h1>

//       {isLogged.toString()}

//       <ProtectedComp isLogged={isLogged}>
//         <Comp1 />
//         <Comp3 />
//       </ProtectedComp>
      
//       <Comp2 />
      
//       {/* <ProtectedComp isLogged={isLogged}>
//         <Comp3 />
//       </ProtectedComp> */}

//       {
//         isLogged
//           ?
//             <button id="false" onClick={handleLogin}>Logout</button>
//           :
//             <button id="true" onClick={handleLogin}>Login</button>
//       }
//     </>
//   )
// }

// function App() {
//   const [isLogged, setIsLogged] = useState(false);

//   const handleLogin = (e) => {
//     setIsLogged(!isLogged);
//   }
//   return (
//     <>
//       <h1>Protected Routes</h1>
//       <Router>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/blog">Blog</Link>
//         </nav>
//         <nav>
//           <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/blog">Blog</NavLink>
//         </nav>

//         <p>Status: {isLogged.toString()}</p>
//         {
//           isLogged
//             ?
//               <button id="false" onClick={handleLogin}>Logout</button>
//             :
//               <button id="true" onClick={handleLogin}>Login</button>
//         }

//         <Routes>
//           {/* <Route element={<ProtectedRoute isLogged={isLogged} />}>
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/blog" element={<BlogPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Route> */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={
//             <ProtectedComp isLogged={isLogged}>
//               <AboutPage />
//             </ProtectedComp>
//           } />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// function App() {
//   const [parentName, setParentName] = useState("Parent 1");

//   const handleChange = () => {
//     setParentName("Parent 1 - Updated");
//   }

//   return (
//     <>
//       {/* Controlled vs Uncontrolled */}
//       {/* Lifting the State Up */}

//       <Comp1 parent={parentName} change={handleChange} />
//       <Comp2 parent={parentName} />

//       <p><button onClick={handleChange}>Update Parent Name</button></p>
//     </>
//   )
// }

function App() {

  return (
    <>
      <h1>Redux</h1>
      {/* install react-redux @reduxjs/toolkit
      store -> reducer -> actions -> state -> dispatch
      dispatch
      */}
      
      {/* <ToDoComp /> */}

      <ToDo />

      <ToDoUse />

      <ErrorBoundaries>
        <ErrorComp />
      </ErrorBoundaries>
    </>
  )
}

export default App
