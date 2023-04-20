import { Box} from '@mui/material';
import { Link } from 'react-router-dom';
import LogoImage from '../../images/phonebook.ico';
// import { styles } from './LogoStyles';


export const Logo = () => (
  <Box component={Link} to={'/'}>
        <img src={LogoImage} alt="logoImage" width="40px"/>
  </Box>
);