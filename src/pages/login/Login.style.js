import styled from "styled-components";
import Colors from "../../styles/colors";
export const LoginWrapper = styled.section`
    height: 926px;
    background: linear-gradient(180deg, #FFF2DD 68.54%, #FFFFFF 100%);
    text-align: center;
    padding: 0 auto;
    .login-box{
        justify-content: center;
        text-align: center;
        padding-top: 50px;
        display: grid;
    }
    .ilustration {
        width: 400px;
    }
    .logo-lib {
        margin: auto;
    }
    .login-button {
        background-color: ${Colors.Mustard};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
        border-radius: 6px;
        border-color: ${Colors.Mustard};
        width: 312px;
        height: 52px;
        color: black;
        font-weight: bolder;
        font-size: 20px;
        margin: auto;
        
    }
`;
