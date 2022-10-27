import { SelectComponent } from "./SelectComponent";

export const FilterBlock = ({
  changeSortBy,
  sortBy,
  changeFilterBy,
  filterBy,
}) => {
  return (
    <div className="main">
      <div className="main__sort">
        <SelectComponent
          onChange={changeSortBy}
          defaultValue={sortBy}
          values={["Name", "Last Name", "Email"]}
        />

        <SelectComponent
          onChange={changeFilterBy}
          defaultValue={filterBy}
          values={["Any", "Male", "Female"]}
        />
      </div>
    </div>
  );
};
