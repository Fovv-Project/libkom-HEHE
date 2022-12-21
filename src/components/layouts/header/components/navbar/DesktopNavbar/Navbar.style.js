import styled from 'styled-components';
import Colors from '../../../../../../styles/colors';
const NavbarWrap = styled.section`
  .list-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  .list-navbar .nav-menu {
    align-self: center;
  }

  .list-navbar .nav-menu a:hover {
    background-color: ${Colors.Mustard};
    cursor: pointer;
    color: black;
  }

  .list-navbar .nav-menu a {
    display: block;
    padding: 0.8rem 1.5rem;
    width: 10rem;
    font-size: 1rem;
    border-radius: 1.875rem;
    color: ${Colors.Brown};
    font-weight: 500;
    text-align: center;
  }

  .icon-menu {
    font-size: 1rem;
    margin-right: 0.8rem;
    display: none;
  }

  .Chevron {
    font-size: 1.25rem;
  }

  .profile-menu {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    background-color: ${Colors.Primary};
    border: 1px solid #000;
    border-radius: 0.5rem;
  }

  .profile-menu .top {
    border-radius: 0.5rem 0.5rem 0 0 !important;
    border-bottom: 1px solid #000;
  }

  .profile-menu .bottom {
    border-radius: 0 0 0.5rem 0.5rem !important;
  }
`;

export default NavbarWrap;
