import React from 'react';
import PropTypes from 'prop-types';

function RocketCard({ name, description, imageUrl }) {
  return (
    <div className="rocket-card">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="rocket-image" />
      </div>
      <div className="rocket-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <button type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
}

RocketCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default RocketCard;
