import React from 'react'

const MenuLink = (props) => {
  return (
    <div>
      <a href={props.url}
         className='link text-gray-50'>{props.linkname}</a>
    </div>
  )
}

export default MenuLink
