import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { Button, ContactWrapper } from "./ContactItem.styled";
import ClipLoader from "react-spinners/ClipLoader";
import { selectIsLoading } from "redux/contacts/selectors";


export const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const { id, name, number } = contact;
    
    const handleDelete = () => {       
        dispatch(deleteContact(id))
    };

    return (
        <ContactWrapper>
            {/* <table>
                <tr>
                    <td>{name}</td>
                    <td>{number}</td>
                </tr>
            </table> */}
            <p>{name}: {number}</p>
            <Button type="submit" disabled={isLoading} onClick={handleDelete}>
                {isLoading && <ClipLoader
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}Delete</Button>
        </ContactWrapper>
    )
    
}