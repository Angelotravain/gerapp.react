import React from 'react'
import { ListLinkStyled } from './Link.module'
import { GiClown } from "react-icons/gi";
const Link = ({ link, name }) => {

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = link;
    };

    return (
        <ListLinkStyled onClick={handleClick}>
            <div>
                <a className='button-menu-active'>
                    {name}
                </a>
            </div>
        </ListLinkStyled>
    )
}

export default Link