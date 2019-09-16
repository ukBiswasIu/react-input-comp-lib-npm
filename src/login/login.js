import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.heading || "Log In"}</h1>
        <br />
        <br />
        <span>{this.props.userNameLabel + " : " || "Username : "}</span>
        <input
          className={this.props.className}
          type="text"
          placeholder={this.props.userNamePlaceholder}
          onChange={this.props.onChange}
          value={this.props.userNameValue}
        />
        <br />
        <span>{this.props.passwordLabel + " : " || "Password : "}</span>
        <input
          className={this.props.className}
          type="password"
          placeholder={this.props.passwordPlaceholder}
          onChange={this.props.onChange}
          value={this.props.passwordValue}
        />
      </div>
    );
  }
}

export default Login;
