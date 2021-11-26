import React, { useEffect, useState } from 'react';

function Admin(props) {

  const [users, setUsers] = useState()

  useEffect( () => {
    fetch('http://localhost:5000/admin')
    .then(data => data.json())
    .then(data => setUsers(data))
    .catch(err => err)
  }, [])


  console.log(users);
  return (
    <div>
        {
          users ? 
          users.map(user => <p>{user.phone}</p>)
          :
          null
        }
    </div>
  );
}

export default Admin;
