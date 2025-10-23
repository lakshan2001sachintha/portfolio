import React from 'react'
import MenuLink from './MenuLink'

function NavBar() {
  return (
    <div className='flex gap-24 pt-14 pb-16 font-bold'>
       <MenuLink linkname='Home' url='#home'/>
       <MenuLink linkname='Service' url='#services'/>
       <MenuLink linkname='Work' url='#works'/>
       <MenuLink linkname='About' url='#about'/>
       <MenuLink linkname='Skills' url='#skills'/>
    </div>
  )
}

export default NavBar
