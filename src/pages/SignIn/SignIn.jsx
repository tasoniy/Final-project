import React from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import { NormalizeLink } from "../../components/Header/Header";

const SignInPage = () => {
  return (
    <Form>
      <Input label="Email" type="email" required placeholder="my_email@gmail.com"/>
      <Input label="Password" type="password" required placeholder="password"/>
      <NormalizeLink to="/registration">You don't have an account? <br />
        Create an account here!
      </NormalizeLink>
    </Form>
  )
}

export default SignInPage;