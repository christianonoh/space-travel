import React, { useEffect, useState } from 'react';
import RocketCard from '../components/RocketCard';

function RocketsPage() {
  const [rocketData, setRocketData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/rockets');
      const data = await response.json();
      setRocketData(data);
    } catch (error) {
      console.error('Error fetching rocket data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {rocketData.map((rocket) => (
        <RocketCard
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          imageUrl={rocket.flickr_images[0]}
        />
      ))}
    </div>
  );
}

export default RocketsPage;
