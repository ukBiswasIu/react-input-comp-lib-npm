import React from "react";
class Fancy extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.label}</span>
        <input
          className="small-margin"
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
export default Fancy;
