import  ChartJsImage from 'chartjs-to-image';
import { StyleSheet } from '@react-pdf/renderer';

const CHART_OPTIONS = {
    elements: {
        point: {
            pointRadius: 0
        }
    },
    plugins: {
        legend: {
            display: false
        }
      },
    scales: {
        x: {
            grid: {
                display: false,
                drawTicks: false,
                color: "#bac2db",
                borderColor: "#bac2db"
            },
            ticks: {
                padding: 10,
                color: "#626e99",
                align: "start"
            }
        },
        y: {
            grid: {
                drawTicks: false,
                color: "#bac2db",
                borderColor: "#bac2db",
            },
            ticks: {
                padding: 10,
                color: "#626e99",
                maxTicksLimit: 7,
                align: "end"
            },
            title: {
                display: true,
                text: "Arrests",
                color: "#090e24"
            }
        }
    }
};

export const getChartUrl = (labels: Array<Number>, data: Array<Number>) => {
    const myChart = new ChartJsImage();
    myChart.setChartJsVersion("4.4.0")
    myChart.setConfig({
        type: 'line',
        data: { 
            labels: labels, 
            datasets: [
                {
                  data: data,
                  borderColor: '#1463FF',
                  borderWidth: 2,
                },
              ]                
        },
        options: CHART_OPTIONS
    });
    myChart.setHeight(200);
    return myChart.getUrl()
}


export const API_ENDPOINT = "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

export const DATA_KEY = "Burglary";

export const getPDFStyles = ()=> {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 15,
            marginBottom: 45,
            fontFamily: "Poppins",
            paddingBottom: 15,
            fontSize: "9px"
        },
        header: {
            display: "flex",
            flexDirection: "column",
            fontSize: "10px"
        },
        headerContent: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        headerAddress: {
            fontWeight: 900, 
            fontSize: "9px",
            color: "#090E24"
        },
        separator: {
            height: "2px",
            backgroundColor: "#1463FF",
            marginTop: 5,
            marginBottom: 10
        },
        section: {
            backgroundColor: "#F2F4F5",
            borderRadius: 12
        },
        chartHeading: {
            color: "#1463FF",
            fontSize: "9px",
            backgroundColor: "#E8EEFB",
            borderTopLeftRadius: "12",
            borderTopRightRadius: "12",
            padding: "10 16 10 16"
        },
        chart: {
            padding: "10 16 10 16"
        },
        chartImage: {
            borderRadius: "12"
        },
        crimeTitle: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#090E24",
            marginVertical: 10
        },
        crimeText: {
            fontSize: 10,
            fontWeight: 500,
            marginLeft: 5,
            marginRight: 10
        },
        crimeIcon: {
            width: 16,
            height: 16
        },
        footer: {
            position: 'absolute',
            fontSize: 12,
            bottom: 15,
            left: 15,
            right: 15,
        },
        footerContent: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "9px",
            fontWeight: 900,
            color: "#090E24"
        },
        footerLeft: { 
            color: "#1463FF"
        },
    })

    return styles;
}