import type { ReactNode } from "react";

export interface HomeLinkProps {
  link: string;
  children?: ReactNode;
}

const HomeLink = ({ link, children }: HomeLinkProps) => {
  return (
    <a
      className="text-[#61dafb]"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default HomeLink;
