import React from 'react';
import { View, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const ConditionalPadding = props => {
  return isIphoneX() && <View style={styles.iphoneX} />;
};

const styles = StyleSheet.create({
  iphoneX: {
    height: 36
  }
});

export default ConditionalPadding;
