import styled from "styled-components";
import Colors from "../../../../styles/colors";
const SidebarWrapper = styled.div `
    background-color: ${Colors.Primary} ;
    position: fixed;
    width: fit-content;
    font-size: 1.25rem;
    .menu-wrapper{
      padding-top: 3rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      height: 100vh;
      padding-left: 1rem;
      padding-right: 1rem;
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
`;

export default SidebarWrapper;