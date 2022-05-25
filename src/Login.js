import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { getUsers } from "./data";

function Login(){
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem('loggedIn');
  console.log("Logged In: " + loggedIn);
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const [message,setMessage] = useState('');
  let users = getUsers();
  //console.log(users);

  function handleNameChange(e){
      setName(e.target.value)
  }
  function handlePassChange(e){
      setPass(e.target.value)
  }

  function handleSubmit(){
    // console.log(name);
    // console.log(pass);
    // console.log(users[0].username);
    // console.log(users[0].password);
    if(users.find(u => u.username === name && u.password === pass)) {
      console.log("success");
      localStorage.setItem('loggedIn', 'true');
      navigate("/profile");
    } else {
      console.log("fail");
      setMessage('Invalid username and/or password');
    }
    event.preventDefault();
  }

  if(loggedIn === 'true'){
    return (
      <main>
        You are logged in.
      </main>
    )
  } else {
    return (
      <main>
        {message}
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Password:
          <input type="text" value={pass} onChange={handlePassChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </main>
    )
  }
}

export default Login;
