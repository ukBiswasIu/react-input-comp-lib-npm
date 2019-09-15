import React from "react";
class InputBox extends React.Component {

    handleOnChange(e){
        return e;
    }

    helloMan(name) {
        return "hey "+name;
    }

  render() {
    return (
      <div>
        <span>{this.props.label + ": " || ""}</span>
        <input
          className={this.props.className}
          type={this.props.type || "text"}
          placeholder={this.props.placeholder}
          onChange={e=>this.handleOnChange(e)}
        />
      </div>
    );
  }
}
export {InputBox, helloMan};
