import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RandomUser() {
  const [userData, setUserData] = useState({});

  function randomUser () {
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        setUserData(response.data.results[0]);
      })

  };

  useEffect(() => {
    randomUser();  
  }, []);

  function handleRandom() {
    randomUser();
  }

  return (
    <div className='wrapper'>
      <div className='box'>
        <img src={userData.picture?.large}  />
        <h2>{`${userData.name?.title} ${userData.name?.first} ${userData.name?.last}`}</h2>
        <button onClick={handleRandom}>Random User</button>
      </div>
    </div>
  );
}

export default RandomUser;
