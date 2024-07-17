import React from 'react'
import { ListLinkStyled } from './Link.module'

const Link = ({ link, name }) => {
    return (
        <ListLinkStyled>
            <a className='button-menu-active' href={link}>
                {name}
            </a>
        </ListLinkStyled>
    )
}

export default Link