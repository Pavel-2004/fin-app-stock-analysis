import Buttonc from './Buttonc';
import { useEffect, useState } from 'react';
import { getDataOnTicker } from '../backend/eodService';
import { checkIfOver } from '../algorithms/analysis';
function ResultComponentOwned(props) {
    const [total, setTotal] = useState(0)
    const [color, setColor] = useState("success")

    const handleView = () => {
        console.log("qty",props.priceAtPurchase)
        props.view(props.name, props.code, total, props.purchasedPrice, props.qty)
    }

    useEffect(() => {
        getDataOnTicker(props.code)
        .then(results => {
            let finalX = []
            let finalY = []
            let counter = 0
            results.forEach(result => {
                finalX.push(counter)
                finalY.push(result.high)
                counter++
            });
            let lastPrice = finalY[finalY.length - 1]

            if (checkIfOver(lastPrice, finalX, finalY)) {
                setColor("success")
                setTotal(parseFloat(props.qty, 2) * parseFloat(lastPrice, 2))
            } else {
                setColor("danger")
                setTotal(parseFloat(props.qty, 2) * parseFloat(lastPrice, 2))
            }
        })
    }, [])

    return (
        <div className="row"  style ={{padding: 20}} > 
    <div className ="container" style={{backgroundColor: props.color, color: props.text}}> 
  <div className="row">

    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px'}}>
      <div >{props.name}</div>
    </div>
    

    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px'}}>
    <div >{props.code}</div>
    </div>
    
 
    <div className="col-sm" style={{border: '1px solid grey',borderRadius:'5px'}}>
    <div className={'text-' + color}>{'$'+total}</div>
    </div>
    <Buttonc marginTop = "1px" title = "View" funct={handleView} >
    <div className="col-sm">
    view
    </div>
    </Buttonc >
  </div>

</div>

</div>
);
}
export default ResultComponentOwned;
