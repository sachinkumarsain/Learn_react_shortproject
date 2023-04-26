import React from 'react'
import Row from './Row'
import requests from './requests'

function Home_page() {
  return (
    <>
    <Row endpoint={requests.fetchNetflixOriginals}/>
    <Row endpoint={requests.fetchActionMovies}/>
    </>
  )
}

export default Home_page