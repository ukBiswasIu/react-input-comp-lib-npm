import React from 'react';
import "./App.css"
class Fancy extends React.Component {
  render() {
    return (
      <div>
          <input
          className="small-margin"
          type="text"
          placeholder="h@h.com"
        />
      </div>
    );
  }
}
export default Fancy;