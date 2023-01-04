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

    .logo-lib {
        width: 10rem;
    }

    .ilustrationAdminLogin {
        width: 16rem;
    }
    
    form{
        display: flex;
        flex-direction: column;
    }

    label {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: 600;
        margin: 1rem;
    }

    input {
        width: 30rem;
        height: 3rem;
        border-radius: 1.5625rem;
        font-size: 1rem;
        padding: 1rem 2rem;
    }

    ::placeholder {
        color: #C4B2AE;
    }

    .login-button {
        width: 30rem;
        height: 3rem;
        background-color: ${Colors.Mustard};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
        border-radius: 1.5625rem;
        border-color: ${Colors.Mustard};
        color: black;
        font-weight: bolder;
        font-size: 1.25rem;
        margin: 1rem;
    }
`;
