import { Fragment } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAll } from "./bookmarksSlice";

const BookmarksList = () => {
  const allBookmarks = useAppSelector(selectAll);

  const listItems = allBookmarks.map(
    ({ id, label, location }, index, links) => {
      const separator = index < links.length - 1 ? " | " : null;

      return (
        <Fragment key={id}>
          <a
            className="text-[#61dafb]"
            href={location}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
          {separator}
        </Fragment>
      );
    }
  );

  return <>{listItems}</>;
};

export default BookmarksList;
