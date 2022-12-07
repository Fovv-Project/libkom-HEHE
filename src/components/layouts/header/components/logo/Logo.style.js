import styled from "styled-components";
import Colors from "../../../../../styles/colors";
const LogoWrap = styled.section `
    display: flex;
    align-items: center;
    /* background-color: ${Colors.Primary}; */
    width: 100vh;
    img {
        height: 2rem;
        margin-right: 0.75rem;
    }

    h1{
        font-weight: 800;
    }
`;

export default LogoWrap;