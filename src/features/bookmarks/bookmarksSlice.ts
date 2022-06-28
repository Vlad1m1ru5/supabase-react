import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type Bookmark = {
  id: string;
  label: string;
  location: string;
};

const bookmarksAdapter = createEntityAdapter<Bookmark>();

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: bookmarksAdapter.getInitialState(),
  reducers: {
    addOne: bookmarksAdapter.addOne,
  },
});

export const { addOne } = bookmarksSlice.actions;

const bookmarksSelector = bookmarksAdapter.getSelectors<RootState>(
  (state) => state.bookmarks
);

export const { selectAll } = bookmarksSelector;

export default bookmarksSlice;
