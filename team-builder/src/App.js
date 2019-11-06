import React, { useState } from "react";
import Data from './components/Data'

// import './App.css';

//components
import UserForm from './components/UserForm'
import UserList from './components/UserList'



function App() {
  const [userData, setUserData] = useState(Data);
  console.log(`App Data: ${Data}`)
  return (
    <div className="App">
      <UserForm />

      <UserList userData={userData}/>
    </div>
  );
}

export default App;
