export const linearRegression = (xPoints, yPoints) => {
    let totalX = 0
    let totalY = 0

    let distance = 0
    for (let i = 0; i < xPoints.length; i++) {
        distance = xPoints[i] - xPoints[0];
        totalX += xPoints[i]
        totalY += yPoints[i]
    }

    let xAvg = totalX / xPoints.length
    let yAvg = totalY / yPoints.length


    let numerator = 0
    let denominator = 0
    for (let i = 0; i < xPoints.length; i++) {
        let tempX = xPoints[i] - xAvg
        let tempY = yPoints[i] - yAvg
        denominator = tempX * tempX
        numerator = tempX * tempY
    }
    
    let mValue = numerator / denominator
    let bValue = yAvg - (mValue * xAvg)

    let final = []
    for (let i = 0; i < xPoints.length; i++) {
        let temp = {}
        temp.x = xPoints[i]
        temp.y = (mValue * xPoints[i]) + bValue
        final.push(temp)
    }

    return final
}

export const checkIfOver = (lastPrice, xPoints, yPoints) => {
    let points = linearRegression(xPoints, yPoints)
    let lastPriceLinearRegression = points[points.length - 1]["y"]
    return lastPrice >= lastPriceLinearRegression
}