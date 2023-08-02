import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Style.css"

function CountryStateCities() {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cites, setCites] = useState([])
  const [selectState, setSelectState] = useState("")
  const [selectCountry, setSelectCountry] = useState("")

  useEffect(() => {
    axios.get('https://api.countrystatecity.in/v1/countries',
      {
        headers: {
          'X-CSCAPI-KEY': 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=='
        }
      })
      .then((result) => {
        setCountries(result.data)
      })

  }, [])


  useEffect(() => {
    axios.get(`https://api.countrystatecity.in/v1/countries/${selectCountry}/states/`,
      {
        headers: {
          'X-CSCAPI-KEY': 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=='
        }
      })
      .then((result) => {
        console.log(result.data)
        setStates(result.data)
      })

  }, [selectCountry])


  useEffect(() => {
    axios.get(`https://api.countrystatecity.in/v1/countries/${selectCountry}/states/${selectState}/cities`,
      {
        headers: {
          'X-CSCAPI-KEY': 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=='
        }
      })
      .then((result) => {
        setCites(result.data)
      })

  }, [selectState])
  console.log(selectState)

  console.log(states)
  // console.log(countries)

  console.log(selectCountry)

  return (
    <>
      <div className='wapper'>
        <h1><span className='first'>Globe</span><span className='secondZ'>Mapper</span></h1>
        <div className='total'>


          <select defaultValue={"select Country"} onChange={(e) => { setSelectCountry(e.target.value) }}>
            <option selected value=" select Country" disabled >Select Country</option>
            {
              countries.map((country) => {
                return <option value={country.iso2} >
                  {country.name}
                </option>
              })
            }
          </select>


          <select defaultValue={"Select State"} onChange={(e) => setSelectState(e.target.value)}>
            <option value="Select State" selected disabled>Select state</option>
            {
              states.map((state) => {
                return <option value={state.iso2}>{state.name}</option>
              })
            }
          </select>


          <select defaultValue={"Select Value"}>
            <option selected disabled value={"Select value "}>Select City</option>
            {
              cites.map((city) => {
                return <option value={city.iso2}>{city.name}</option>
              })
            }
          </select>

        </div>
      </div>

    </>
  )
}

export default CountryStateCities