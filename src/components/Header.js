import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ConditionalPadding from './ConditionalPadding';

const Header = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.left}>
          <ConditionalPadding />
          <TouchableOpacity onPress={props.showMenu}>
            <Ionicons name="md-menu" size={32} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ConditionalPadding />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#ccc',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%'
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 60
  },
  left: {
    width: 60,
    paddingLeft: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

export default Header;
