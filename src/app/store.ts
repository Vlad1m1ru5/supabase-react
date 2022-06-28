import { configureStore } from "@reduxjs/toolkit";
import bookmarksSlice from "../features/bookmarks/bookmarksSlice";

const store = configureStore({
  reducer: {
    [bookmarksSlice.name]: bookmarksSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
