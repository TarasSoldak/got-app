import React, { Component } from "react";
import gotApi from "../api/gotApi";
import "../randomChar/randomChar.css";

export const Field = ({ item, field, label }) => {
  return (
    <li>
      <span>
        <b>{label}</b>
      </span>
      <span>{item[field]}</span>
    </li>
  );
};

class ItemDetails extends Component {
  gotApi = new gotApi();
  state = {
    item: null,
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  updateItem = () => {
    const itemId = this.props.itemId;
    if (!itemId) {
      return;
    }
    this.props.getItemData(itemId).then((item) => {
      this.setState({ item });
    });
  };
  render() {
    if (!this.state.item) {
      return <span className="span">Please select item in the list</span>;
    }
    const { item } = this.state;
    const { name } = item;
    return (
      <div className="charBlock">
        <h4>
          <span>{name}</span>
        </h4>
        <ul>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}

export default ItemDetails;
