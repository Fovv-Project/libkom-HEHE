import React from "react";
import styled from "styled-components";
import Colors from "../../styles/colors";
const LayoutWrapper = styled.div `
    display: grid;
    grid-template-columns: 0.75fr 4fr;
    grid-template-rows:  auto auto;
    grid-template-areas: "sidebar bar" "sidebar content";

    .bar {
        position: fixed;
        grid-area: bar;
        background-color: ${Colors.Primary};
        width: 100%;
        height: 4rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .sidebar {
        grid-area: sidebar;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .content{
        padding: 0 1rem;
        grid-area: content;
    }
`;

export default LayoutWrapper;