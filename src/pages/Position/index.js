import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import cart from '../../assets/icon/cart.png';

function Position() {
  return (
    <View style={styles.wrapper}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#f4a261',
          marginTop: 16,
        }}
      >
        Position
      </Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.cartIcon} />
        <Text style={styles.notification}>10</Text>
      </View>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 20, alignItems: 'center' },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cartIcon: { width: 50, height: 50 },
  text: {
    fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8,
  },
  notification: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FcF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Position;
