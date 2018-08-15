import React from 'react';
import { View, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';

import Header from '../Header';
import PostForm from './PostForm';
import { NEW_POST } from './postQueries';

class NewPost extends React.Component {
  handleCreate = (title, body) => {
    const { newPost } = this.props;

    newPost({
      variables: {
        title,
        body
      }
    }).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { showMenu } = this.props;

    return (
      <View style={styles.newPosts}>
        <Header showMenu={showMenu} title="New Post" />
        <PostForm onSubmit={this.handleCreate} title="" body="" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newPosts: {
    flex: 1,
    width: '100%'
  }
});

export default graphql(NEW_POST, {
  name: 'newPost',
  options: {
    refetchQueries: ['postsQuery']
  }
})(NewPost);
