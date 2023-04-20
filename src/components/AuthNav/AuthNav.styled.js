import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const AuthWrapper = styled.div`
display: flex;
gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
font-weight: 600;
color: #3F4040;
padding: 30px 10px 30px 10px;
&.active {
    color: orangered;
  }
`;