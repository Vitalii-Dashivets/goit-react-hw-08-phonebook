import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { AppSection, TitleOne, TitleContacts } from '../pages/Contacts.styled';
import { Loader } from 'components/Loader/Loader';

import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <AppSection>
      <TitleOne>Phonebook</TitleOne>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {error && <b>ERROR: {error}</b>}

      {isLoading && <Loader />}
      <ContactList />
    </AppSection>
  );
};
export default Contacts;
