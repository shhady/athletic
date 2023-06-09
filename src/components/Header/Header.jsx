import React from 'react'
import Image from 'next/image'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div> <img
              src="/logo.png"
              alt="Logo"
              width={100}
              height={30}
              
            /></div>
        <div className='headerMiddle'>
        <div>צור קשר</div>
        <div>עלינו</div>
          <div>גלריה</div>
          <div>מאמנים</div>
          <div>מחירים</div>
          <div>חוגים</div>
        </div>
        <div className='instagram'>
          <a target="_blank" href='https://www.instagram.com/athletic.g.y.m/'><img
              src="/Instagram_Glyph_White.png"
              alt="Logo"
              width={30}
              height={30}
            /></a>
            <div className='hamburger'>
            <img
              src="/hamburger.png"
              alt="Logo"
              width={30}
              height={30}
             
            />
            </div>

            </div>
    </div>
  )
}

export default Header