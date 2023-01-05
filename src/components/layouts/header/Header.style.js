import styled from "styled-components";
import Colors from "../../../styles/colors";
import responsiveLayout from "../../../styles/constant";

const HeaderWrap = styled.section`
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
`;

export default HeaderWrap;