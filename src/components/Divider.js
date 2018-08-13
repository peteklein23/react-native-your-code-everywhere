import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = props => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#333',
    opacity: 0.2
  }
});

export default Divider;
