import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import Home from '.';

afterEach(cleanup);

test('perform search and get proper results', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({
    data: [{ name: 'Teston', id: 7298949 }],
  });

  const { getByTestId } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const searchInput = getByTestId('searchInput') as HTMLInputElement;

  fireEvent.change(searchInput, { target: { value: 'Teston' } });

  expect(searchInput.value).toBe('Teston');

  const resolved = await waitFor(() => getByTestId('card'));
  expect(resolved).toHaveTextContent('Teston');

  (axios.get as jest.Mock).mockRestore();
});
