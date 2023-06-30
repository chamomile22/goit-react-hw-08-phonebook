const BASE_URL = 'https://649aaec6bf7c145d02394bc2.mockapi.io/contacts';

export const getContacts = async () => {
  const res = await fetch(BASE_URL, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  return res.json();
};

export const addContact = async newContact => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newContact),
  });
  return res.json();
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
