const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [
    { id: 1, name: 'Marcel', color: 'blue' },
    { id: 2, name: 'Philipp', color: 'red' },
    { id: 3, name: 'Felix', color: 'yellow' },
    { id: 4, name: 'Peter', color: 'green' },
  ],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.value.push(payload)
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter(x => x.id !== payload.id)
    },
    reset: (state) => (state.value = []),
  }
});


export const { add, remove, reset } = itemSlice.actions;
export default itemSlice.reducer;
