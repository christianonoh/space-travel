import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from '../styles/missions.module.css';
import Button from './Button';
import { fetchData } from '../redux/missions/missionsSlice';

const Missions = () => {
  const missionsArr = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
                {row.status ? (
                  <span className={`${styles.badge} ${styles['badge-success']}`}>Member</span>
                ) : (
                  <span className={`${styles.badge} ${styles['badge-danger']}`}>Not a member</span>
                )}
              </td>
              <td>
                <Button title={row.status ? 'Leave' : 'Join'} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
