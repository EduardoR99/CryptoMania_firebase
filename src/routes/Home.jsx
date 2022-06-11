import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const Home = (props) => {
  return (
    <div>
      <CoinSearch coins={props.coins}/>
      <Trending />
    </div>
  )
}

export default Home