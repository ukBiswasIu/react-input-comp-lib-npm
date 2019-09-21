import React, { Component } from "react";
import "./menu.css";
class Menu extends Component {
 
  render() {
    return (
      <div>
        <div id={this.props.id || "mySidenav"} className="sidenav">
          
          {this.props.items.map((item, i) => {
            console.log("Entered");
            // Return the element. Also pass key
            return (
              <div>
                <a key={item} href="#">
                  {item}
                </a>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
