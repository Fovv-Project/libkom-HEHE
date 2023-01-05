import styled from "styled-components";
import Colors from "../../../styles/colors";
const BukuWrapper = styled.div `
  width: fit-content;
  padding-top: 5rem;
  padding-left: 13rem;
  background-color: ${Colors.Primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .books {
      grid-template-columns: repeat(5,1fr);
      gap: 2.5rem;
      display: grid;
  }

  .categories{
    display: flex;
    align-self: flex-start;
    margin-bottom: 1rem;
  }

  .addBook{
    align-self: flex-end;
    margin-bottom: 1rem;
  }

  .addBook a{
    font-size: 1rem;
    background-color: ${Colors.Mustard};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
  }
  
  .filter-wrapper{
    display: flex;
    margin-bottom: 1rem;
  }
  .search-wrapper {
      display: flex;
      position: relative;
      margin-right: 1rem;
  }

  .search-wrapper input{
    background-color: #FBFBFB;
    width: 40.125rem;
    padding: 0.5rem;
    padding-left: 2.5rem;
    font-size: 1rem;
    border-radius: 100px;
    border: 1px solid #E5E5E5;
  }

  .search-wrapper input:focus{
    box-shadow: green;
  }

  .icon-search-wrapper{
    display: flex;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    padding: 0.25rem;
    position: absolute;
    box-sizing:border-box;
    top:50%;
    left:0.75rem;
    transform: translateY(-50%);
  }

  .icon-search {
    color: #999999;
    font-size: 1.5rem;
  }
`;

export default BukuWrapper;