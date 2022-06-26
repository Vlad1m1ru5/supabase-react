import { useAppDispatch } from "../../app/hooks";
import { addOne } from "./linksSlice";

export interface LinksButtonProps {
  label: string;
}

const LinksButton = ({ label }: LinksButtonProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const link = {
      id: String(Date.now()),
      label: "STUB",
      location: "http://google.com",
    };

    dispatch(addOne(link));
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default LinksButton;
