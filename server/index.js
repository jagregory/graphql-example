import * as database from "./database";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    users(active: Boolean = true): [User]
  }

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    billCode: String
    visits: Int
  }
`;

const resolvers = {
  Query: {
    users: (root, args) =>
      database.users().filter(user => user.active === args.active)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: "service:jagregory-8199:4uWEFHydc2Myo_fd2ZZXyQ"
  }
});

const app = express();

server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.listen(3001, () => {
  console.log("Server listening on 3001");
});
