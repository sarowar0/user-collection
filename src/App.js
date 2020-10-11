import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/cart/Cart';
import User from './component/user/User';
import data from './fakeData/fakeData.json';
function App() {
  const [user,setUser]  = useState([]);
  const [addUser,setAddUser] = useState([]);
  useEffect(()=> setUser(data),[]);

  const handlerUser = (user) => {
    const newAddUser = [...addUser,user];
    setAddUser(newAddUser)
  };
  return (
    <div className="App">
        <div className="user-container">
          {
            user.map(user => <User user={user} handlerUser={handlerUser} ></User>)
          }
        </div>
        <div className="addUser-container">
          <Cart addUser={addUser}></Cart>
        </div>
    </div>
  );
}

export default App;
