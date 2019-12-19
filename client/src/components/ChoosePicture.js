import React from 'react';
import styled from 'styled-components';

const ChoosePicContainer = styled.div`
  width: 75rem;
  height: 50rem;
`;

const imgPath = img => {
  return '../img/' + img;
};

const ChoosePicture = props => {
  handleChange = e => {
    //this.
  };

  return (
    <ChoosePicContainer>
      <select name="browsers" onChange={e => console.log(e.target.value)}>
        <option value="firefox">Firefox</option>
        <option value="ie">IE</option>
        <option value="chrome">Chrome</option>
        <option value="opera">Opera</option>
        <option value="safari">Safari</option>
      </select>
    </ChoosePicContainer>
  );
};

export default ChoosePicture;
