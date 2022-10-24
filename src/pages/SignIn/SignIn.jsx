import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

const SignInPage = () => {
  return (
    <Form>
      <Input label="Email" type="email" required placeholder="my_email@gmail.com"/>
      <Input label="Password" type="password" required placeholder="password"/>
      <Link to="/registration">You don't have an account? <br />
        Create an account here!
      </Link>
    </Form>
  )
}

export default SignInPage;