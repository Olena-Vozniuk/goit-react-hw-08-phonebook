import { useSelector } from "react-redux";
import { selectVisibleContacts, selectFilter, selectError } from "redux/contacts/selectors";
import { ContactItem } from "components/ContactItem/ContactItem";
import { List, ListWrap } from "./ContactList.styled";



export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const error = useSelector(selectError);
    const filter = useSelector(selectFilter);
      
    return (  
        <ListWrap>
        {contacts.length !== 0 && !error && <List>
            {contacts && contacts.map( contact => (
                    <ContactItem contact={contact} key={contact.id}/>  
            ))}        
            </List>}
            {error && <p>{error}</p>}
            {contacts.length === 0 && !error && filter && <p><b>Contact not found!</b></p>}
            {contacts.length === 0 && !error && !filter && <p><b>Add your first contact</b></p>}
            </ListWrap>
    );
};