import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading, selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import { TextField } from '@mui/material';
import Button from "@mui/material/Button";
import Box from './ContactForm.styled';
import { Buttons } from './ContactForm.styled';

export const ContactForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts);

    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const newName = form.elements.name.value;
        const newNumber = form.elements.number.value;
        const contact = {
            name: newName,
            number: newNumber,
        };
        
        if (contacts.find(({ name }) => name === newName)) {
            toast(`"${newName}" is already in your contacts.`);
            form.reset();
            return
        };

        if (contacts.find(({ number }) => number === newNumber)) {
            toast(`"${newNumber}" is already in your contacts.`);
            form.reset();
            return
        };
        
        dispatch(addContact(contact))
        // toast(`"${newName}" is already in your contacts.`);
        onClose();
    };

    return (
        <Box component="form" sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
            autoComplete="off"
            onSubmit={handleSubmit}
    >
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" type="text" required/>
            <TextField id="outlined-basic" label="Number" variant="outlined" name="number" type="tel" required/>
            <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          pauseOnHover
          theme="light"
            />
            <Buttons>
            <Button type="submit" variant="contained" color="primary" disabled={isLoading}>Add Contact</Button>
            <Button type="button" variant="outlined" onClick={() => onClose()}>
          Cancel
            </Button>
            </Buttons>
        </Box>
    )
}