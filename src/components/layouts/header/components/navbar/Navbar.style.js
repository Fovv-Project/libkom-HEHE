import styled from "styled-components";
import Colors from "../../../../../styles/colors";
const NavbarWrap = styled.section `
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
    }

    .list-navbar li{
        /* background-color: ${Colors.Brown}; */
        text-align: center;
        align-self: center;
    }

    .list-navbar li a:hover {
        background-color: ${Colors.Mustard};
        cursor: pointer;
        color: black;
    }

    .list-navbar li a{
        display: block;
        padding: 0.8rem 1.5rem;
        width: 10rem;
        font-size: 0.8rem;
        border-radius: 1.875rem;
        color: ${Colors.Brown};
        font-weight: 500;
    }
`;

export default NavbarWrap;