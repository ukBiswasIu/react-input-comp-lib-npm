import React from "react";
class InputBox extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.label + ": " || ""}</span>
        <input
          className={this.props.className}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
          handleOnChange={this.props.handleOnChange}
        />
      </div>
    );
  }
}

class HelloMan extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
export { InputBox, HelloMan };
