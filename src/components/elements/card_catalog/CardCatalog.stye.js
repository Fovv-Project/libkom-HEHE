import styled from "styled-components";
import Colors from "../../../styles/colors";
const CardWrapper = styled.section `
    background-color: ${Colors.Nude};
    padding: 1rem 2rem;
    height: 16.25rem;
    width: 12rem;
    text-align: center;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;

    img {
        border-radius: 0.5rem;
        width: 9rem;
    }

    h4 {
        font-size: 1.025rem;
    }

    a {
        font-size: 1rem;
        background-color: ${Colors.Mustard};
        width: 5rem;
        border-radius: 0.5rem;
    }
`

export default CardWrapper;