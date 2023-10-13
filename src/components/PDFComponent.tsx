import { useEffect, useState } from "react";
import { API_ENDPOINT, DATA_KEY, getChartUrl } from "../utils/common";
import { API_RESPONSE_TYPE } from "../types";
import PDFRenderer from "./PDFRenderer";
import { PDFDownloadLink } from "@react-pdf/renderer";


const PDFComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
                setIsLoading(false);
            });
        } catch(err) {
            console.log("Error:: ", err);
            setIsLoading(false);
            alert("An error occured, please retry.");
        }
    }

    useEffect(()=> {
        getData();
    }, [])

    return (
        isLoading
        ? "Loading..."
        : <PDFDownloadLink 
                document={<PDFRenderer image={image} />} 
                fileName='RealAssist-Property-Report.pdf'
            >
                {({ loading, url }) => 
                    !loading && url ? <button>Print</button> : null
                } 
            </PDFDownloadLink>
    )
}

export default PDFComponent