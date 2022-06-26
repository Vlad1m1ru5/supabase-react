import type { ReactNode } from "react";

export interface HomeLinkProps {
  location: string;
  children?: ReactNode;
}

const HomeLink = ({ location, children }: HomeLinkProps) => {
  return (
    <a
      className="text-[#61dafb]"
      href={location}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default HomeLink;
