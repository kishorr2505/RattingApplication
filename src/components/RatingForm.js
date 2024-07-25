// client/src/components/RatingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RatingForm = ({ storeId }) => {
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/ratings', { storeId, rating });
      alert('Rating submitted');
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">Submit Rating</button>
    </form>
  );
};

export default RatingForm;
