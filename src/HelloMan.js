import React from "react";

class HelloMan extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
    // return <button type="button">{this.props.name}</button>;
  }
}

export default HelloMan;
