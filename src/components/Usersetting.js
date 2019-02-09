import React, { Component } from 'react';
// import axios from 'axios';

class Usersetting extends Component {
  // email and password state
  newstate = {
    email: '',
    oldpassword: '',
    newpassword: ''
  };

  // // handle email change
  // handleEmailChange = e => {
  //   this.setState({ email: e.target.value });
  // };

  // // hnadle password change
  // handlePasswordChange = e => {
  //   this.setState({ newpassword: e.target.value });
  // };

  // click on submit button event handle
  handleSubmit = e => {
    console.log(this.newstate.oldpassword);
    console.log(this.newstate.newpassword);
    this.setState({
      newstate: {
        email: this.email.Email.value,
        oldpassword: this.oldpassword.OldPassword.value,
        newpassword: this.newpassword.NewPassword.value
      }
    });
    e.prevenDefault();
    // const email = this.state.email;
    // const newpassword = this.state.newpasword;

    // console.log(this.newstate.oldpassword);
    // console.log(this.newstate.newpassword);
    // check old password and new password are same or not
    // if (this.state.oldpassword === this.state.newpassword)
    //   return this.setState({
    //     newpassword: 'Can not use the previous password'
    //   });
    // else this.setState({ oldpassword: this.state.newpassword });
  };

  render() {
    return (
      <div>
        <h3> User Setting Page </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Email:</label>
            <input
              className="Email"
              type="text"
              //onChange={this.handleEmailChange}
            />
            <br />
          </div>
          <div>
            <label>Old Password:</label>
            <input
              className="OldPassword"
              type="password"
              readOnly={this.newstate.oldpassword}
            />
            <br />
          </div>
          <div>
            <label>New Password:</label>
            <input
              className="NewPassword"
              type="password"
              // onChange={this.handlePasswordChange}
            />
            <br />
            <br />
          </div>
          <div>
            <button type="submit" className="usersetting">
              SAVE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Usersetting;
