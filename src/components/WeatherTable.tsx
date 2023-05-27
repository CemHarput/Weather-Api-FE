import React, { useEffect, useState } from "react";
import City from "../interfaces/City";

export const WeatherTable = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch("/api/v1/weather/getAllCities");
      const body = await response.json();
      setCities(body);
    };
    fetchCities();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table table-normal w-full">
        <thead>
          <tr>
            <th></th>
            <th>Query Cost</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Resolved Address</th>
            <th>Address</th>
            <th>Timezone</th>
            <th>Tzoffset</th>
          </tr>
        </thead>
        <tbody>
          <th>
            {cities.map((city: City) => (
              <tr key={city.id}></tr>
            ))}
          </th>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.queryCost}</tr>
            ))}
          </td>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.latitude}</tr>
            ))}
          </td>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.longitude}</tr>
            ))}
          </td>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.resolvedAddress}</tr>
            ))}
          </td>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.address}</tr>
            ))}
          </td>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.timezone}</tr>
            ))}
          </td>
          <td>
            {cities.map((city: City) => (
              <tr key={city.id}>{city.tzoffset}</tr>
            ))}
          </td>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Query Cost</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Resolved Address</th>
            <th>Address</th>
            <th>Timezone</th>
            <th>Tzoffset</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
