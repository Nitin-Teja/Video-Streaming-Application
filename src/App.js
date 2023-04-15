import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(() => {
  const unsubscibe = auth.onAuthStateChanged((userAuth) => {
    if(userAuth){
      // logged in
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }));
    } else{
      // logged out
      dispatch(logout);
    }
  });

  return unsubscibe;
}, []);

  return (
    <div className="app">
      {/* navbar */}

      <BrowserRouter>
      {!user ? (
        <LoginScreen />
        // <HomeScreen />
      ): <Routes>
      <Route path="/" element={<HomeScreen />} />
       </Routes>} 
      </BrowserRouter>

    </div>
  );
}

export default App;
