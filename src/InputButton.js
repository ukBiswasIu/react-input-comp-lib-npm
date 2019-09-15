import React from "react";

class InputButton extends React.Component {
  render() {
     return (
        <div>
          <button
            onClick={this.props.onClick}
            className={this.props.className}
            type="button"
          >
            {this.props.value || "Button"}
          </button>
        </div>
      );
  }
}

export default InputButton;
