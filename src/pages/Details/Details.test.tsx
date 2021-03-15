import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import Routes from '../../components/Routes';

afterEach(cleanup);

test('get the details of a POI', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({
    data: { name: 'Teston', id: 7298949, lat: 51.25944, lng: 0.44098 },
  });

  const { getByText } = render(
    <MemoryRouter initialEntries={['/details/7298949']} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  );

  const resolved = await waitFor(() => getByText('7298949'));
  expect(resolved).toBeInTheDocument();

  (axios.get as jest.Mock).mockRestore();
});
