import React, { useState } from "react";

// Data
import Data from './components/Data'

//components
import UserForm from './components/UserForm'
import UserList from './components/UserList'
// import NewUser from './components/NewUser'



function App() {
  const [userData, setUserData] = useState(Data);

  const addNewUser = newEntry => {
    setUserData([...userData, newEntry])
  }

  return (
    <div className="App">
      <UserForm newUser={addNewUser}/>
      <UserList userData={userData}/>
      {/* <NewUser newUser={addNewUser}/> */}
    </div>
  );
}

export default App;
