import React from 'react';
import PropTypes from 'prop-types';

function RocketCard({
  name, description, imageUrl, rocketID, reserved, onToggleReserve,
}) {
  const handleReserveRocket = () => {
    onToggleReserve(rocketID);
  };

  return (
    <div className="rocket-card">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="rocket-image" />
      </div>
      <div className="rocket-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <button type="button" onClick={handleReserveRocket}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
}

RocketCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rocketID: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
  onToggleReserve: PropTypes.func.isRequired,
};

export default RocketCard;
