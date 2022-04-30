import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.3);
`;

export const PortalContainer = styled.div`
  position: relative;
  z-index: 0;
`;