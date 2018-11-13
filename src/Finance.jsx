import React from "react";
import gql from "graphql-tag.macro";
import { Query } from "react-apollo";

const QUERY = gql`
  query FinanceQuery {
    users {
      id
      firstName
      lastName
      billCode
    }
  }
`;

class Finance extends React.PureComponent {
  render() {
    return (
      <Query query={QUERY}>
        {({ data, loading, error }) => {
          if (error) {
            return <p>ERROR!</p>;
          }

          if (loading) {
            return <p>Loading...</p>;
          }

          return (
            <div>
              <h1>Finance</h1>

              <ul>
                {data.users.map(user => (
                  <li key={user.id}>
                    {user.lastName}, {user.firstName} - Bill code:{" "}
                    {user.billCode}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Finance;
