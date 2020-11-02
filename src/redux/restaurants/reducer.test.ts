import reducer, { initialState } from './reducer';
import { RestaurantsActionTypes } from './actions';

describe('restaurants reducer', () => {
  it('should handle GET_RESTAURANTS_SUCCESS', () => {
    const restaurants = [
      {
        name: 'Aberdeen - Belmont Street',
        url: 'https://www.nandos.co.uk/eat/restaurants/aberdeen-belmont-street',
        geo: {
          address: {
            streetAddress: 'Unit 10, The Academy, Belmont St',
            addressLocality: 'Aberdeen, Aberdeen City',
            postalCode: 'AB10 1LB',
          },
        },
      },
      {
        name: 'Aberdeen - Union Square',
        url: 'https://www.nandos.co.uk/eat/restaurants/aberdeen-union-square',
        geo: {
          address: {
            streetAddress: 'Unit FS17, Union Square, Guild St',
            addressLocality: 'Aberdeen, Aberdeen City',
            postalCode: 'AB11 5RG'
          },
        },
      },
    ];
    expect(
      reducer(initialState, {
        type: RestaurantsActionTypes.GET_RESTAURANTS_SUCCESS,
        restaurants,
      }),
    ).toEqual({
      restaurants,
      isLoading: false,
      error: null,
    });
  });
});
