import logo from './logo.svg';
import './Components/Animate.css';
import './Components/Responsive.css';
import '../src/flanella/Flanella.ttf';
import '../src/azonix/Azonix.otf';
import '../src/script-mt-bold/ScriptMTBold.ttf';
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Terms from './Components/Terms/Terms';
import Teachers from './Components/Teachers/Teachers';
import NavbarFrance from './Components/Navbar/NavbarFrance';
import { useState } from 'react';
import Classes from './Components/Classes/Classes';
import FooterFrance from './Components/Footer/FooterFrance';
import AboutFrance from './Components/About/AboutFrance';
import SingleClass from './Components/Classes/SingleClass';
import SingleTeacher from './Components/Teachers/SingleTeacher';
import { MediaContextProvider } from "./MediaContext";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
function App() {
  const [ar, setAr] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : "eng");
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log(localStorage.getItem("userToken"));
      getUserData();
    }
  }, []);

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem("userToken"));

    setUserData(decodedToken);
  }

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem("userToken")) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }
  return (
    <>
      {ar === 'frc' && < NavbarFrance setAr={setAr} />}

      {ar === 'eng' && < Navbar setAr={setAr} />}
      {/* <Navbar/> */}
      <MediaContextProvider>
        <Routes>
          {ar === 'frc' &&
            <>
              {/* <Route  path='navbarAr' element={<NavbarAr/>}/> */}

              <Route path='/about' element={
                <ProtectedRoute>
                  <AboutFrance /></ProtectedRoute>} />


            </>

          }
          {ar === 'eng' &&
            <>


              <Route path='/' element={<Home />} />
              <Route path='/about' element={
                // <ProtectedRoute>
                <About />
                // </ProtectedRoute>
              } />
              <Route path='/contact' element={
                // <ProtectedRoute>
                <Contact />
                // </ProtectedRoute>
              } />
              <Route path='/terms' element={
                // <ProtectedRoute>
                <Terms />
                // </ProtectedRoute>
              } />
              <Route path='/teachers' element={
                // <ProtectedRoute>
                <Teachers />
                // </ProtectedRoute>
              } />
              <Route path='/classes' element={
                // <ProtectedRoute>
                <Classes />
                // </ProtectedRoute>
              } />
              <Route path='/singleClass' element={
                // <ProtectedRoute>
                <SingleClass />
                // </ProtectedRoute>
              } />
              <Route path='/singleTeacher' element={
                // <ProtectedRoute>
                <SingleTeacher />
                // </ProtectedRoute>
              } />

              <Route path='cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />

              <Route
                path="/login"
                element={<Login getUserData={getUserData} />} />

              <Route path="/register" element={

                <Register />} />
            </>
          }


        </Routes>
      </MediaContextProvider>
      {ar === 'frc' && <FooterFrance />}
      {ar === 'eng' && <Footer />}
    </>
  );
}

export default App;
