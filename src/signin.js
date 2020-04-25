/* eslint no-alert: 0 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Input } from 'reactstrap';
import firebase from 'firebase';
import logo from './calendar.png';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  onPasswordChange= (event) => {
    this.setState({ password: event.target.value });
  }

  handleSigninButtonClick = (event) => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      alert(error);
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/');
      }
    });
  }

  handleCancelButtonClick = (event) => {
    this.props.history.push('/');
  }

  render() {
    return (
    <div className="all">
      <div className="dartCalLogo">
        DartCal
        <div className="scheduleLogo"><img width="90px" src={logo}/></div>
      </div>
        <div className="signInBox1">
          <div className="prompt"> Username: </div>
          <Input className="response" id="emailInputBar" placeholder="Dartmouth Email" onChange={this.onEmailChange} value={this.state.email} />
        </div>
        <div className="signInBox2">
          <div className="prompt"> Password: </div>
          <Input type="password" className="response" id="passwordInput" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
        </div>
        <div>
          <Button className="signupButtons" id="createButton" onClick={this.handleSigninButtonClick}>Log In</Button>
          <Button className="signupButtons" id="cancelButton" onClick={this.handleCancelButtonClick}>Cancel</Button>
        </div>
    </div>
    );
  }
}

// export default NewPost;
export default withRouter((SignIn));