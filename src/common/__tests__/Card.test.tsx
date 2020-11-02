import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';

test('renders correctly', () => {
  const item = {
    name: 'Nandos name',
    url: 'https://someLink',
    geo: {
      address: {
        streetAddress: 'High Street',
        addressLocality: 'Address locality',
        postalCode: 'N1 H9',
      },
    },
  };

  const tree = renderer
    .create(<Card item={item} onPress={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
