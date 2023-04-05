import React from 'react'
import Image from 'next/image'
import "./Gallery.css"
export default function Gallery() {
  return (
    <div dir='rtl'>
        <h1 className='titleGallery'>גלריית תמונות</h1>
    <div className='gallery'>
        <div className='pictureFromGallery'>
        <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              width={"100%"}
              height={"100%"}
            
            />
        </div>
        <div  className='pictureFromGallery'>
        <img
              src="https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
              alt="Logo"
              width={"100%"}
              height={"100%"}
            />
        </div>
        <div  className='pictureFromGallery'>
        <img
              src="https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              width={"100%"}
              height={"100%"}
            />
        </div>
        <div  className='pictureFromGallery'>
        <img
              src="https://images.unsplash.com/photo-1632781297772-1d68f375d878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              width={"100%"}
              height={"100%"}
            />
        </div>
    </div>
    </div>
  )
}
