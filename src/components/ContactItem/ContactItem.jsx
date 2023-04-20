import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { Box, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PhoneIcon from '@mui/icons-material/Phone';
import { styles } from './ContactItemStyles';


export const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const { id, name, number } = contact;
    
    const handleDelete = () => {
        dispatch(deleteContact(id))
    };

    return (
        <Box sx={styles.item}>
            <Box sx={styles.itemContentWrap}>
                <Box sx={styles.itemName}>
                    <PermContactCalendarIcon sx={styles.itemIcon} />{name}
                    </Box>
                <Box sx={styles.itemName}>
                    <PhoneIcon sx={styles.itemIcon}/>{number}
                    </Box>
                <Tooltip title="Dlete contact">
                    <IconButton aria-label="delete" onClick={handleDelete} sx={styles.deleteIcon}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );    
};