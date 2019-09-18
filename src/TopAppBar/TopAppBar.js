import React from "react";
import "./TopAppBar.css";
import logo from "../resource/appicon.png"


class TopAppBar extends React.Component {
  render() {
    return (
      <div className={this.props.appBarStyle||"top-app-bar-style"}>
        <div className="top-app-bar-icon-style">
        <img  src={this.props.icon || logo} height={this.props.appBarIconHeight || "80px"}/>
        </div>
        <div className={this.props.appBarTitleStyle||"top-app-bar-title-style"}>{this.props.title || "Title"}</div>
      
      </div>
    );
  }
}

export default TopAppBar;