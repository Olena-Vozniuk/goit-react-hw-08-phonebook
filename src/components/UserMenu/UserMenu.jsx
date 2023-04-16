import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';
import { UserMenuWrapper, Welcom, UserName } from './UserMenu.styled';
import { styles } from './UserMenuStyles';

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = (evt) => {
        evt.preventDefault();
        dispatch(logOut());
    }

    return (
        <UserMenuWrapper>
            <Welcom> Welcome, <UserName>{user.name}</UserName>!</Welcom>
            <IconButton type='button' onClick={handleLogOut} sx={styles.logOutBtn} color="primary">
                <ExitToAppIcon />
            </IconButton>
        </UserMenuWrapper>
    )
}