import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Jobs from "./pages/Jobs/Jobs";
import Error from "./pages/404/Error";
import Nav from "./components/Nav/Navbar";

import EditProfile from "./pages/EditProfile/EditProfile"
import ViewProfile from "./pages/Profile/Profile";
import CreateProfile from "./pages/CreateProfile/CreateProfile"
<<<<<<< HEAD
=======

import JobApply from "./pages/JobApply/JobApply"
>>>>>>> e72ddaf6d819d8a3c5e8bf8f3eb01c3a0b0d2490
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import './App.css';
import Jobid from "./pages/Jobid/Jobid";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/viewprofile/:id" element={<ViewProfile/>} />
        <Route path="*" element={ <Error/>} />
        <Route path="/createprofile" element={<CreateProfile/>} />
        <Route path="/profile" element={<Profile/>} />
<<<<<<< HEAD
         <Route path="/jobs/:id" element={<Jobid/>}/>
=======
        <Route path="/apply" element={<JobApply/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
>>>>>>> e72ddaf6d819d8a3c5e8bf8f3eb01c3a0b0d2490
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
