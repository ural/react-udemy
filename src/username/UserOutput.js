import React from 'react';
import UserInput from './UserInput';
import './username.css';

class UserOutput extends React.Component {

    state = {
      usernames: [
          { uname1: 'defaultName' }
      ]
    };

    changeU_name = (event) => {
      this.setState({
          usernames: [
              { uname1: event.target.value }
          ]
      });
    };

    render () {
        return (
            <div className="u-name_container">
                <UserInput u_nameChange={this.changeU_name} u_name={this.state.usernames[0].uname1}/>
            </div>
        );
    }
}

export default UserOutput;