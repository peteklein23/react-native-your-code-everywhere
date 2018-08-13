import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../Header';

const Posts = props => (
  <View style={styles.posts}>
    <Header showMenu={props.showMenu} title="Posts" />
    <Text>Posts Page</Text>
  </View>
);

const styles = StyleSheet.create({
  posts: {
    flex: 1,
    width: '100%'
  }
});

export default Posts;
