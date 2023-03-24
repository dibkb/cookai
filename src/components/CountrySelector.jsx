import React, { useEffect, useState } from "react";
import Select from "react-select";
export const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: "6px",
          borderWidth: "1px",
          padding: "8px 9px",
          outline: "none",
          fontSize: "12px",
          fontWeight: "600",
          borderColor: state.isFocused ? "black" : "stone-600",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#C5FA2E",
          primary: "black",
        },
      })}
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
    />
  );
};
