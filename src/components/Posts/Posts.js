import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';

import Header from '../Header';
import RouterLink from '../Router/RouterLink';
import { POSTS_QUERY } from './postQueries';

const Posts = props => {
  const { allPosts, loading, error } = props;
  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.posts}>
      <Header showMenu={props.showMenu} title="Posts" />
      {allPosts.map(post => (
        <RouterLink to={`/post/${post.id}`} key={post.id}>
          <Text>{post.title}</Text>
        </RouterLink>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  posts: {
    flex: 1,
    width: '100%'
  }
});

// export default Posts;
export default graphql(POSTS_QUERY, {
  props: ({ data }) => ({
    ...data
  })
})(Posts);
