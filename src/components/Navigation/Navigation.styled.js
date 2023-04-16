import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
font-weight: 600;
color: #3F4040;
padding-bottom: 3px;
&.active {
    color: orangered;
    /* border-bottom: 2px solid orangered; */
  }
`;

export const Nav = styled.nav`
display: flex;
gap: 15px;
`;