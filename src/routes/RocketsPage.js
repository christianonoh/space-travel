import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, toggleReserveRocket } from '../redux/rockets/rocketSlice';
import RocketCard from '../components/RocketCard';
import starBg from '../assets/starBg.svg';
import p1 from '../assets/p1.png';
import p2pink from '../assets/pp1.png';
import saturn from '../assets/saturn.png';
import rocket from '../assets/rocket.png';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initialPositions, setInitialPositions] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Calculate and store the initial positions of the elements
    const p1Element = document.getElementById('p1');
    const p2pinkElement = document.getElementById('p2pink');
    const saturnElement = document.getElementById('saturn');
    const rocketElement = document.getElementById('rocket-homepage');

    setInitialPositions({
      p1: p1Element.offsetTop,
      p2pink: p2pinkElement.offsetTop,
      saturn: saturnElement.offsetTop,
      rocket: rocketElement.offsetTop,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <img src={starBg} alt="Background" id="baseBg" />
        <img
          src={p1}
          alt="Background"
          id="p1"
          style={{
            top: `${initialPositions.p1 + scrollPosition * 0.2}px`,
          }}
        />
        <img
          src={p2pink}
          alt="Background"
          id="p2pink"
          style={{
            top: `${initialPositions.p2pink + scrollPosition * -0.2}px`,
          }}
        />
        <img
          src={saturn}
          alt="Background"
          id="saturn"
          style={{
            top: `${initialPositions.saturn + scrollPosition * 0.4}px`,
          }}
        />
        <img
          src={rocket}
          alt="Background"
          id="rocket-homepage"
          style={{
            top: `${initialPositions.rocket + scrollPosition * -0.5}px`,
            transform: `rotate(${-scrollPosition / 8}deg)`,
            transformOrigin: 'left bottom',
          }}
        />
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
      <div className="available-rockets">
        <h2>Available Rockets</h2>
      </div>
      <div className="main-rocket-container">
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
