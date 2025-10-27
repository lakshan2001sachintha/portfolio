import React from 'react'
import MenuLink from './MenuLink'

function NavBar() {
  return (
    <div className='flex gap-24 pt-14 pb-16 font-bold'>
       <MenuLink linkname='Home' url='#home'/>
       <MenuLink linkname='About' url='#about'/>
       <MenuLink linkname='Skills' url='#skills'/>
       <MenuLink linkname='Projects' url='#projects'/>
       <MenuLink linkname='Certifications' url='#certifications'/>
    </div>
  )
}

export default NavBar
