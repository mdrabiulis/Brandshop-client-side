import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { useEffect } from "react";






export const AuthContext = createContext(null)


const googleLoginprovider = new GoogleAuthProvider();






const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




// ==============  Log in User  =================
const LoginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// ============== log in with Google   =================

const loginGoogleUser = () =>{
  setLoading(true)
  return signInWithPopup(auth, googleLoginprovider)
}





  // ============== Create User Email and Password  =================

  const createNewUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
  }


  // ===========  log Out  =================
  const SignOutUser = () =>{
      setLoading(true)
      return signOut(auth);
  }


    // ============== onAuthStateChanged   =================

    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false)
    })
    return ()=>{
    unSubscribe()
    }
    },[])



const userUpdateProfile =(name, photo)=>{
  
    return updateProfile(auth.currentUser, {
        displayName: name , photoURL: photo,
      })
}



    const authUserInfo = {
        user,
        loading,
        createNewUser,
        userUpdateProfile,
        SignOutUser,
        LoginUser,
        loginGoogleUser,

    }

    return (
     <AuthContext.Provider value={authUserInfo}>
       {children}
     </AuthContext.Provider>
    );
};



AuthProvider.propTypes = {
    children: PropTypes.node,
  };

export default AuthProvider;