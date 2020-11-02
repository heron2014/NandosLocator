import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import { RestaurantItem } from '../api';
import { colors, typography } from '../styles';

export interface ListItem {
  item: RestaurantItem;
  onPress: (event: GestureResponderEvent) => void;
}

const Card: FC<ListItem> = ({ item, onPress }) => {
  const handleStyleOnPress = ({ pressed }: { pressed: boolean }) => ([
    { backgroundColor: pressed ? colors.PRIMARY : colors.SECONDARY},
    styles.button,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.text}>{item.geo.address.addressLocality}</Text>
      <Text style={styles.text}>{item.geo.address.streetAddress}</Text>
      <Text style={styles.text}>{item.geo.address.postalCode}</Text>
      <Pressable onPress={onPress} style={handleStyleOnPress}>
        <Text style={styles.text}>Check it out</Text>
      </Pressable>
    </View>
  );
};

Card.displayName = 'Card';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
  title: {
    fontFamily: typography.FONT_FAMILY_BOLD,
    color: colors.BLACK,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  text: {
    fontFamily: typography.FONT_FAMILY_REGULAR,
    textAlign: 'center',
  },
  button: {
    marginVertical: 5,
    borderRadius: 4,
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Card;
