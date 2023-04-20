import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading, selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import Button from "@mui/material/Button";
import Box from './ContactForm.styled';
import { Buttons } from './ContactForm.styled';
import { ContactSchema } from '../../utils/formValidation';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-mui';



export const ContactForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts);

    const handleSubmit = (values, actions) => {

        if (contacts.find(({ name }) => name === values.name)) {
            toast.warning(`"${values.name}" is already in your contacts.`);
            actions.resetForm();
            return
        };

        if (contacts.find(({ number }) => number === values.name)) {
            toast(`"${values.name}" is already in your contacts.`);
            actions.resetForm();
            return
        };

        dispatch(addContact(values));
        // toast(`"${values.name}" was added in your contacts.`);
        onClose();
    };

   

    return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
            >
                <Form>
        <Box>  
            <Field type="text" name="name" component={TextField}
              label="Name"
              autoComplete='off'
              style={{width: '100%', marginBottom: '20px'}}/>       
            <Field type="tel" name="number" component={TextField}
              label="Number"
              autoComplete='off'
              style={{width: '100%'}}/>   
             <Buttons> 
            <Button type="submit" sx={{margin: 2}} variant="contained" color="primary">
                    Add contact</Button>
            <Button type="button" sx={{margin: 2}} variant="outlined" color="primary" onClick={() => onClose()}>
                            Cancel</Button>
            </Buttons>  
                    </Box>
                    </Form>
    </Formik>
            <ToastContainer
                position='top-right'
          autoClose={3000}
          hideProgressBar={false}
                pauseOnHover
                closeOnClick
          theme="light"
            />
    </div>
  );
};