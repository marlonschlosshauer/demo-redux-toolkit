import React, { useState } from 'react';

const TippGroupItem = ({ item }) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <p>{item?.id}</p>
    <p>{item?.name}</p>
    <p>{item?.color}</p>
    <button onClick={() => { }}>Remove</button>
  </div>
)

const TippGroupList = ({ items }) => (
  <div>
    {items?.map(i => (<TippGroupItem item={i} />))}
  </div>
)

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

const TippGroupOverview = ({ items }) => {
  return (
    <div style={{ width: '250px', margin: 'auto' }}>
      <TippGroupList items={items} />
      <TippGroupAddMember />
    </div>
  )
}

export { TippGroupOverview };
