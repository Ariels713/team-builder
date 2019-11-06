import React from "react";
import { Container, List } from "semantic-ui-react";

export default function UserList(props) {

  return (
    <div>
      {props.userData.map(item => {
        return (
          <Container key={item.id} style={{ margin: 20 }}>
            <List>
              <List.Item>
                <List.Icon name="users" />
                <List.Content>{item.fName}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>{item.address}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:ariels713@gmail.com">{item.email}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" />
                <List.Content>{item.phone}</List.Content>
              </List.Item>
            </List>
          </Container>
        );
      })}
    </div>
  );
}
