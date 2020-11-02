import React, { FC, useEffect } from 'react';
import {
  View,
  FlatList,
  ListRenderItem,
  Text,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { Card } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../redux/restaurants/actions';
import { RootState } from '../redux/store';
import { colors } from '../styles';
import { RestaurantItem } from '../api';
import { openUrl } from '../utils/openLink';

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

  const keyExtractor = (item: RestaurantItem) => `${item.name}`;

  const renderItem: ListRenderItem<RestaurantItem> = ({ item }) => (
    <Card key={item.name} item={item} onPress={() => openUrl(item.url)} />
  );

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          removeClippedSubviews
          initialNumToRender={6}
          disableVirtualization={false}
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  error: {
    color: colors.PRIMARY,
  },
});

export default Home;
