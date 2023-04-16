import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthWrapper = styled.div`
display: flex;
gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
font-weight: 600;
color: #3F4040;
padding-bottom: 5px;
&.active {
    color: orangered;
  }
`;