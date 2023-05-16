import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from '../styles/missions.module.css';
import Button from './Button';
import { fetchData, toggleMissionReserved } from '../redux/missions/missionsSlice';

const Missions = () => {
  const missionsArr = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleToggleReserved = (id) => {
    // console.log(id);
    dispatch(toggleMissionReserved(id));
  };
  return (
    <section>
      <table className={styles['mission-table']}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {missionsArr.map((row) => (
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
    </section>
  );
};

export default Missions;
