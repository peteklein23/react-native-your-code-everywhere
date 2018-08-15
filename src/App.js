import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './components/graphql';

import SideMenu from './components/Menu/SideMenu';
import Menu from './components/Menu/Menu';
import Router from './components/Router/Router';

export default class App extends React.Component {
  state = {
    height: null,
    width: null,
    menuShouldShow: false
  };

  showMenu() {
    this.setState({ menuShouldShow: true });
  }

  hideMenu() {
    this.setState({ menuShouldShow: false });
  }

  handleLayout() {
    const { height, width } = Dimensions.get('window');
    this.setState(() => ({ width, height }));
  }

  render() {
    const { menuShouldShow, height, width } = this.state;
    return (
      <ApolloProvider client={client}>
        <View style={styles.container} onLayout={() => this.handleLayout()}>
          <Router showMenu={() => this.showMenu()}>
            <SideMenu
              height={height}
              width={width}
              menuShouldShow={menuShouldShow}
            >
              <Menu hideMenu={() => this.hideMenu()} />
            </SideMenu>
          </Router>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
