import React from 'react';

const CreateAccountForm = () => {
  return (
    <form>
      <input type="email" placeholder="Enter your email"/>
      <input type="password" placeholder="Enter your password"/>
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your surname" />
      <input type="text" placeholder="Enter your client ID"/>
    </form>
  )
}

export default CreateAccountForm;