import React from "react";
class InputButton extends React.Component {

  render() {
    return (
      <div>
        <button
          value={this.props.value || "Button"}
        />
      </div>
    );
  }
}

// onClick={this.props.onClick}
// className={this.props.className}
export default InputButton
