import React, { Component } from "react";
import gotApi from "../api/gotApi";
import ItemDetails, { Field } from "../itemDetails/ItemDetails";
import ListItem from "../listItem/ListItem";
import Preloader from "../preloader/Preloader";

class Books extends Component {
  gotApi = new gotApi();

  render() {
    return (
      <>
        <ListItem
          onSelectedItemId={(itemId) => this.props.history.push(itemId)}
          getData={this.gotApi.getAllBooks}
          renderItem={(item) => item.name}
        />
      </>
    );
  }
}

export default Books;
