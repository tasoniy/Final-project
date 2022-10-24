import React from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";

const ReportForm = () => {
  return (
    <Form>
      <Input type="text" required label="License number" placeholder="License number">hello</Input>
    </Form>
  )
}

export default ReportForm;