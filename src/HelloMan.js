import React from "react";

class HelloMan extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default HelloMan;
