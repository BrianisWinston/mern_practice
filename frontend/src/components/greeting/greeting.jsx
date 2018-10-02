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
          <h1>In greeting component!</h1>
          {this.state.people.map(person => <li>{person.name}</li>)}
      </div>
    )
  };
};

export default Greeting;
