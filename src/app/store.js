import itemReducer from '../features/item-slice';
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {items: itemReducer},
});
