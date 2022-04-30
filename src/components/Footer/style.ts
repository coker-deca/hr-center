import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;

    .divider {
        padding-top: 25px;
        text-align: center;
    }

    .row {
        display: flex;
        justify-content: space-between;
        list-style: none;
        align-items: start;
        font-size: 14;
        width: 100%;
        max-width: 1440px;
        margin: 0 10%;

        .column {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: 48px;

            p {
                margin: 10px 0 28px 0;
                font-size: 16px;
                font-weight: 600;
                color: #3C1D59;

                img{
                    margin-right: 21px;
                }
            }

            .break {
                flex-basis: 100%;
                height: 0;
            }
        }

        .last-link {
            margin-left: 70px;
        }
    }

    @media only screen and (max-width: 600px), (orientation: portrait) {
        padding: 46px 0;
        .row {
            display: block;
            padding: 0 16px;
            margin: 0;

            .column {
                margin-bottom: 16px;

                p {
                    margin: 0 0 16px 0;
                }

                a {
                    margin-bottom: 16px;
                }
            }
        }

        .divider {
            p {
                padding-bottom: 24px;
            }
        }
    }
`;

export const Link = styled.div`
    color: #6f6f6f;
    margin-bottom: 20px;
    font-size: 14px;
    font-style: normal;
    text-decoration: none;
`;
