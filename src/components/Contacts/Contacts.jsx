import { BtnDel, Item, List, Name } from 'components/PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getStatusFilter } from 'redux/selectors';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const filterContacts  = () => {
   
   return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      
  };
  console.log(contacts)
  return (
    <>
     <List>
        {filterContacts().map(({ id, name, phone }) => {
          return (
            
            <Item key={id}>
              <Name>{name}</Name>
              <Name>{phone}</Name>
              <BtnDel
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </BtnDel>
            </Item>
          );
        })}
      </List>
    </>
  );
}