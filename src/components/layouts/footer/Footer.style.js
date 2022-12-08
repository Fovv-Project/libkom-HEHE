import styled from "styled-components";
import Colors from "../../../styles/colors";
const FooterWrap = styled.section `
    background-color: ${Colors.Brown} ;
    text-align: center;
    padding: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    

    img {
        height: 2rem;
    }

    .shortcut ul{
        display: flex;
        justify-content: center;
    }

    .shortcut ul li{
        padding:0 1rem;
        font-size: 0.8rem;
    }

    a{
        color: white;
    }

    .copy-right p{
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
    }
`

export default FooterWrap;