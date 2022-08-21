import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TextComponent from './TextComponent';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries
  } from 'react-vis';


function Graph(props) {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <TextComponent text={props.name} />
            </div>
            <div className='d-flex justify-content-center'>
                <XYPlot width={1000} height={600}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis title="price" position="end" />
                    <LineMarkSeries
                        className="linear-regression-line"
                        style={{
                        strokeWidth: '3px',
                        fill:"none"
                        }}
                        lineStyle={{stroke: 'blue'}}
                        markStyle={{stroke: 'blue'}}
                        data={props.regression}
                    />
                    <LineMarkSeries
                        className="prices-line"
                        style={{
                        strokeWidth: '3px',
                        fill:"none"
                        }}
                        stroke={props.color}
                        data={props.prices}
                    />
                </XYPlot>

            </div>
        </div>
        
    )
}

function GraphPush() {
    return (
        <Graph 
        prices={[{x:0.5, y:0.5}, {x:1,y:2}, {x:2.5,y:3}]}
        regression={[{x:0, y:0}, {x:1, y:1}, {x:2, y:2}]}
        name="Title Goes Here"
        color="green" />
    )
}
export default Graph;