export const getDataOnTicker = (ticker) => {
    return fetch(`https://eodhistoricaldata.com/api/eod/${ticker}?period=d&fmt=json&api_token=625b098fbe8a43.10986498`)
    .then(result => {
        return result.json()
    })
}

export const searchResult = (searchInput) => {
    return fetch(`https://eodhistoricaldata.com/api/search/${searchInput}?api_token=625b098fbe8a43.10986498`)
    .then(result => {
        return result.json()
    })
}