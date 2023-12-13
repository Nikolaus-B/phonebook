import { useDispatch, useSelector } from 'react-redux';
import {
  ItemName,
  PhonebookItem,
  PhonebookList,
  PhonebookNumber,
} from './ContactList.styled';
import { Notify } from 'notiflix';
import { deleteContact } from 'redux/contacts/operations';
import { filterContacts } from 'redux/contacts/contactSelectors';
import Button from '@mui/material/Button';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filterContacts);

  return (
    <PhonebookList>
      {contacts.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <ItemName>{item.name}:</ItemName>
            <PhonebookNumber>{item.number}</PhonebookNumber>
            <Button
              variant="outlined"
              onClick={() => {
                Notify.info(`${item.name} removed from your phone book`);
                dispatch(deleteContact(item.id));
              }}
            >
              Delete
            </Button>
          </PhonebookItem>
        );
      })}
    </PhonebookList>
  );
};
