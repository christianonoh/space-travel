import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../components/RocketCard';
import { fetchRocketData } from '../redux/slicers/rocketSlice';

const RocketsPage = () => {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketData());
  }, [dispatch]);

  return (
    <div>
      {rockets.data.map((rocket) => (
        <RocketCard
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          imageUrl={rocket.flickr_images[0]}
        />
      ))}
    </div>
  );
};

export default RocketsPage;
