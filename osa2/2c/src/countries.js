import ReactDOM from 'react-dom'
import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios';
import { Filter } from './Filter';
import { Country } from './country';

export const App = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const updateFilter = useCallback((value) => {
    console.log(value);
    console.log(value.length);
    setFilter(value);
  });
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(({ data }) => setCountries(data));
  }, []);
  // useEffect(() => {
  //   setFilteredCountries(countries.filter(({ name }) => name.includes(filter)));
  // },[countries]);
  useEffect(() => {
    setFilteredCountries(filter.length === 0 ? countries : countries.filter(({ name }) => name.toLowerCase().includes(filter)))
  }, [filter]);
  const showCountryInformation = (countryName) => setFilteredCountries(countries.filter(({ name }) => name.toLowerCase().includes(countryName.toLowerCase())));
  return (
    <div>
      <h2>Countries</h2>
      <Filter updateFilter={updateFilter}/>
      {
        filter.length === 0 ?
          <p>Filter is empty</p> :
          filteredCountries.length === 0 ? 
            (<p>No countries found</p>) : 
              filteredCountries.length > 10 ?
                (<p>Too many matches, specify another filter</p>) :
                  filteredCountries.length === 1 ?
                    <Country name={filteredCountries[0].name}/> :
                    <ul>
                      { 
                        filteredCountries.map(( { name  }) => <li key={name}>{name}<button onClick={() => showCountryInformation(name)}>Show</button></li>)
                      }
                    </ul>
      }
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)