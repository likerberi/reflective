import React, { Component, Fragment } from 'react';
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    padding: 0;
    margin : 0;
  }
`

class App extends Component {
  render() {
    return (
      <Container>
        <Button> Hi </Button>
        <Button danger>Hello</Button>
        <Anchor href="http://recovery97.tistory.com">HOME</Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width : 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  &:active,
  &:focus{
    outline:none;
  }
  background-color: ${
    props => (props.danger ? "#2ecc71" : "#e74c3c")
  }
`;

const Anchor = Button.withComponent("a").extend`
  text-decoration: none;
`;



export default App;
