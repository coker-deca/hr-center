import styled, { css } from 'styled-components';

export const Dialog = styled.div`
  background: white;
  padding: 0 5px;
  font-family: 'DM Sans';
  font-style: normal;
  border-radius: 5px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: max-content;
  z-index: 1;
  perspective: 1px;

  .error {
    color:red;
    padding:10px;
  }

    .content-wrapper {
        border-radius: 5px;
        overflow: hidden;
    }

    .close {
    float:right;
    width:24px;
    height:24px;
    margin-top:0px;
    margin-right:-30px;
    cursor:pointer;
    background: white;
    border-radius: 50%;
    text-align: center;
    font-weight: 700;
  }
`;

export const ModalHead = styled.div`
    background: white;
    border: 1px solid grey;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.005em;
    color: black;
    padding: 24px 28px;
`;

export const ModalBody = styled.div`
    background: whitesmoke;
    border: 1px solid grey;
    padding: 12px 28px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.005em;
    color: black;
    padding-bottom: 30px;
`;

export const BodyFields = styled.p<{useMediaQuery: boolean;}>`
    margin: 0;
    margin-bottom: 20px;
    .key {
        font-weight: 500;
    }
    .value {
        font-weight: 400;
        position: absolute;
        left: 149px;
        ${({ useMediaQuery }) =>
            useMediaQuery &&
            css`
            position: static;
            margin-left: 10px;
        `}
    }
`;
