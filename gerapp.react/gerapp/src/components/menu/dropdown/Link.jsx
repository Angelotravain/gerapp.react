import React from 'react'

const Link = ({ link, name }) => {
    return (
        <li><a className='button-menu-active' href={link}>{name}</a></li>
    )
}

export default Link