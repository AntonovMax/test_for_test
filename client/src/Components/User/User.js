import React, { useState } from 'react';
import { useParams } from 'react-router';

function User({ users, setUsers }) {

  const { id } = useParams()
  const [userInfo] = users.filter(el => el.id == id)
  const [user, setUser] = useState(userInfo)

  function handleEditUser(info) {

    if (info.agree.checked) {
      const { phone, email, birthday } = info

      fetch('http://localhost:5000/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          phone: phone.value,
          email: email.value,
          birthday: birthday.value
        })
      })
    } else {
      console.log('hi');
    }


  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault()
        handleEditUser(event.target)
      }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input type="text" className="form-control" name='phone' id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={user.phone} onFocus={(event) => event.target.value = ''} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input type="text" className="form-control" name='email' id="exampleInputPassword1" defaultValue={user.email} onFocus={(event) => event.target.value = ''} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Birthday</label>
          <input type="date" className="form-control" name='birthday' id="exampleInputPassword1" defaultValue={user.birthday} min="1900-01-01" max={new Date()} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" name='agree' className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Сonsent to the processing of personal data</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default User;
