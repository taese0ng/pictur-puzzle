import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Body from './components/Body';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>

        <Body/>

        <Input/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 20px auto;
  width: 513.2253px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`

export default App;
