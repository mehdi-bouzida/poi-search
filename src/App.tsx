import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import Routes from './components/Routes';

const App: React.FC = () => (
  <RootContainer>
    <Router>
      <Routes />
    </Router>
  </RootContainer>
);

export default App;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
