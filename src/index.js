import React from "react";
class InputBox extends React.Component {
  render() {
    return (
      <div>
        <span style={"font-size: " + this.props.label-font-size + ";"}>{this.props.label + ": " || ""}</span>
        <input
          className={this.props.className}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
export default InputBox;
