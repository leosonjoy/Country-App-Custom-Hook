import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Countries from "./Countries";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
const Country_App = () => {
  const { data, error, isLoading } = useFetch(url);

  const [filterData, setFilterData] = useState(null);
  useEffect(() => {
    if (data) {
      setFilterData(data);
    }
  }, [data]);

  const errorMessage = error && <h2>{error}</h2>;
  const loading = isLoading && <h2>Loading...</h2>;

  const onRemoveCountry = (name) => {
    // setFilterData(data);
    const filter = filterData.filter((country) => country.name.common !== name);
    setFilterData(filter);
  };

  const handleSearch = (searchValue) => {
    console.log(searchValue);

    let value = searchValue.toLowerCase();

    if (data) {
      let newCountries = data.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value);
      });

      setFilterData(newCountries);
    }
  };

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {loading}
      {errorMessage}
      {filterData && (
        <Countries countries={filterData} onRemoveCountry={onRemoveCountry} />
      )}
    </>
  );
};

export default Country_App;
