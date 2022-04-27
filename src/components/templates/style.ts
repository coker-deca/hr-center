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

export const Container = styled.section<{size?:string}>`
    @media only screen and (max-width: 992px){
        width: 100%;
    }
    position: relative;
    flex-grow: 1;
    width: ${props=>props.size ? props.size : "60%"};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    justify-content: space-between;
    height: 100%;

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