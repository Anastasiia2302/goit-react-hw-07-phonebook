import { FilterInput, FilterLabel, WrapFilter } from 'components/PhoneBook.styled';
import { useDispatch } from 'react-redux';
import  { filterContacts } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  
  return (
    <WrapFilter>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        onInput={e => dispatch(filterContacts(e.target.value))}
      />
    </WrapFilter>
  );
}
