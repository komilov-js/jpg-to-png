"use client"
import React from 'react'
import Nav from '../nav/nav'
import RemoveHome from '../removeHome/remove-home'
import JpgHome from '../jpgHome/jpghome'
import './home.scss'

const HomeComponents = () => {
  return (
    <>
      <div>
        <div className='home'>

          <div className='home-container'>
            <div>
              <JpgHome />
            </div>
            <div>
              <RemoveHome />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponents