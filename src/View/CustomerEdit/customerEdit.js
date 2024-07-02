import React, { useState } from 'react';
import { editCustomer } from '../../utils/api';

const EditCustomer = ({ customer, onCancel, getAllCustomers }) => {
  const [name, setName] = useState(customer.name);
  const [age, setAge] = useState(customer.age);
  const [phone, setPhone] = useState(customer.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCustomer = { name, age, phone };
    await editCustomer(customer.id, updatedCustomer);
    onCancel();
    getAllCustomers();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditCustomer;
