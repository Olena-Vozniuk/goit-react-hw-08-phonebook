import { useAuth } from 'hooks';
import { StyledNavLink, Nav } from './Navigation.styled';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
        </Nav>
    );
};