import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from '../styles/missions.module.scss';
import Button from './Button';
import { fetchData, toggleMissionReserved } from '../redux/missions/missionsSlice';
import whitebg from '../assets/whitebg.svg';
import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';
import planet3 from '../assets/planet3.png';
import planet4 from '../assets/planet4.png';
import planet5 from '../assets/planet5.png';
import astronaut from '../assets/astronaut.png';

const Missions = () => {
  const missions = useSelector((store) => store.missions);
  const dispatch = useDispatch();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setScrollValue(value);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (missions.status === 'idle') {
      dispatch(fetchData());
    }
  }, [missions.status, dispatch]);

  const handleToggleReserved = (id) => {
    dispatch(toggleMissionReserved(id));
  };
  return (
    <>
      <div className="landing-page">
        <img src={whitebg} id="whitebg" alt="bg" />
        <img src={planet1} id="planet1" style={{ transform: `translateY(${scrollValue * 0.6}px)` }} alt="planet1" />
        <img src={planet2} id="planet2" style={{ transform: `translateY(${scrollValue * 0.5}px)` }} alt="planet2" />
        <img src={planet3} id="planet3" style={{ transform: `translateY(${scrollValue * 0.5}px)` }} alt="planet3" />
        <img src={planet4} id="planet4" style={{ transform: `translateY(${scrollValue}px)` }} alt="planet4" />
        <img src={planet5} id="planet5" style={{ transform: `translateY(${scrollValue * 0.25}px)` }} alt="planet5" />
        <img
          src={astronaut}
          className={styles.astronaut}
          style={{
            transform: `translateY(${scrollValue * 0.4}px) rotate(${scrollValue / 8}deg)`,
            transformOrigin: 'left bottom',
          }}
          id="astronaut"
          alt="astronaut"
        />
        <div className="mission-intro">
          <div className="hero-text">
            <h1> Space Missions </h1>
            <h1 className="purple-text"> Discover and Join! </h1>
          </div>
          <div className="hero-text">
            <p>
              Embark on extraordinary journeys, uncovering the wonders of the cosmos.
              Engage with exciting missions and join the quest for knowledge and exploration.
            </p>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className={styles['mission-table']}>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.data.map((row) => (
              <tr key={row.mission_id}>
                <td>{row.mission_name}</td>
                <td>{row.description}</td>
                <td>
                  {row.reserved ? (
                    <span className={`${styles.badge} ${styles['badge-success']}`}>ACTIVE MEMBER</span>
                  ) : (
                    <span className={`${styles.badge} ${styles['badge-danger']}`}>NOT A MEMBER</span>
                  )}
                </td>
                <td>
                  <Button
                    title={row.reserved ? 'Leave Mission' : 'Join Mission'}
                    className={row.reserved ? 'leaveBtn' : 'joinBtn'}
                    handleClick={() => handleToggleReserved(row.mission_id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Missions;
