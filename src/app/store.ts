import { configureStore } from "@reduxjs/toolkit";
import linksSlice from "../features/links/linksSlice";

const store = configureStore({
  reducer: {
    [linksSlice.name]: linksSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
