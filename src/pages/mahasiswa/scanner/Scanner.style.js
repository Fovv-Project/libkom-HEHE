import styled from "styled-components";
import Colors from "../../../styles/colors";

export const ScannerWrapper = styled.section`
    .scan-option {
        display: flex;
        flex-direction: row;
        position: absolute;
        width: 100vw;
        z-index: 99;
        justify-content: space-between;

    }
    .backIcon {
        margin: 4rem 3rem;
        cursor: pointer;
        /* float: left; */
    }
    .flashIcon { 
        border-radius: 100%;
        width: 2.1875rem;
        height: 2.1875rem;
        display: flex;
        text-align: center;
        justify-content: center;
        margin: 4rem 3rem;
        cursor: pointer;
    }
    /* .QRCodeWrapper{
        height: 831px;
    } */
    p {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin : 1.75rem;
    }
    
`;