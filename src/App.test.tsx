import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import { Provider } from 'react-redux';
import { store } from './react/store';
import App from './App';

test('renders main components of application correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('+')).toBeInTheDocument();
  expect(getByText('?')).toBeInTheDocument();
  expect(getByText('Generation = 0')).toBeInTheDocument();

  expect(getByText("Create new game")).toBeInTheDocument();

  expect(getByText("Width")).toBeInTheDocument();
  expect(getByText("Height")).toBeInTheDocument();

  expect(getByText("Speed: 2")).toBeInTheDocument();
  expect(getByText("Start")).toBeInTheDocument();




});