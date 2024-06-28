"use client";
import React, { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("United Sates");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(`https://ipapi.co/json`)
        .then((res) => res.json())
        .then((data) => data.country_name);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);


  return <div>{country}</div>;
}

export default CountryLookup;
