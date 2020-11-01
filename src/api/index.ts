import config from './config';

export interface RestaurantItem {
  name: string;
  url: string;
  geo: {
    address: {
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
    };
  };
}
export interface RestaurantsPayload {
  data: {
    restaurant: {
      items: RestaurantItem[];
    };
  };
}

class Api {
  static routes = {
    restaurantList: `${config.API_BASE_URL}/restaurantlist.json`,
  };

  static async getAll(): Promise<RestaurantsPayload['data']> {
    try {
      let response = await fetch(Api.routes.restaurantList);
      let json = await response.json();
      return json.data;
    } catch (error) {
      // Some error logger
      console.error(error);
      return error;
    }
  }
}

export default Api;
