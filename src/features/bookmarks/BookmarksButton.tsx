import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addOne, selectAll } from "./bookmarksSlice";

export interface LinksButtonProps {
  noBookmarksLabel: string;
}

const LinksButton = ({ noBookmarksLabel }: LinksButtonProps) => {
  const dispatch = useAppDispatch();
  const allBookmarks = useAppSelector(selectAll);

  const handleClick = () => {
    const link = {
      id: String(Date.now()),
      label: "STUB",
      location: "http://google.com",
    };

    dispatch(addOne(link));
  };

  const label = allBookmarks.length ? " + " : noBookmarksLabel;

  return (
    <button className="whitespace-pre" onClick={handleClick}>
      {label}
    </button>
  );
};

export default LinksButton;
