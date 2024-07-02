import React, { useEffect, useState } from 'react';
import { addCustomer, getAllCustomers, deleteCustomer } from '../../utils/api';
import CustomerItem from '../CustomerItem/customerItem';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);


  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
    
    fetchCustomers();
  }, []);



  const fetchCustomers = async () => {
    try {
      const data = await getAllCustomers();
      console.log(data);
      setCustomers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (customerId) => {
    await deleteCustomer(customerId);
    setCustomers(customers.filter((customer) => customer.id !== customerId));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = { name, age, phone };
    const addedCustomer = await addCustomer(newCustomer);
    //onCustomerAdded(addedCustomer);
    setName('');
    setAge('');
    setPhone('');
    fetchCustomers();
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Add Customer</button>
    </form>
      {customers.map((customer) => (
        <CustomerItem key={customer.id} customer={customer} onDelete={handleDelete} getAllCustomers={fetchCustomers} />
      ))}
    </div>
  );
};

export default CustomerList;
