export const getLoading = (state) => state.contacts.loading;
export const getFilter = (state) => state.contacts.contactFilter;
export const getContacts = (state) => state.contacts.contactItems;

export const getFilteredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const filterNormilized = filter.toLowerCase().trim();
  return contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filterNormilized)
  );
};
