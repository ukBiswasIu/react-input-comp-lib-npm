import React from "react";
import "../main.css"

class Login extends React.Component {
  render() {
    return (
        <div className="login-div-main">
        <div className="login-div-heading">
        {this.props.heading || "Log In"}
        </div>

        <div className="login-div-content">
          <div className="login-div-content-label">
            <div className="login-div-content-label-span">
              <span>{this.props.userNameLabel + " : " || "Username : "}</span>
              <br />
              <span>{this.props.passwordLabel + " : " || "Password : "}</span>
            </div>
          </div>
          <div className="login-div-content-inputfield">
            <div className="login-div-content-input-span">
              <input
                className={this.props.className}
                type="text"
                placeholder={this.props.userNamePlaceholder || "username"}
                onChange={this.props.onChangeUserName}
                value={this.props.userNameValue}
              />

              <input
                className={this.props.className}
                type="password"
                placeholder={this.props.passwordPlaceholder || "password"}
                onChange={this.props.onChangePassword}
                value={this.props.passwordValue}
              />
            </div>
          </div>
        </div>
      </div>

    //   <div>
    //     <h1>{this.props.heading || "Log In"}</h1>
    //     <br />
    //     <br />
    //     <span>{this.props.userNameLabel + " : " || "Username : "}</span>
    //     <input
    //       className={this.props.className}
    //       type="text"
    //       placeholder={this.props.userNamePlaceholder}
    //       onChange={this.props.onChangeUserName}
    //       value={this.props.userNameValue}
    //     />
    //     <br />
    //     <span>{this.props.passwordLabel + " : " || "Password : "}</span>
    //     <input
    //       className={this.props.className}
    //       type="password"
    //       placeholder={this.props.passwordPlaceholder}
    //       onChange={this.props.onChangePassword}
    //       value={this.props.passwordValue}
    //     />
    //   </div>
    );
  }
}

export default Login;
