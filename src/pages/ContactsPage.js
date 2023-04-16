import { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from '@mui/material';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div style={{ textAlign: 'center', paddingTop: '30px'}}>
            <Button onClick={toggleModal} variant="outlined"><PersonAddIcon/>Add a new contact</Button>
            {showModal && (<ModalWindow onClose={toggleModal}><ContactForm onClose={toggleModal}/></ModalWindow>)}
            {isLoading && <p>Request in progress...</p>}
            <ContactFilter />
            <ContactList/>
        </div>
    )
}