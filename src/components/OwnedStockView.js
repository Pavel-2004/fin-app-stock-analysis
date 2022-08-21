import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonc from './Buttonc';
import TextComponent from './TextComponent';
import Graph from './GraphComponent';
import { useState } from 'react';
import { checkIfOver, linearRegression } from '../algorithms/analysis';


function OwnedStockView(props) {
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

    const checkUpByOrUnderBy = (prop) => {
        console.log(prop)
        var difference = props.total - (prop.purchasedPrice * prop.qty)

        var overOrUnder = ""
        var amount = 0
        if (difference >= 0){
            overOrUnder = "over"
            amount = Math.abs(difference)
        } else {
            overOrUnder = "down"
            amount = Math.abs(difference)
        }

        return [overOrUnder, amount]
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1>{`Result for ${props.name} ${props.code}`}</h1>
                        <h1>{`Total Value of Shares: $${props.total}`}</h1>
                        <h1>{`This stock in your portfolio went ${checkUpByOrUnderBy(props)[0]} by $${checkUpByOrUnderBy(props)[1]}`}</h1>
                        <Buttonc title="Go Back" funct={props.exit}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <Graph prices={convertToXYFormat(props.prices)} regression={convertToRegressionFormat(props.prices)} name={props.name + " data"} color={underOrOverCheck(props.prices) ? "green" : "red"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnedStockView