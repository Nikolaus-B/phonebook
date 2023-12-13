import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NoPhoneMessage } from 'components/NoPhoneMessage/NoPhoneMessage';
import { PhoneForm } from 'components/PhoneForm/PhoneForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <PhoneForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <NoPhoneMessage />}
    </>
  );
}
