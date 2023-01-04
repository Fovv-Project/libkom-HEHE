import styled from "styled-components";

const BukuWrapper = styled.div `
    width: fit-content;
    padding-top: 5rem;
    padding-left: 13rem;
    
    .books {
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 1rem;
        display: grid;
        background-color: orange;
    }
    .search-wrapper {
        display: flex;
        position: relative;
    }

  .search-wrapper input{
    background-color: #FBFBFB;
    width: 40.125rem;
    padding: 0.5rem;
    padding-left: 2.5rem;
    font-size: 1rem;
    border-radius: 100px;
    border: 0;
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