import React from 'react';
import axios from 'axios';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios.get('/api/users/')
      .then(users => {
        const peoples = users.data
        this.setState({ people: peoples });
      })
  }
  render() {
    return (
      <div>
          <h2>In greeting component!</h2>
          <h4>Users</h4>
          {this.state.people.map(person => <li>{person.name}</li>)}
          <h4>Events</h4>

      </div>
    )
  };
};

export default Greeting;
