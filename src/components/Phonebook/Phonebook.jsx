import { Formik } from 'formik';
import * as Yup from 'yup';
import { customAlphabet } from 'nanoid';

import {
  Btn,
  ErrorMes,
  Forma,
  Input,
  Label,
  Wrap,
} from 'components/PhoneBook.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';



const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  phone: Yup.string().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  phone: '',
};

export default function Phonebook() {
  const dispatch = useDispatch();
  

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id' + nanoid(),
      name: values.name,
      phone: values.phone,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma>
        <Wrap>
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="text" id="name" />
          <ErrorMes name="name" component="div"></ErrorMes>
        </Wrap>

        <Wrap>
          <Label htmlFor="phone">Number</Label>
          <Input name="phone" type="tel" id="phone" />
          <ErrorMes name="phone" component="div"></ErrorMes>
        </Wrap>
        <Btn type="submit">Add contact</Btn>
      </Forma>
    </Formik>
  );
}