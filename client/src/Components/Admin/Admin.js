import { Link } from 'react-router-dom'

import style from './Admin.module.css'

function Admin({ users, setUsers }) {

  function handleDeletUser(phone) {
    console.log();
    fetch('http://localhost:5000/admin', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: phone
      })
    })
      .then(data => data.json())
      .then((responseServer) => {
        if (responseServer.deleted) {
          setUsers(users.filter(user => user.phone !== phone))
        } else {
          console.log('some problem to server, try again');
        }
      })
      .catch(err => err)
  }

  return (
    <div className={style.wrapper}>
      {
        users ?
          users.map((user) => {
            return (
              <div className={style.main_container} key={user.id}>
                <Link to={`/user/${user.id}`} className={style.card_link} >
                  <div className='card' style={{ width: '18rem' }} >
                    <div className="card-body">
                      <h5 className="card-title">PHONE: {user.phone}</h5>
                      <p className="card-text">EMAIL: {user.email}</p>
                      <p className="card-text">ADDED AT: {user.createdAt.split('T')[0]}</p>

                    </div>
                  </div>
                </Link>
                <div className={style.basket_block}>
                  <svg onClick={(event) => {
                    event.stopPropagation()
                    handleDeletUser(user.phone)
                  }}
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className={`bi bi-bucket-fill ${style.basket} ${style.fill}`}
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg">
                    <path className={style.fill} d="M8 1.5A4.5 4.5 0 0 0 3.5 6h-1a5.5 5.5 0 1 1 11 0h-1A4.5 4.5 0 0 0 8 1.5z" />
                    <path className={style.fill} d="M1.61 5.687A.5.5 0 0 1 2 5.5h12a.5.5 0 0 1 .488.608l-1.826 8.217a1.5 1.5 0 0 1-1.464 1.175H4.802a1.5 1.5 0 0 1-1.464-1.175L1.512 6.108a.5.5 0 0 1 .098-.42z" />
                  </svg>
                </div>

              </div>


            )
          })
          :
          null
      }
    </div>
  );
}

export default Admin;
