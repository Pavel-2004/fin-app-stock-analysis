import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import React, { useState } from 'react';

function StockSearch() {
    const [stockInput, setStockInput] = useState('');

    function onSearch(stock) {
        console.log("searching stock:", stockInput);
        setStockInput('');

    }

    return (
        <div className='col-12'>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <Input placeholderIn='Search for a stock' valueIn={stockInput} onChangeIn={event => setStockInput(event.target.value)} />
                </div>
                <div className='col-2 my-3'>
                    <Buttonc title='Search' funct={stockInput => onSearch(stockInput)} padding={10} />
                </div>

            </div>
        </div>
    )
}

export default StockSearch;