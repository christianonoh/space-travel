import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, toggleReserveRocket } from '../redux/slicers/rocketSlice';
import RocketCard from '../components/RocketCard';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleToggleReserve = (rocketID) => {
    dispatch(toggleReserveRocket(rocketID));
  };

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketCard
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          imageUrl={rocket.flickr_images[0]}
          rocketID={rocket.id}
          reserved={reservedRockets.includes(rocket.id)}
          onToggleReserve={handleToggleReserve}
        />
      ))}
    </div>
  );
};

export default RocketsPage;
