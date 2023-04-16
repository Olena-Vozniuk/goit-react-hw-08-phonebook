import { AuthWrapper, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
    return (
        <AuthWrapper>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Log In</StyledNavLink>
        </AuthWrapper>
    );
};

