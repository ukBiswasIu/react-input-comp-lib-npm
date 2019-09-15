import React from "react";
class InputButton extends React.Component {

  render() {
    return (
      <div>
        <button type="button">{this.props.value || "Button"}</button>
      </div>
    );
  }
}

// onClick={this.props.onClick}
// className={this.props.className}
export default InputButton
