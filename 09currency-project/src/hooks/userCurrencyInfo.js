import { useState, useEffect } from "react";


const useCurrencyInfo = (currency) => {
    const [data, SetData] = useState({})

    useEffect(
        () => {
            fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
                .then((res) => res.json())
                .then((res) => SetData(res[currency]))
            console.log(data);
        }, [currency])
    console.log(data);
}


export default useCurrencyInfo;