import React from "react";
import Preloader from "../preloader/Preloader";
import "./itemList.css";

class ListItem extends React.Component {
  state = {
    itemList: null,
  };
  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }
  renderItems = (arr) => {
    return arr.map((item) => {
      const label = this.props.renderItem(item);
      return (
        <li key={item.id} onClick={() => this.props.onSelectedItemId(item.id)}>
          {label}
        </li>
      );
    });
  };
  render() {
    const { itemList } = this.state;
    return (
      <ul className="list">
        {!itemList ? <Preloader /> : this.renderItems(itemList)}
      </ul>
    );
  }
}

export default ListItem;
