export const SearchUsers = ({ setSearchBy, searchBy }) => {
  return (
    <div class="header__search">
      <input
        value={searchBy}
        onChange={(e) => {
          setSearchBy(e.target.value);
        }}
        placeholder="Search user"
        className="input"
      />
    </div>
  );
};
