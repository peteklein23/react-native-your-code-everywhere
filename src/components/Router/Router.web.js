import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../Posts/NewPost';
import EditPost from '../Posts/EditPost';

const Router = props => {
  const showMenu = props.showMenu;

  return (
    <BrowserRouter>
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
        <Route
          path="/post/:id"
          render={props => (
            <EditPost style={styles.router} showMenu={showMenu} {...props} />
          )}
        />
        {props.children}
      </View>
    </BrowserRouter>
  );
};

const styles = StyleSheet.create({
  router: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Router;
