import React from 'react';
import renderer from 'react-test-renderer';
import Result from '../Result.jsx';
const mockShortenedUrlResponse = {
    'id' : 1,
    'url': "Mock Url",
    'shortenedUrl' : 'www.mockurl.com'
}

it('renders Result components', () => {
  const tree = renderer
    .create(<Result shortenedUrlResponse={mockShortenedUrlResponse} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});