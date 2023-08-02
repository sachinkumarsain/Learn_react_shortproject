import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CountryStateCities() {
  const[countries ,setCountries ] = useState([])
  const[states , setStates] = useState([])
  const[cites , setCites]= useState([])
  const[selectState, setSelectState]=useState("")
  const[selectCountry , setSelectCountry] =useState("")

  useEffect(() => {
    axios.get('https://api.countrystatecity.in/v1/countries',
   { headers: {
      'X-CSCAPI-KEY': 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=='}
    })
    .then((result)=>{
      setCountries(result.data)
    })

  }, [])
  useEffect(() => {
    axios.get('https://api.countrystatecity.in/v1/states',
   { headers: {
      'X-CSCAPI-KEY': 'TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=='}
    })
    .then((result)=>{
      setStates(result.data)
    })

  }, [])
  console.log(states)

  console.log(selectCountry)

  return (
    <>
    <div className='total'>
     
        <select onChange={(e)=>{setSelectCountry(e.target.value)}}>
          <option selected >Select Country</option>
        {
        countries.map((country)=>{
          return <option value={country.name} >
             { country.name}
          </option>
        })
      }
        </select>
    
    </div>

    </>
  )
}

export default CountryStateCities