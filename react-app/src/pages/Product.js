import React, { useEffect, useState } from 'react';

const Product = () => {
  console.log('Product component is rendering');  // Add this log to confirm rendering

  const [stores, setStores] = useState([]);

  useEffect(() => {
    // Replace '/stores/' with the full URL of your Django API
    fetch('http://127.0.0.1:8000/stores/')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched stores:', data);
        setStores(data);
      })
      .catch(error => console.error('Error fetching stores:', error));
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <h2>Store List</h2>
      <ul>
        {stores.length > 0 ? (
          stores.map(store => (
            <li key={store.Store_serial}>
              {store.Store_name} - {store.Store_address}
            </li>
          ))
        ) : (
          <p>No stores available.</p>
        )}
      </ul>
    </div>
  );
};

export default Product;
