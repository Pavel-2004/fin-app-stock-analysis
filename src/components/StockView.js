import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonc from './Buttonc';
import TextComponent from './TextComponent';
import Graph from './GraphComponent';
import { useState } from 'react';
import { checkIfOver, linearRegression } from '../algorithms/analysis';
import Input from './Input';
import { createStock, updateStock } from '../backend/stock';

function StockView(props) {    
    const [qty, setQty] = useState(0)


    const convertToXYFormat = (prices) => {
        let final = []
        let counter = 0
        prices.forEach(price => {
            let temp = {x: counter, y: price.high}
            final.push(temp)
            counter++;
        });
        return final
    }

    const convertToRegressionFormat = (prices) => {
        let finalX = []
        let finalY = []

        let counter = 0;
        prices.forEach(price => {
            finalX.push(counter)
            finalY.push(price.high)
            counter++;
        })

        return linearRegression(finalX, finalY)
    }

    const underOrOverCheck = (prices) => {
        let finalX = []
        let finalY = []

        let counter = 0;
        prices.forEach(price => {
            finalX.push(counter)
            finalY.push(price.high)
            counter++;
        })

        return checkIfOver(finalY[finalY.length - 1], finalX, finalY)
    }

    const handleStock = () => {
        console.log("here")
        let found = false
        let foundStock = {}
        props.ownedStocks.forEach(stock => {
            if (stock.stockCode === props.code) {
                found = true
                foundStock = stock
            }
        });

        if (found) {
            const data = {
                ownerId: props.userId,
                priceAtPurchase: props.prices[props.prices.length - 1]["high"],
                qty: parseFloat(foundStock.qty) + parseFloat(qty),
                stockCode: props.code,
                stockName: props.name
            }

            updateStock(props.userId, data)
            .then(result => {
                setQty(0)
                props.exit()
            })
            .catch(err => {
                console.log(err.message)
            })
        } else {
            const data = {
                ownerId: props.userId,
                priceAtPurchase: props.prices[props.prices.length - 1]["high"],
                qty: parseFloat(qty),
                stockCode: props.code,
                stockName: props.name
            }

            createStock(data)
            .then(result => {
                setQty(0)
                props.exit()
            })
            .catch(err => {
                console.log(err.message);
            })
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1>{`Result for ${props.name} ${props.code}`}</h1>
                        <h1>{`Current Price: ${props.price}`}</h1>
                        <Buttonc title="Go Back" funct={props.exit}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <Graph prices={convertToXYFormat(props.prices)} regression={convertToRegressionFormat(props.prices)} name={props.name + " data"} color={underOrOverCheck(props.prices) ? "green" : "red"}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-7 my-auto">
                        <Input labelIn="Add stock to portfolio" type="number" placeholderIn="Enter QTY" onChangeIn={event => setQty(event.target.value)} valueIn={qty}/>
                    </div>
                    <div className="col-2 my-auto">
                        <Buttonc title="Add" funct={handleStock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockView