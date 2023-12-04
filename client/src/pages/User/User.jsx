import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useAuth0 } from "@auth0/auth0-react";
import './user.css'

const User = () => {

  const { user, isAuthenticated, isLoading, loginWithPopup, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div >
      <Navbar />
      <div className='userInfoContainer d-flex justify-content-center align-items-center flex-column'>
        {
          !isAuthenticated && (
            <h1>Log in to your <span style={{color:"#eeba2b"}}> Obsession</span></h1>
          )
        }
        {
          isAuthenticated && (
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img src={user.picture} alt={user.name} id='userImg' />
              <h2>{user.name}</h2>
              <p>{user.email}</p>

            </div>
          )
        }
        <div className='d-flex justify-content-center align-items-center'>

          {
            isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{ color: 'white', backgroundColor: '#212529', borderRadius: '5px' }}>
              Log Out
            </button>) : (<button onClick={() => loginWithPopup()} style={{ color: 'white', backgroundColor: '#212529', borderRadius: '5px',boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",fontSize:"2rem",padding:"5px 20px" }}>Log In</button>
            )
          }
        </div>

      </div>
    </div>

  )
}

export default User