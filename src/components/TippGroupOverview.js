import React, { useContext, useState } from 'react';

const ItemContext = React.createContext();

const TippGroupItem = ({ item, action }) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <p>{item?.id}</p>
    <p>{item?.name}</p>
    <p>{item?.color}</p>
    <button onClick={() => action(item)}>Remove</button>
  </div>
)

const TippGroupList = () => {
  const {items, setItems } = useContext(ItemContext);
  const remove = (item, items) => setItems(items.filter(i => i.id !== item.id));

  return (
    <div>
      {items?.map((item, index) => (<TippGroupItem key={index} item={item} action={i => remove(i, items)} />))}
    </div>
  )
}

const TippGroupAddMember = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '128px', alignItems: 'center' }}>
      {(hidden)
        ? (
          <button onClick={() => setHidden(false)}>+</button>
        )
        : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>Add Member</h3>
            <input name="" type="text" value="" />
            <button onClick={() => { }}>Confirm</button>
          </div>
        )}
    </div>
  )
}

const TippGroupOverview = ({ data }) => {
  const [items, setItems] = useState(data);
  return (
    <ItemContext.Provider value={{items, setItems}}>
      <div style={{ width: '250px', margin: 'auto' }}>
        <TippGroupList />
        <TippGroupAddMember />
      </div>
    </ItemContext.Provider>
  )
}

export { TippGroupOverview };
