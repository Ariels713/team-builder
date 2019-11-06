import React, { useState } from "react";
import { Container, Button, Form } from "semantic-ui-react";

const UserForm = (props) => {
    console.log(`UserForm props ${props}`)
    const [user, setUser] = useState({
        fname: '',
        email: '',
        address: '',
        phone: '',
    })

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const formSubmit = event => {
        event.preventDefault();
        const newUser = {
            ...user,
            id: Date.now()
        }
        props.newUser(newUser)
    }
    console.log(user.fName)
    return(
        <Container style={{ margin: 20 }}>
        <Form onSubmit={formSubmit}>
          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" placeholder="First name" value={user.fName} onChange={changeHandler} />
            <Form.Input label="Last name" placeholder="Last name" value={user.fName} onChange={changeHandler} />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Address" placeholder="Address" value={user.fName} onChange={changeHandler}/>
            <Form.Input label="Phone" placeholder="Phone" value={user.fName} onChange={changeHandler}/>
          </Form.Group>
          {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
}
export default UserForm;
