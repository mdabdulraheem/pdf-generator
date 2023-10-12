import { useEffect, useState } from "react"
import { API_ENDPOINT, DATA_KEY, getChartUrl } from "../utils/common";
import { API_RESPONSE_TYPE } from "../types";
import PDFRenderer from "./PDFRenderer";


const PDFComponent = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [image, setImage] = useState<null | string>(null);

    const getData = () => {
        let responseData: API_RESPONSE_TYPE;
        try {
            fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(data => {
                responseData = data;
                let labels: Array<number> = [];
                let dataPoints: Array<number> = [];
                responseData.data.forEach( (data: any) => {
                    labels.push(data['data_year']);
                    dataPoints.push(data[DATA_KEY])
                } )

                const chart: string = getChartUrl(labels, dataPoints);
                setImage(chart);
                setLoading(false);
            });
        } catch(err) {
            console.log("Error:: ", err);
            setLoading(false);
            alert("An error occured, please retry.");
        }
    }

    useEffect(()=> {
        getData();
    }, [])

    return (
        !loading
        ? <PDFRenderer image={image} />
        : null
    )
}

export default PDFComponent