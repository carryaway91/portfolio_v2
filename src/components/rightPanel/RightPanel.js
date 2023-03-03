import React from 'react'
import Me from '../../img/me.png'
import SecondBlob from '../../img/SecondBlob'
import { Img, Wrap } from './RightPanelStyles'
const RightPanel = () => {
  return (
    <Wrap>
        <Img src={Me} />
        <SecondBlob />
    </Wrap>
  )
}

export default RightPanel