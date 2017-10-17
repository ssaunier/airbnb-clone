import React from "react";
import "./flat.css";

class Flat extends React.Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };
    const title = `${this.props.flat.price}€ - ${this.props.flat.name}`
    return (
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">{title}</div>
      </div>);
  }

  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }
}

export default Flat;
