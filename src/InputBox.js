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
            onChange={this.props.onChange}
            value={this.props.value}
          />
        </div>
      );
    }
  }

  export default InputBox;