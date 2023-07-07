import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app';

test('renders learn react link', () => {
  const { getByText } = screen(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/ /i)).toBeInTheDocument();
});
