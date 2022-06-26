import { useAppSelector } from "../../app/hooks";
import LinksItem from "./LinksItem";
import { selectAll } from "./linksSlice";

const LinksList = () => {
  const allLinks = useAppSelector(selectAll);

  const listItems = allLinks.map(({ id, label, location }, index, links) => {
    const separator = index < links.length - 1 ? " | " : null;

    return (
      <>
        <LinksItem key={id} label={label} location={location} />
        {separator}
      </>
    );
  });

  return <ul>{listItems}</ul>;
};

export default LinksList;
