import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Router } from "@reach/router";
import Landing from './Landing';
import Users from './Users';
import Finance from './Finance';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3001/graphql"
  })
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Landing path="/" />
          <Users path="/users" />
          <Finance path="/finance" />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
