import React from 'react';
import styled from 'styled-components';
import SShot from '../img/image0.jpg';
import TT from '../img/TransitToken.jpg';

const PictureBox = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-image: url(${SShot});
  background-size: cover;
`;

const Picture = props => {
  return <PictureBox></PictureBox>;
};

export default Picture;
