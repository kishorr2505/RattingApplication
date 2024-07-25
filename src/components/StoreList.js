// client/src/components/StoreList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RatingForm from './RatingForm';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('/api/admin/stores');
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div>
      <h2>Store List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
            <th>My Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stores.map(store => (
            <tr key={store.id}>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.averageRating || 'N/A'}</td>
              <td>
                <RatingForm storeId={store.id} />
              </td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreList;
