import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import App from "./App";
import { loginState } from "./atoms";
import { authService } from "./fbase";


 function LoginApp() {
   const [init, setInit] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  //  const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(()=>{
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
   },[])
  return (
    <div>
      {init ? <App isLoggedIn={isLoggedIn}/> : 'Initializing'}
    </div> 
  );
}

export default LoginApp;
