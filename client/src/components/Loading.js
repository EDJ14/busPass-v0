import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

const duration = 1500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  gridRow: 1 / -1,
  gridColumn: 1 / -1,
  backgroundColor: 'orange',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const LoadingContainer = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  background-color: orange;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = props => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => setInProp(true), []);

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            gridRow: '1 / -1',
            gridColumn: '1/-1'
          }}
        >
          <div className="lds-circle">
            <div></div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Loading;
