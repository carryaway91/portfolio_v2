import React from 'react'

const Blob = () => {
  return (
    <svg id="sw-js-blob-svg"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs> 
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(23.977, 23.977, 23.977, 1)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgba(231.165, 224.241, 212.812, 1)" offset="100%"></stop>
        </linearGradient>
    </defs>
<path fill="url(#sw-gradient)" d="M16.8,-27.1C22.4,-22.5,28,-18.9,33,-13.4C38,-8,42.4,-0.6,40.9,5.4C39.3,11.5,31.8,16.3,26,21.9C20.2,27.4,16,33.7,10.2,35.9C4.5,38,-2.8,36.1,-10.1,34.1C-17.5,32.1,-25,30.2,-29.9,25.4C-34.7,20.7,-36.9,13.2,-36.5,6.2C-36.1,-0.8,-33,-7.2,-30.5,-14.5C-28.1,-21.8,-26.3,-30,-21.3,-34.9C-16.3,-39.8,-8.2,-41.5,-1.3,-39.5C5.6,-37.5,11.2,-31.8,16.8,-27.1Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: 'all 0.3s ease 0s'}}></path>
</svg>
  )
}

export default Blob