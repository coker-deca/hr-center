import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0;

    .logo{
        margin: 10px 10%;
    }
`;

export const Divider = styled.div`
    width: 20%;
    height: 100%;
    @media only screen and (max-width: 992px){
        display: none;
    }
`;

export const Container = styled.section`
    padding: 0 3%;

`;

export const Column = styled.div`
min-width: 350px;
.container {
    background-color: #FFFFFF;
    border: 1px solid grey;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
    width: 30%;
    padding: 10px 16px;
    :hover {
      border-color: lightblue;
      :nth-child(n) > span {
        color: lightblue;
      }
    }
    @media only screen and (max-width: 992px){
        width: 70%;
    }
  }
  .title {
        color: #6699cc;
        margin-bottom: 12px;
        min-width: 102px;
        text-align: center;
    }
    .value {
        color: darkgray;
        font-weight: bold;
        font-size: 40;
        letter-spacing: 1px;
        line-height: 50px;
        margin: 0;
    }
`;
export const Row = styled.div`
    display: flex;
    align-items: center;    justify-content: space-between;
    height: 100%;

    @media only screen and (max-width: 992px){
        flex-direction: column;
    }

    form-container{
        width: 38%;
        @media only screen and (max-width: 992px){
            width: 100%;
        }
    }
`;

export const HomeRow = styled(Row)<{bgColor?: string}>`
    font-family: "Gilroy-Bold";
    padding-bottom: 200px;
    height: 575px;
    background: ${props => props.bgColor ? props.bgColor : "inherit"};

    section{
        display: static;
    }
    button{
        width: 50%;
        @media only screen and (max-width: 992px){
            width: 100%;
        }
    }

    svg{
        margin: 28px 12px 0 0;
    }

    @media only screen and (max-width: 992px){
        height: auto;
        padding-bottom: 30px;
    }
`;