import React from "react";
import gotApi from "../api/gotApi";
import ItemDetails, { Field } from "../itemDetails/ItemDetails";
import ListItem from "../listItem/ListItem";

class Houses extends React.Component {
  gotApi = new gotApi();

  state = {
    selectedId: null,
  };
  onSelectedId = (id) => {
    this.setState({ selectedId: id });
  };
  render() {
    return (
      <>
        <ListItem
          onSelectedItemId={this.onSelectedId}
          getData={this.gotApi.getAllHouses}
          renderItem={(item) => item.name}
        />
        <ItemDetails
          itemId={this.state.selectedId}
          getItemData={this.gotApi.getHouse}
        >
          <Field field="region" label="Region" />
          <Field field="coatOfArms" label="CoatOfArms" />
          <Field field="words" label="Words" />
        </ItemDetails>
      </>
    );
  }
}

export default Houses;
