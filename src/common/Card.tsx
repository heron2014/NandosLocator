import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RestaurantItem } from '../api';
import { typography } from '../styles';

export interface ListItem {
  item: RestaurantItem;
}

const Card: FC<ListItem> = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{item.name}</Text>
    <Text>{item.geo.address.addressLocality}</Text>
    <Text>{item.geo.address.streetAddress}</Text>
    <Text>{item.geo.address.postalCode}</Text>
  </View>
);

Card.displayName = 'Card';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontFamily: typography.FONT_FAMILY_BOLD,
  },
});
export default Card;
