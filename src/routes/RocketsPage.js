import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, toggleReserveRocket } from '../redux/rockets/rocketSlice';
import RocketCard from '../components/RocketCard';
import baseBg from '../assets/baseBg.svg';
import p1 from '../assets/p1.png';
import p2pink from '../assets/pp1.png';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const handleToggleReserve = (rocketID) => {
    dispatch(toggleReserveRocket(rocketID));
  };

  return (
    <>
      <main>
        <img src={baseBg} alt="Background" id="baseBg" />
        <img src={p1} alt="Background" id="p1" />
        <img src={p2pink} alt="Background" id="p2pink" />
        <div className="main-hero-container">
          <div className="hero-text">
            <h1> Space </h1>
            <h1 className="purple-text"> Traveler </h1>
          </div>
          <div className="hero-text">
            <p>
              Looking for an unforgettable celestial journey? Take your
              pick from our stellar selection of rockets and buckle up for
              an epic space odyssey. Get set to launch into a galaxy of excitement!
            </p>
          </div>
        </div>
      </main>
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
    </>

  );
};

export default RocketsPage;
