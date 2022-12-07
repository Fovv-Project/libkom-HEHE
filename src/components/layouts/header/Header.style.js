import styled from "styled-components";
import Colors from "../../../styles/colors";

const HeaderWrap = styled.section `
    padding: 0.5rem 2rem;
    background-color: ${Colors.Primary} ;
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    .menu-btn Button{
        text-align: center;
        color: ${Colors.Brown};
        background-color: ${Colors.Mustard};
        border: 0;
        font-size: 1.5rem ;
        border-radius: 25%;
        display: none;
    }

    @media (max-width: 741px) {
        .menu-btn Button{
            cursor: pointer;
            display: block;
        }
    }
`

export default HeaderWrap;