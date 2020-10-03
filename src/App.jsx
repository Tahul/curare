import React from 'react';
import styled from 'styled-components';
import { theme } from '@heetch/flamingo-react';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.brand.primary};
  min-height: 100vh;
  width: 320px;
  max-width: 320px;
`;

const App = () => {
  return <StyledApp></StyledApp>;
};

export default App;
