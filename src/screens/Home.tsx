import React, { FC, useEffect } from 'react';
import {
  View,
  FlatList,
  ListRenderItem,
  Text,
  RefreshControl,
} from 'react-native';
import { Card } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../redux/restaurants/actions';
import { RootState } from '../redux/store';
import { colors } from '../styles';
import { RestaurantItem } from '../api';

export interface Props {}

const Home: FC<Props> = () => {
  const { restaurants, isLoading, error } = useSelector(
    (state: RootState) => state.restaurants,
  );
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getRestaurants());
  };

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const renderItem: ListRenderItem<RestaurantItem> = ({ item }) => (
    <Card item={item} />
  );

  return (
    <View>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.name}`}
          refreshing={isLoading}
          onRefresh={handleRefresh}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              tintColor={colors.SECONDARY}
            />
          }
        />
      )}
    </View>
  );
};

export default Home;
