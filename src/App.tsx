import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <Container>
        <Header/>

        <Input/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: auto;
  width: 595.276px;
`

export default App;
