import React from 'react';

const Tags = () =>{
    const tagItem = [
        {title: 'Tag №1', href:'#1'},
        {title: 'Tag №2', href:'#2'},
        {title: 'Tag №3', href:'#3'},
    ]

    return(
        <div>
            { (() => tagItem.map(item => <div href={tagItem.href}>{item.title}</div> ))() }
        </div>
    )
}

export default Tags