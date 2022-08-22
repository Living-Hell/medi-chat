import React, { useState } from 'react';
import { axios } from 'axios';
import Cookies from 'universal-cookie';
import signInImage from '../assets/signup.jpg'

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input 
                                name='fullName' type = 'text'
                            />
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth