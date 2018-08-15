# Your React App Everywhere

## A starter project to to publish to IOS, Android, Web and Desktop from a single codebase, with a goal of as much shared code as possible. Uses the following tools:

- React Native
- Electron
- GraphQL (through GraphCool Cloud)
- Apollo

### What is this Project?

Great question. It's a simple journal app inspired mostly by the Level Up Tutorials React Native and GraphQL course. It's nice! if you're looking to learn the hell out those two technolgies, check out the course here: https://www.leveluptutorials.com/tutorials/level-2-react-native-with-graphql

### Setting up GraphQL in GraphCool Cloud

You're going to need a database for this project to work. Go to https://console.graph.cool/, and sign in with your Github account. It's free for non-production databases, and not too bad if you decide to go live with a project. Add the following `Post` type to your data under `Schema` > `Types`:

```graphql
type Post @model {
  id: ID! @isUnique
  title: String!
  body: String
  createdAt: DateTime!
}
```

Your database is set up! Great job, pumpkin! To try other queries and see the properties available via code complete, go to the `Code Playground` area.
