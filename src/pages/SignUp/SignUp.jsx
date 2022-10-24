import React from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

const SignUp = () => {
  return (
    <Form>
      <Input type="email" label="Email" required placeholder="my_email@gmail.com"></Input>
      <Input type="password" label="Password" required placeholder="password"></Input>
      <Input type="text" required label="Client ID" placeholder="your-client-id"></Input>
      <Input type="text" label="First name" placeholder="John"></Input>
      <Input type="text" label="Last name" placeholder="Smith"></Input>
    </Form>
  )
}

export default SignUp;