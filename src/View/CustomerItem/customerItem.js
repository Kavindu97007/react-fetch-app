// CustomerItem.js
import React, { useState } from 'react';
import EditCustomer from '../CustomerEdit/customerEdit';

const CustomerItem = ({ customer, onDelete, getAllCustomers }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    onDelete(customer.id);
  };

  return (
    <div>
      <div>
        <p>Name: {customer.name}</p>
        <p>Age: {customer.age}</p>
        <p>Phone: {customer.phone}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {editing && <EditCustomer getAllCustomers={getAllCustomers} customer={customer} onCancel={() => setEditing(false)} />}
    </div>
  );
};

export default CustomerItem;
