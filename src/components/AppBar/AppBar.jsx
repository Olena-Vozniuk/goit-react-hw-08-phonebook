import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";
import { Header, LogoNav } from "./AppBar.styled";
import { Logo } from "components/Logo/Logo";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <LogoNav>
            <Logo/>
                <Navigation />
                </LogoNav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}         
        </Header>
    )
};