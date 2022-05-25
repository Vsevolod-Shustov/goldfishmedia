import { React, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Profile(){
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem('loggedIn');
  console.log(loggedIn);

  useEffect(() => {
    !loggedIn && navigate("/login");
  });

  if(loggedIn){
    return (
      <main>
        profile
      </main>
    )
  } else {
    return (
      <main>
        not logged in
      </main>
    )
  }
}

export default Profile;
