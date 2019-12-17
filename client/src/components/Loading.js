import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-color: orange;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = props => {
  return (
    <LoadingContainer>
      <div class="lds-circle">
        <div></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
