import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount(){
    Axios.get('http://localhost:9000/api/users')
    .then(users => {
      this.setState({
        users: [...JSON.parse(users)]
      })
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        {this.state.users ? this.state.users.map(user => <h4>{user.name}</h4>) : <h1>Loading...</h1>}
      </div>
    );
  };
};

export default App;
