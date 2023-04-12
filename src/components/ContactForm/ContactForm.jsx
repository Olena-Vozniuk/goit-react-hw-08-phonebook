import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoading } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import { selectContacts  } from "redux/contacts/selectors";
import { Input, Form, Button } from "./ContactForm.styled";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const contacts = useSelector(selectContacts );

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const newName = form.elements.name.value;
        const newPhone = form.elements.number.value;
        const contact = {
            name: newName,
            phone: newPhone
        };
        
        if (contacts.find(({ name }) => name === newName)) {
            toast(`${newName} is already in contacts.`);
            form.reset();
            return
        }
        dispatch(addContact(contact));
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <span>Name</span>
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
             <span>Number</span>
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            <br />
            <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          pauseOnHover
          theme="light"
        />
      <Button type="submit" disabled={isLoading}>Add contact</Button>
    </Form>
    )
}