export const linearRegression = (xPoints, yPoints) => {
    let totalX = 0
    let totalY = 0

    distance = 0
    for (let i = 0; i < xPoints.length; i++) {
        distance = xPoints[i] - xPoints[0];
        totalX += yPoints[i]
    }
}