import React, { useEffect, useState } from 'react'
import "./Nav.css";
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";

function Nav() {
  const [show,handleShow]=useState(false);
  const [signIn,setSignIn] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100){
    //             handleShow(true);
    //         } else handleShow(false)
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // },[])

    const dispatch = useDispatch();

    function handleSignOut() {
      auth.signOut()
        .then(() => {
          dispatch(logout());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    return (
    <div className="nav">
        <img 
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        />
        <button type="submit" onClick={handleSignOut}
        className='logoutScreen__button'> 
            Sign Out
        </button>
    </div>
  )
}

export default Nav