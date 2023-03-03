import React from 'react'
import { Wrap } from './PopupStyles'

const Popup = ({ design }) => {
  console.log(window.scrollY)
  return (
    <Wrap b={window.scrollY}>
        <img src={design} style={{ objectFit: 'contain', width: "100%" }}/>
    </Wrap>
  )
}

export default Popup