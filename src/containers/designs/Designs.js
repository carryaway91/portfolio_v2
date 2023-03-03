import React, { useEffect, useState } from 'react'
import clock from '../../img/clock.png'
import book from '../../img/book.png'
import city from '../../img/city.png'
import dog from '../../img/dog.jpg'
import pokemon from '../../img/pokemon.png'
import plant from '../../img/plant.jpg'
import { Overlay, Wrap } from './DesignsStyles'
import Popup from '../../components/popup/Popup'

const Designs = () => {
    const designs = [clock, book, city, dog, pokemon, plant]
    const [popup, setPopup] = useState(false)
    const [chosen, setChosen] = useState()

    const managePopup = (img) => {
      setChosen(img)
      setPopup(true)
    }
  return (
    <Wrap id="designs">
        {
            designs && designs.map(d => (
              <div style={{ display: 'inline', width: '33.3%', display: 'flex', float: 'left', alignItems: 'center',background: 'black' }}>
                <img src={d} style={{  cursor: 'pointer', width: "100%"}} onClick={() => managePopup(d)}/>
              </div>
            ))
        }
        { popup && <Popup design={chosen} /> }
        { popup && <Overlay onClick={() => setPopup(false)} /> }

    </Wrap>
  )
}

export default Designs