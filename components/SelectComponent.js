export const SelectComponent = ({ onChange, defaultValue, values }) => {
  return (
    <>
      <label className="title is-3 sort__title" htmlFor="sort">
        Sort and filter
      </label>
        <div className="select">
          <select
            id="sort"
            className="select__item"
            defaultValue={defaultValue}
            onChange={(e) => onChange(e)}
           >
            {values.map((value) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <option
                value={value.toLowerCase().split(" ").join("-")}
              >
                {value}
              </option>
            );
          })}
        </select>
        </div>
      </>
   );
};
