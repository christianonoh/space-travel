import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, toggleReserveRocket } from '../redux/rockets/rocketSlice';
import RocketCard from '../components/RocketCard';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);

  useEffect(() => {
    if (status !== 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

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
