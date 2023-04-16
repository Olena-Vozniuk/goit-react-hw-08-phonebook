import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { ContactItem } from "components/ContactItem/ContactItem";
import { List, ListItem } from "./ContactList.styled";
import { selectError } from "redux/contacts/selectors";


export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const error = useSelector(selectError);
      
    return (  
        <div>
        {contacts.length !== 0 && !error && <List>
            {contacts && contacts.map( contact => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact} />
                </ListItem>
            ))}        
            </List>}
            {error && <p>{error}</p>}
            {contacts.length === 0 && !error && <p><b>Sorry, contact not found!</b></p>}
            </div>
    );
};