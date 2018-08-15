import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RouterLink from '../Router/RouterLink';
import ConditionalPadding from '../ConditionalPadding';
import Divider from '../Divider';

export default class Menu extends React.Component {
  render() {
    const { hideMenu } = this.props;

    return (
      <ScrollView>
        <ConditionalPadding />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={hideMenu} style={styles.button}>
            <Ionicons name="md-close" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <Divider />

        <RouterLink to="/" hideMenu={hideMenu} style={linkStyles}>
          <Text>Posts</Text>
        </RouterLink>
        <Divider />

        <RouterLink to="/new-post" hideMenu={hideMenu} style={linkStyles}>
          <Text>New Post</Text>
        </RouterLink>
        <Divider />
      </ScrollView>
    );
  }
}

const linkStyles = {
  flexDirection: 'row',
  padding: 10,
  flex: 1
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10
  },
  button: {
    width: 20
  }
});
