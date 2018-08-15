import gql from 'graphql-tag';

export const NEW_POST = gql`
  mutation newPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
    }
  }
`;

export const POSTS_QUERY = gql`
  query postsQuery {
    allPosts {
      id
      title
    }
  }
`;

export const POST_QUERY = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(id: $id, title: $title, body: $body) {
      id
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
