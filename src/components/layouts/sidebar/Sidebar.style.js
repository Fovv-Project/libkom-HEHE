import styled from "styled-components";
import Colors from "../../../styles/colors";
const SidebarWrapper = styled.div `
    
    background-color: ${Colors.Primary} ;
    width: fit-content;
    height: 100vh;
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    .sidebar {
        padding-top: 5rem;
    }
    .list-sidebar {
        padding: 0.25rem 2rem;
        display: flex;
        margin-bottom: 0.5rem;
    }

    .list-sidebar:hover {
        background-color: ${Colors.Mustard};
        border-radius: 10px ;
        cursor: pointer;
        color: black;
    }

    li a {
        display: flex;
        align-items: center;
        color: ${Colors.Brown};
    }

    .icon-sidebar {
        display: flex;
        align-items: center;
        color: ${Colors.Brown};
        margin-right: 0.5rem;
    }
`

export default SidebarWrapper;