import styled from "styled-components";
import Colors from "../../../styles/colors";

const TableStyles = styled.div `
 background-color: ${Colors.Mustard};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 5rem;

  table {
    background-color: white;
    border-spacing: 0;
    border: 0.0625rem solid #BDBDBD;

    th {
      text-align: left;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.03125rem solid #BDBDBD;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .button-group {
    align-self: flex-end;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .button-group button{
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    font-weight: bold;
    background-color: ${Colors.Primary};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 0;
    border-radius:0.25rem;
    cursor: pointer;
  }

  .button-group select{
    padding: 0.5rem 1rem;
    border-radius:0.25rem;
    border-color: ${Colors.Mustard};
    font-weight: 700;
  }

  .pagination {
    display: flex;
    align-self: flex-end;
    padding: 0.5rem;
    justify-content: space-between;
    width: 20rem;
    align-items: center;
  }

  .btn-pagination{
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${Colors.Primary};
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .icon-pagination {
    font-size: 1.5rem;
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
export default TableStyles;