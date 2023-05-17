import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missionsArr = useSelector((store) => store.missions);
  const reservedRockets = useSelector((store) => store.rocketsReserved);

  // Check if the missionsArr has data
  if (!missionsArr.data || missionsArr.data.length === 0) {
    return <div>Loading...</div>;
  }

  const reservedMissions = missionsArr.data.filter((mission) => mission.reserved === true);

  return (
    <section className="profile">
      <div className="active-missions">
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.length > 0 ? (
            reservedMissions.map((mission) => (
              <li className="active-mission" key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))
          ) : (
            <div>No reserved missions found.</div>
          )}
        </ul>
      </div>
      <div className="active-missions">
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.length > 0 ? (
            reservedRockets.map((rocket) => (
              <li className="active-mission" key={rocket.id}>
                {rocket.name}
              </li>
            ))
          ) : (
            <div>No reserved rockets found.</div>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
