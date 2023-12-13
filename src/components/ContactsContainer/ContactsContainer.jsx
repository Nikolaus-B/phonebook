import { ContactList } from 'components/ContactList/ContactList';
import { NoPhoneMessage } from 'components/NoPhoneMessage/NoPhoneMessage';
import { PhoneForm } from 'components/PhoneForm/PhoneForm';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import { Container } from './ContactsContainer.styled';

export const ContactsContainer = () => {
  const contacts = useSelector(selectContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhoneForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <NoPhoneMessage />}
    </Container>
  );
};
