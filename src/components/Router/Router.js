import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Posts from '../Posts/Posts';
import NewPost from '../Posts/NewPost';

const Router = props => {
  const showMenu = props.showMenu;

  return (
    <NativeRouter>
      <View style={styles.router}>
        <Route
          exact
          path="/"
          render={props => (
            <Posts style={styles.router} showMenu={showMenu} {...props} />
          )}
        />
        <Route
          exact
          path="/new-post"
          render={props => (
            <NewPost style={styles.router} showMenu={showMenu} {...props} />
          )}
        />
        {props.children}
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  router: {
    flex: 1
  }
});

export default Router;
