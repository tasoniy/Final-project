import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  return (
    <>
      <form>
        <input type="email" placeholder="Enter your email"/>
        <input type="password" placeholder="Enter your password"/>
      </form>
      <Link to="/registration">You don't have an account?</Link>
    </>
  )
}

export default AuthForm;