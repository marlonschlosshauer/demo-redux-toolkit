import React, { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../features/item-slice';


const TippGroupItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <p>{item?.id}</p>
      <p>{item?.name}</p>
      <p>{item?.color}</p>
      <button onClick={() => dispatch(remove(item))}>Remove</button>
    </div>
  )
}

const TippGroupList = ({ items }) => (
  <div>
    {items?.map((item, index) => (<TippGroupItem item={item} key={index} />))}
  </div>
)

const TippGroupAddMember = () => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const [name, setName] = useState(`${(new Date()).valueOf()}`);
  const [color, setColor] = useState('#a88380');

  const confirm = () => {
    dispatch(add({ name, color, id: `${(new Date()).valueOf()}` }));
    setHidden(true);
    setName(`${(new Date()).valueOf()}`);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '512px', alignItems: 'center' }}>
      {(hidden)
        ? (
          <button onClick={() => setHidden(false)}>+</button>
        )
        : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Add Member</h3>
            <h4>Name:</h4>
            <input name="name" type="text" value={name} onChange={({ target }) => setName(target.value)} />
            <h4>Color:</h4>
            <input name="color" type="text" value={color} onChange={({ target }) => setColor(target.value)} />
            <button onClick={confirm}>Confirm</button>
          </div>
        )}
    </div>
  )
}

const TippGroupOverview = () => {
  const items = useSelector(state => state.items.value);

  return (
    <div style={{ width: '250px', margin: 'auto' }}>
      <TippGroupList items={items} />
      <TippGroupAddMember />
    </div>
  )
}

export { TippGroupOverview };
