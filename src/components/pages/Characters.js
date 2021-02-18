import React from "react";
import gotApi from "../api/gotApi";
import ItemDetails, { Field } from "../itemDetails/ItemDetails";
import ListItem from "../listItem/ListItem";

class Characters extends React.Component {
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
          getData={this.gotApi.getAllCharacters}
          renderItem={(item) => `${item.name} (${item.gender})`}
        />
        <ItemDetails
          itemId={this.state.selectedId}
          getItemData={this.gotApi.getCharacter}
        >
          <Field field="gender" label="Gender" />
          <Field field="born" label="Born" />
          <Field field="died" label="Died" />
          <Field field="culture" label="Culture" />
        </ItemDetails>
      </>
    );
  }
}

export default Characters;
