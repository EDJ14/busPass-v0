import React from 'react';
import styled from 'styled-components';

const ChoosePicContainer = styled.div`
  width: 75%;
  height: 50%;
`;

const ChoosePicInput = styled.select``;

const ChoosePicture = props => {
  return (
    <ChoosePicContainer>
      <ChoosePicInput>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </ChoosePicInput>
    </ChoosePicContainer>
  );
};
