import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type Link = {
  id: string;
  label: string;
  location: string;
};

const linksAdapter = createEntityAdapter<Link>();

const linksSlice = createSlice({
  name: "links",
  initialState: linksAdapter.getInitialState(),
  reducers: {
    addOne: linksAdapter.addOne,
  },
});

export const { addOne } = linksSlice.actions;

const linksSelector = linksAdapter.getSelectors<RootState>(
  (state) => state.links
);

export const { selectAll } = linksSelector;

export default linksSlice;
