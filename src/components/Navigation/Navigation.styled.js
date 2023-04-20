import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
font-weight: 600;
color: #3F4040;
padding: 30px 0 30px 0;
&.active {
    color: orangered;
  }
`;

export const Nav = styled.nav`
display: flex;
gap: 15px;
`;