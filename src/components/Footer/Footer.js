import { Box, Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styles } from './FooterStyles';

export const Footer = () => (
  <Box component="footer" sx={styles.footer}>
        <Box sx={styles.wrap}>
          <Typography>Developed with</Typography>
          <FavoriteIcon sx={styles.heart} />
          <Typography>by</Typography>
          <Link
            href="https://github.com/Olena-Vozniuk"
            target="_blank"
            rel="noreferrer noopener nofollow"
            color="inherit"
            sx={styles.link}       
          >
            Olena Vozniuk
          </Link>
        </Box>    
  </Box>
);