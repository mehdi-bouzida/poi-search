import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import Card from '../../components/Card';
import { END_POINT } from '../../constants';

interface Poi {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [pois, setPois] = useState<readonly Poi[]>([]);
  const [keyWord, setKeyWord] = useState<string>('');
  const [noMatching, setNoMatching] = useState<boolean>(false);

  const debouncedSearch = useCallback(
    debounce(async (value: string) => {
      const apiURL = `${END_POINT}/locations?q=${value}`;
      try {
        const response = await axios.get<readonly Poi[]>(apiURL);
        response.data.length === 0 ? setNoMatching(true) : setNoMatching(false);

        setPois(response.data);
      } catch (error) {
        console.log(error);
      }
    }, 700),
    []
  );

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.target.value;
    debouncedSearch(currentSearch);
    setKeyWord(currentSearch);
  };

  return (
    <>
      <h1>Search Points of interest in the UK</h1>
      <StyledInput
        type="text"
        placeholder="Search..."
        value={keyWord}
        onChange={handleSearch}
        data-testid="searchInput"
      />
      {pois !== null &&
        pois.map((item) => (
          <div key={`${item.id}`}>
            <Card id={item.id} name={item.name} />
          </div>
        ))}
      {noMatching && <div>no results match your search</div>}
    </>
  );
};

export default Home;

const StyledInput = styled.input`
  font-size: 15px;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  border: 0;
  box-shadow: 1px 1px 1px 1px hsla(0, 0%, 50%, 0.5) inset;
  text-align: center;
`;
