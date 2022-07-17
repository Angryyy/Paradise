import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

export const LogoutBTN = () =>{
const { logout } = useAuth0();
  return (
      <button className="btn" onClick={() => logout()}>Logout</button>
  );
}