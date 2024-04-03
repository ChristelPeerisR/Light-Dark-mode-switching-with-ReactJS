import React from 'react'
import './Head.css'
import rewards from '../../assets/rewards.png'

const Head = () => {
  return (
    <div className='head'>
        <div className='head-text'>
            <h1>Tacos on the Go</h1>
            <p>For a limited time, join Tacolicious Rewards to get a
              Build Your Own Cravings Box for $1** and redeem your free
              Welcome Reward* on the app.</p>
            <button className='btn'>Join Rewards <img src={rewards}/> </button>
        </div>
    </div>
  )
}

export default Head