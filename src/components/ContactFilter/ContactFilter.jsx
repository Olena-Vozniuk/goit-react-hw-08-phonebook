import { useDispatch } from "react-redux";
import { changeFilter } from "redux/contacts/filtersSlice";
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { styles } from './ContactFilterStyles';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


export const ContactFilter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const filter = e.currentTarget.value.trim();
        dispatch(changeFilter(filter));
    }; 

    return (
    <Box sx={styles.wrap}>
      <FormControl sx={styles.input}>
        <InputLabel><PersonSearchIcon/></InputLabel>
        <OutlinedInput
          type="text"
          label="Search"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};