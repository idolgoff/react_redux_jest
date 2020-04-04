import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../../redux/actions/items";

const generateId = () => uuidv4();

const Input = ({ value = "", addItem }) => {
  const [_value, setValue] = useState(value);

  const onKeyDown = useCallback(
    e => {
      if (e.key === "Enter") {
        addItem({
          id: generateId(),
          name: _value,
          done: false
        });
        setValue("");
      }
    },
    [_value, setValue, addItem]
  );

  return (
    <input
      type="text"
      onKeyDown={onKeyDown}
      onChange={e => setValue(e.target.value)}
      value={_value}
    />
  );
};

export const ConnectedInput = connect(
  null,
  {
    addItem
  }
)(Input);
