export const linearRegression = (xPoints, yPoints) => {
    let totalX = 0
    let totalY = 0

    distance = 0
    for (let i = 0; i < xPoints.length; i++) {
        distance = xPoints[i] - xPoints[0];
        totalX += xPoints[i]
        totalY += yPoints[i]
    }

    xAvg = totalX / xPoints.length
    yAvg = totalY / yPoints.length


    numerator = 0
    denominator = 0
    for (let i = 0; i < xPoints.length; i++) {
        tempX = xPoints[i] - xAvg
        tempY = yPoints[i] - yAvg
        denominator = tempX * tempX
        numerator = tempX * tempY
    }
    
    mValue = numerator / denominator
    bValue = yAvg - (mValue * xAvg)

    final = []
    for (let i = 0; i < xPoints.length; i++) {
        temp = {}
        temp.x = xPoints[i]
        temp.y = (mValue * xPoints[i]) + bValue
        final.push(temp)
    }

    return final
}