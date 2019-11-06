import React from "react";
import { Container, Form, Button } from "semantic-ui-react";

export default function ResetButton(props) {
  console.log(`ResetButton Props: ${props}`);

  const clearForm = event => {
    props.setUser({
      fname: "",
      email: "",
      address: "",
      phone: ""
    });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={clearForm}>
          <Button style={{marginTop: 12}}>Reset Form</Button>
        </Form>
      </Container>
    </div>
  );
}
