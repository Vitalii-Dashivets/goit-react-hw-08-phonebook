import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilter,
  selectIsSorted,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const sorted = useSelector(selectIsSorted);
  const visibleContacts = useSelector(selectVisibleContacts);
  return { contacts, error, isLoading, filter, visibleContacts, sorted };
};
