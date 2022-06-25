import { useState } from "react";
import { useTranslation } from "react-i18next";
import HomeLink from "../components/HomeLink";

export interface HomeViewProps {
  logo: string;
}

const HomeView = ({ logo }: HomeViewProps) => {
  const { t } = useTranslation();

  const [count, setCount] = useState(0);

  const handleCountClick = () => setCount((count) => count + 1);

  const edit = t`edit`;
  const save = t`save`;
  const title = t`title`;
  const countIs = t`countIs`;
  const viteDocs = t`links.viteDocs`;
  const learnReact = t`links.learnReact`;

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
          <button
            className="text-[calc(10px_+_2vmin)]"
            type="button"
            onClick={handleCountClick}
          >
            {countIs}
            {count}
          </button>
        </p>
        <p>
          {edit}
          <code>App.tsx</code>
          {save}
        </p>
        <p>
          <HomeLink link="https://reactjs.org">{learnReact}</HomeLink>
          {" | "}
          <HomeLink link="https://vitejs.dev/guide/features.html">
            {viteDocs}
          </HomeLink>
        </p>
      </header>
    </div>
  );
};

export default HomeView;
