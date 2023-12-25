import "./hero.scss"

import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <h2>KAMAU MBUGUA</h2>
                <h1>Web Developer and UI Designer</h1>
            <div className="buttons">
                <button>See my Latest Works</button>
                <button>Contact Me?</button>
            </div>
                <img src="/scroll.png" alt="" />
            </div>
        </div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />

        </div>
    </div>
  )
}

export default Hero