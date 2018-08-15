import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';

import Header from '../Header';
import { POST_QUERY, UPDATE_POST, DELETE_POST } from './postQueries';

class EditPost extends React.Component {
  state = {
    title: '',
    body: '',
    stateUpdated: false
  };

  doUpdate = () => {
    const { title, body } = this.state;
    const { match, updatePost } = this.props;

    updatePost({
      variables: {
        id: match.params.id,
        title,
        body
      }
    }).then(() => {
      this.props.history.push('/');
    });
  };

  doDelete = () => {
    const { match, deletePost } = this.props;

    deletePost({
      variables: {
        id: match.params.id
      }
    }).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { showMenu, Post, loading } = this.props;

    if (loading) {
      return <Text>Loading</Text>;
    }

    // TODO: put form into a component
    if (this.state.stateUpdated === false) {
      const title = Post.title;
      const body = Post.body;
      this.setState({ title, body, stateUpdated: true });
    }

    const { title, body } = this.state;

    return (
      <View style={styles.editPost}>
        <Header showMenu={showMenu} title="Edit Post" />

        <Text>Title</Text>
        <View style={styles.input}>
          <TextInput
            editable={true}
            value={title}
            onChangeText={title => this.setState({ title })}
          />
        </View>

        <Text>Body</Text>
        <View style={styles.input}>
          <TextInput
            editable={true}
            multiline={true}
            value={body}
            onChangeText={body => this.setState({ body })}
          />
        </View>

        <Button title="Update Post" onPress={this.doUpdate} />
        <Button title="Delete Post" onPress={this.doDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editPost: {
    flex: 1,
    width: '100%'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 3
  }
});

export default compose(
  graphql(UPDATE_POST, {
    name: 'updatePost',
    options: {
      refetchQueries: ['Post']
    }
  }),

  graphql(DELETE_POST, {
    name: 'deletePost',
    options: {
      refetchQueries: ['allPosts']
    }
  }),

  graphql(POST_QUERY, {
    props: ({ data }) => ({ ...data }),
    options: ({ match }) => ({
      variables: {
        id: match.params.id
      }
    })
  })
)(EditPost);
