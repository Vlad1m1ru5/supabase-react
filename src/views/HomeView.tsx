import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import LinksButton from "../features/links/LinksButton";
import LinksList from "../features/links/LinksList";

const HomeView = () => {
  const { t } = useTranslation();

  const edit = t`edit`;
  const save = t`save`;
  const title = t`title`;
  const addFirstLink = t`addFirstLink`;

  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-[calc(10px_+_2vmin)] text-white">
        <img
          src={logo}
          className="pointer-events-none h-[40vmin] motion-safe:animate-[spin_infinite_20s_linear]"
          alt="logo"
        />
        <p>{title}</p>
        <p>
          {edit}
          <code>App.tsx</code>
          {save}
        </p>
        <LinksList />
        <LinksButton label={addFirstLink} />
      </header>
    </div>
  );
};

export default HomeView;
