import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import BookmarkButton from "../features/bookmarks/BookmarksButton";
import BookmarkList from "../features/bookmarks/BookmarksList";

const HomeView = () => {
  const { t } = useTranslation();

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
          <BookmarkList />
          <BookmarkButton noBookmarksLabel={addFirstLink} />
        </p>
      </header>
    </div>
  );
};

export default HomeView;
