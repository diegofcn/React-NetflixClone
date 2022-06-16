import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} />
        <Row rowID='5' title='UpComing' fetchURL={requests.requestUpcoming} />
    </>
  )
}

export default Home