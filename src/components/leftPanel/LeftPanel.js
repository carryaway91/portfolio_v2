import React from 'react'
import { ContactBtn, Wrap } from './LeftPanelStyles'
const LeftPanel = () => {
  return (
    <Wrap>
        <h2>Hi!</h2>
        <h2>I'm Peter.</h2>
        <div style={{ margin: '3rem 0 2rem 0'}}>
            <p>Visual Product Designer</p>
            <p>and Web Developer</p>
        </div>
        <ContactBtn href="/#websites">Portfolio</ContactBtn>
    </Wrap>
  )
}

export default LeftPanel