import React from "react";
class InputBox extends React.Component {
    handleOnChange(){
        console.log("e.target.value")
        return e.target.value;
      }

  render() {
    return (
      <div>
        <span>{this.props.label + ": " || ""}</span>
        <input
          className={this.props.className}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
export default InputBox;
