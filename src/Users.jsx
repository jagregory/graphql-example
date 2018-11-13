import React from "react";
import gql from "graphql-tag.macro";
import { Query } from "react-apollo";

const QUERY = gql`
  query UsersQuery {
    users {
      id
      firstName
      visits
    }
  }
`;

class Users extends React.PureComponent {
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
              <h1>Users</h1>

              <ul>
                {data.users.map(user => (
                  <li key={user.id}>
                    {user.firstName} has visited {user.visits} times
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

export default Users;
