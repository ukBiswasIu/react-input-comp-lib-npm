import React from "react";
import "./styler.scss"

class HelloMan extends React.Component {
  render() {
    return <div className="align-right">Hello {this.props.name}</div>;
    // return <button type="button">{this.props.name}</button>;
  }
}

export default HelloMan;
