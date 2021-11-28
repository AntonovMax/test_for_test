import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import style from './User.module.css'

function User({ users, setUsers }) {

  const { id } = useParams() 
  const [userInfo] = users.filter(el => el.id == id) // вариант поиска данных о пользователе через клиентское состояние
  const [user] = useState(userInfo)

  // Вариант поиска данных пользователя через базу по номеру телефона 

  // useEffect(async () => { 
  //   const response = await fetch('http://localhost:5000/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify({
  //       phone: user.phone
  //     })
  //   })
  //   const checkInDB = await response.json()

  //   checkInDB ? console.log('action') : console.log('disaction');
  // }, [])

  async function handleEditUser(info) {

    console.log('hi');

    if (info.agree.checked) {
      const { phone, email, birthday } = info

      const response = await fetch('http://localhost:5000/user', {
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

      const updateInBase = await response.json()

      updateInBase ? window.location.replace('/') : alert('Some problem on server, try again...')
      
    } else {
      const messegeCheckBox = document.getElementById('check_label')
      messegeCheckBox.style.color = '#fc83b0f8'
    }


  }

  return (
    <div className={style.wrapper}>
      <form onSubmit={(event) => {
        event.preventDefault()
        handleEditUser(event.target)
      }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">PHONE</label>
          <input type="text" className={`form-control ${style.input_color}`} name='phone' id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={user.phone} onFocus={(event) => event.target.value = ''} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">EMAIL</label>
          <input type="email" className={`form-control ${style.input_color}`} name='email' id="exampleInputPassword1" defaultValue={user.email} onFocus={(event) => event.target.value = ''} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">BIRTHDAY</label>
          <input type="date" className={`form-control ${style.input_color}`} name='birthday' id="exampleInputPassword1" defaultValue={user.birthday} min="1900-01-01" max={new Date()} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" name='agree' className="form-check-input" id="exampleCheck1" />
          <label id='check_label' className="form-check-label" htmlFor="exampleCheck1">Сonsent to the processing of personal data</label>
        </div>
        <button className={`btn btn-primary ${style.button}`} type="submit" >SUBMIT</button>
      </form>
    </div>
  );
}

export default User;
