import React, { Component } from 'react';
import { Button, View, TextInput, StyleSheet, Text } from 'react-native';

export default class PostForm extends Component {
  state = {
    title: this.props.title,
    body: this.props.body
  };

  submitForm = () => {
    this.props.onSubmit(this.state.title, this.state.body);
  };

  render() {
    return (
      <View>
        <Text>Title</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
        </View>
        <Text>Body</Text>
        <View style={styles.input}>
          <TextInput
            multiline
            onChangeText={body => this.setState({ body })}
            value={this.state.body}
          />
        </View>
        <Button title="Save Post" onPress={this.submitForm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5
  }
});
