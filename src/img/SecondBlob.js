import React from 'react'

const SecondBlob = () => {
  return (
    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs> 
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(0, 0, 0, 0.97)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgba(255, 250.621, 243.393, 1)" offset="100%"></stop>
        </linearGradient>
    </defs>
<path fill="url(#sw-gradient)" d="M22.7,-26.9C30.1,-20.8,37.4,-14.3,40,-6.1C42.7,2.2,40.7,12.3,35.2,19C29.7,25.6,20.7,28.9,11.6,32.5C2.5,36,-6.7,39.8,-13.7,37.4C-20.8,35,-25.8,26.4,-29.8,17.9C-33.9,9.5,-36.9,1.2,-36.2,-6.9C-35.4,-15.1,-30.8,-23.2,-24.1,-29.4C-17.5,-35.6,-8.7,-39.9,-0.6,-39.3C7.6,-38.6,15.2,-32.9,22.7,-26.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }} stroke="url(#sw-gradient)"></path>
</svg>
  )
}

export default SecondBlob