// Invoices.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:3001/invoices');
        setInvoices(response.data.invoices);
      } catch (error) {
        console.error('Fetch invoices error:', error);
      }
    };

    fetchInvoices();
  }, []);

  const handleTriggerAutomation = async () => {
    try {
      await axios.post('http://localhost:3001/zapier/webhook', {});
      alert('Automation triggered successfully!');
    } catch (error) {
      console.error('Trigger automation error:', error);
    }
  };

  return (
    <div>
      <h2>Invoices</h2>
      <button onClick={handleTriggerAutomation}>Trigger Automation</button>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.amount} - {invoice.dueDate} - {invoice.recipient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invoices;
