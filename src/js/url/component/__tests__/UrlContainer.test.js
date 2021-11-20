import React from 'react';
import renderer from 'react-test-renderer';
import UrlContainer from '../UrlContainer.jsx';

it('renders Url container components', () => {
  const tree = renderer
    .create(<UrlContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});