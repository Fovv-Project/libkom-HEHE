import styled from "styled-components";
import Colors from "../../../styles/colors";

export const LoginWrapper = styled.section`
    background: linear-gradient(180deg, #FFF2DD 68.54%, #FFFFFF 100%);
    height: 100vh;
    
    .container{
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-box {
        width: 19.5rem;
    }

    .ilustration {
        width: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .login-button {
        background-color: ${Colors.Mustard};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
        border-radius: 6px;
        border-color: ${Colors.Mustard};
        width: 19.5rem;
        height: 3.25rem;
        color: black;
        font-weight: bolder;
        font-size: 1.25rem;
        margin: auto;
        
    }
`;
