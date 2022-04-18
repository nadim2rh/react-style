import styled from "styled-components";



export const Contianer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    background: #222222;
`;


export const CardContainer = styled.div`
    position: relative;
    background: #1e1e1e;
    height: auto;
    width: 780px;
    overflow: hidden;
    display: flex;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
`;


export const ContentContainer = styled.div`

`;


export const MidSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px 0px;
`;

export const UpperSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;


export const ButtonContainer = styled.div`
    display: flex;
    & a {
        background: #dfac7f;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        position: relative;
        padding: 10px 45px;
        &:hover{
            background: #794c2e;
            cursor: pointer;
            transition: all 0.5s ease;
        }
        &:nth-of-type(1){
            border-radius: 10px 0px 0px 10px;
            margin-right: 2px;
        }
        &:nth-of-type(2){
            border-radius: 0px 10px 10px 0px;
        }
    }
`;



