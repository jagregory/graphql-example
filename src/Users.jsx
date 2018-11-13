import React from "react";
import gql from "graphql-tag.macro";
import { Query } from "react-apollo";

const QUERY = gql`
  query UsersQuery($active: Boolean) {
    users(active: $active) {
      id
      firstName
      visits
    }
  }
`;

class Users extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      active: true
    };
  }

  render() {
    const { active } = this.state;

    return (
      <Query query={QUERY} variables={{ active }}>
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

              <p>Active: {active ? "Yes" : "No"}</p>
              <button onClick={() => this.setState(() => ({ active: !active }))}>Toggle</button>

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
