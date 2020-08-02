import React from 'react';
import Card from '../Card/Card';
import './Main.css';
import { PRODUCTS } from '../../constants';

const Main = () => {


    const listProducts = PRODUCTS.map((card) => <Card key={card.id} data={card} />)

    return (
        <main className="main">
            {listProducts}
        </main>
    )
}

export default Main;