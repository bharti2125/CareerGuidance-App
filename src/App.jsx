import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Career from "./pages/career";
import Aptitude from "./pages/aptitude";
import College from "./pages/college";
import Location from "./pages/location";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Student from "./pages/student";




function App() {
    return(
        <>
          <Header />
          <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/aptitude" element={<Aptitude />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/location" element={<Location />} />
            <Route path="/college" element={<College />} />
            <Route path="/signup" element={< SignUp/>} /> 
            <Route path="/student" element={<Student />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
           </Routes>
          </BrowserRouter>
          <Footer />
        </>
    );
}

export default App;