import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import MapView from '../../components/MapView';
import { END_POINT } from '../../constants';

interface PoiDetails {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const Details: React.VFC = () => {
  const [details, setDetails] = useState<PoiDetails>({
    id: 0,
    name: '',
    latitude: 0,
    longitude: 0,
  });
  const { positionId } = useParams<{ positionId: string }>();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const apiURL = `${END_POINT}/locations/${id}`;
      try {
        const response = await axios.get(apiURL);

        setDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(positionId);
  }, [positionId]);

  return (
    <>
      <Link to="/">Go back</Link>
      <h1>{details.name}</h1>
      <h4>{details.id}</h4>
      <div>
        <h4>latitude: {details.latitude}</h4>{' '}
        <h4>longitude: {details.longitude}</h4>
      </div>
      <MapView
        position={{ lat: details.latitude, lng: details.longitude }}
        data-testid="MapView"
      />
    </>
  );
};
export default Details;
