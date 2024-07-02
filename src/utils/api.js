// api.js
const BASE_URL = 'http://localhost:5000';

export const getAllCustomers = async () => {
  const response = await fetch(`${BASE_URL}/data`);
  return await response.json();
};

//ADD
export const addCustomer = async (customerData) => {
  const response = await fetch(`${BASE_URL}/data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData),
  });
  return await response.json();
};

export const editCustomer = async (id, customerData) => {
  const response = await fetch(`${BASE_URL}/data/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerData),
  });
  return await response.json();
};

export const deleteCustomer = async (id) => {
  const response = await fetch(`${BASE_URL}/data/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
