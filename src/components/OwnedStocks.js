import Input from './Input';
import TextComponent from './TextComponent';
import Buttonc from './Buttonc';
import ResultComponentOwned from './ResultComponentOwned';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function OwnedStocks(props) {
    console.log("stock", props.allStocks)
    const listItems = props.allStocks.map((stock) => <ResultComponentOwned name={stock.stockName} code={stock.stockCode} qty={stock.qty} view={props.view} purchasedPrice={stock.priceAtPurchase}/>);

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className='border border-secondary rounded'>
                    <div className='my-2 mx-3'>
                        <TextComponent text="Owned Stocks" />
                    </div>
                </div>
                
            </div>
            {listItems}
        </div>
    )
}

function OwnedStocksPush() {
    return (
        <OwnedStocks allStocks={[{name: "Tesla", code: "TSLA", total: 1000, color:"red"}, {name: "Tesla", code: "TSLA", total: 1000, color:"green"}]} />
    )
}

export default OwnedStocks;