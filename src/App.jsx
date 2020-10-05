import React from 'react';
import styled from 'styled-components';
import { theme } from '@heetch/flamingo-react';

// Components
import Navigation from './components/layout/Navigation';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 320px;
  max-width: 320px;
`;

const App = () => {
  return (
    <StyledApp>
      <Navigation />
    </StyledApp>
  );
};

export default App;
