export interface LinksItemProps {
  label: string;
  location: string;
}

const LinksItem = ({ label, location }: LinksItemProps) => {
  return (
    <a
      className="text-[#61dafb]"
      href={location}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};

export default LinksItem;
