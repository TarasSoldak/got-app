import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import gotApi from "../api/gotApi";
import ItemDetails, { Field } from "../itemDetails/ItemDetails";

class BookItem extends Component {
  gotApi = new gotApi();

  render() {
    return (
      <ItemDetails itemId={this.props.bookId} getItemData={this.gotApi.getBook}>
        <Field field="publisher" label="Publisher" />
        <Field field="country" label="Country" />
        <Field field="mediaType" label="MediaType" />
      </ItemDetails>
    );
  }
}

export default withRouter(BookItem);
