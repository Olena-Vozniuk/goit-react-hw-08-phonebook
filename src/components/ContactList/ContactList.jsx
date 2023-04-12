import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import { ContactItem } from "components/ContactItem/ContactItem";
import { List, ListItem } from "./ContactList.styled";


export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
      
    return (  
        <div>
        {contacts.length !== 0 && <List>
            {contacts && contacts.map( contact => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact} />
                </ListItem>
            ))}        
            </List>}
            {contacts.length === 0 && <p><b>Sorry, contact not found!</b></p>}
            </div>
    );
};