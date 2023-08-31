import { Contact } from 'components/Contact/Contact';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { List, ListContainer, Message } from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const { visibleContacts } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts('/contacts'));
  }, [dispatch]);

  return (
    <ListContainer>
      <List>
        {visibleContacts.length === 0 && (
          <Message>There are no contacts for your search</Message>
        )}
        {visibleContacts.map(item => {
          return <Contact key={item.id} contact={item} id={item.id} />;
        })}
      </List>
    </ListContainer>
  );
}
