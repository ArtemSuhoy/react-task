import React from 'react';
import {navItems} from  '../Items/index';

const BreadCrump = () => {


    const elements = navItems.map(item =>{ return(
        <li class="breadcrumb-item"><a href={item.link}>{item.title}</a></li>
    ) } )

    return(
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                {elements}
            </ol>
        </nav>
    </div>
    )
}

export default BreadCrump