import React from 'react'
import {LoginBTN} from './Login'
import {LogoutBTN} from "./Logout"
import { Profile } from './Profile'
import filter from './filter.png'
import {useAuth0} from '@auth0/auth0-react'

export const Nav = () =>{

        const { isAuthenticated } = useAuth0();
      return (
        <div className="navbar">
            <div className="main">
                <img className="filter" src={filter} />
                <div className="profile-auth">
                    <Profile />
                    {
                    isAuthenticated ?
                    <LogoutBTN />
                        : 
                    <LoginBTN/>
                    }

                    
                </div>
            </div>
        </div>
        
          
          
      );
    } 
