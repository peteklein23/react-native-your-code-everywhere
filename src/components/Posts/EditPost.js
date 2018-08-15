import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { graphql, compose } from 'react-apollo';

import Header from '../Header';
import PostForm from './PostForm';
import { POST_QUERY, UPDATE_POST, DELETE_POST } from './postQueries';

class EditPost extends React.Component {
  handleUpdate = (title, body) => {
    const { updatePost, match } = this.props;

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

  handleDelete = () => {
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

    return (
      <View style={styles.editPost}>
        <Header showMenu={showMenu} title="Edit Post" />
        <PostForm
          onSubmit={this.handleUpdate}
          title={Post.title}
          body={Post.body}
        />
        <Button title="Delete Post" onPress={this.handleDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editPost: {
    flex: 1,
    width: '100%'
  }
});

export default compose(
  graphql(UPDATE_POST, {
    name: 'updatePost',
    options: {
      refetchQueries: ['postsQuery', 'Post']
    }
  }),

  graphql(DELETE_POST, {
    name: 'deletePost',
    options: {
      refetchQueries: ['postsQuery', 'Post']
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
