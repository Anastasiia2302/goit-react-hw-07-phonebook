import { BtnDel, Item, List, Name } from 'components/PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacts  = () => {
   
   return   contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };

  console.log(contacts);
  return (
    <>
     <List>
        {filterContacts().map(({ id, name, number }) => {
          return (
            <Item key={number}>
              <Name>{name}</Name>
              <Name>{number}</Name>
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