import { SearchUsers } from "./UserSearch";

export const Header = ({ searchBy, setSearchBy }) => {
  return (
    <div className="header">
      <h1 className="title header__title">Random Users</h1>
      <SearchUsers searchBy={searchBy} setSearchBy={setSearchBy} />
    </div>
  );
};
