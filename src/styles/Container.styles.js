import styled from "styled-components";



export const Contianer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.mainBg};
`;


export const CardContainer = styled.div`
    position: relative;
    background: ${(props) => props.theme.cardBg};
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


export const UpperSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;


export const MidSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px 0px;
`;


export const CDStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
`;


export const CdChildStyled = styled.div`
    font-family: fantasy; 
    color: ${(props)=>props.theme.countDown};
    font-size: 25px;
    padding: 15px;
    text-align: center;
`;


export const ExpiredStyled = styled.div`
    font-family: sans-serif; 
    color: ${(props)=>props.theme.countDown};
    font-size: 25px;
    padding: 15px;
    text-align: center;
`;


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    & a {
        background: #dfac7f;
        color: #fff;
        font-size: 16px;
        text-decoration: none;

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
    & button{
            margin-left: auto;
            background: #076dfe;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 10px;
            &:hover{
                cursor: pointer;
                background: #38138b;
            }
        }

`;

export const ToogleContainer = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    & p{
        padding: 10px;
        margin-top: -3px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        color:${(props)=>props.theme.toogleText};
    }
`;



