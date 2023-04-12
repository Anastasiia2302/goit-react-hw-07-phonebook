import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import { Container, Title } from './PhoneBook.styled';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';


export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Container>
      <Title>Phonebook</Title>
      <Phonebook />
      {isLoading && !error && <b>Request in progress...</b>}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
