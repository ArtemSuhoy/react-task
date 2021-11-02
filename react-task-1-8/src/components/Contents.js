import React from 'react';
import {Input, Rating, Tags, Pagination} from './All-components';
import './Content-Components.js'
import { Alert, BreadCrump, Button, Card} from './Content-Components.js';
import './styles/Contents.css';
const Contents = () =>{


    return(
        <>
         <Alert color='danger'>Message</Alert>
         <Button type='button' color='warning' href='https://daruse.ru/zadaniya-po-react-dlya-prokachki'>Button</Button>
         <Card/>
         <BreadCrump/>
         <Input placeholder='exmple@mail.io' type='input'/>
         <Rating maxStars='5' selectStars='3'/>
         <Tags/>
         <Pagination countArticles='30' limit='10'/>
        </>
    )
}

export default Contents