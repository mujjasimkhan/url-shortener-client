import React from 'react';
import renderer from 'react-test-renderer';
import UrlForm from '../UrlForm.jsx';

it('renders correctly', () => {
  const tree = renderer
    .create(<UrlForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});