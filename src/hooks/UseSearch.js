import React from "react";

function useSearch(defaultValue, setSearchParams) {
  const [value, setValue] = React.useState(defaultValue);
  const onValueChangeHandler = (keyword) =>  {
    setValue(keyword);
    setSearchParams({keyword});
  }; 
  return [value, onValueChangeHandler];
}

export default useSearch;