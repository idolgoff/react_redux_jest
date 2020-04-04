import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/selectors";

const ListItems = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export const ConnectedListItems = connect(state => ({
  items: getItems(state)
}))(ListItems);
