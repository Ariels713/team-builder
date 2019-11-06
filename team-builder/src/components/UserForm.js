import React, { useState } from "react";
import { Container, Button, Form } from "semantic-ui-react";
import ResetButton from './ResetButton'

const UserForm = props => {
  console.log(`UserForm props ${props}`);
  const [user, setUser] = useState({
    fname: "",
    email: "",
    address: "",
    phone: ""
  });

  const changeHandler = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const formSubmit = event => {
    event.preventDefault();
    const newUser = {
      ...user,
      id: Date.now()
    };
    props.newUser(newUser);
  };

  //Semantics-UI

  return (
    <Container style={{ margin: 20 }}>
      <Form onSubmit={formSubmit}>
        <Form.Group unstackable widths={2}>
          <Form.Input
            name="fName"
            label="Full Name"
            placeholder="Full Name"
            value={user.fName}
            onChange={changeHandler}
          />
          <Form.Input
            name="email"
            label="Email"
            placeholder="Location"
            value={user.email}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            name="address"
            label="Address"
            placeholder="Location"
            value={user.address}
            onChange={changeHandler}
          />
          <Form.Input
            name="phone"
            label="Phone"
            placeholder="Phone"
            value={user.phone}
            onChange={changeHandler}
          />
        </Form.Group>
        {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
        <Button type="submit">Submit</Button>
      </Form>
      <ResetButton setUser={setUser}/>
    </Container>
  );
};
export default UserForm;
