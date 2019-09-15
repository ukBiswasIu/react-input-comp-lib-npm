import React from "react";
class InputButton extends React.Component {

  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="button"
          onClick={this.props.onClick}
          value={this.props.value || "Button"}
        />
      </div>
    );
  }
}

// class HelloMan extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }
export default InputButton
