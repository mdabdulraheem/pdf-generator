import { PDFDownloadLink } from '@react-pdf/renderer';
import './App.css';
import PDFComponent from './components/PDFComponent';

const App = () => {

  return (
    <>
        <PDFDownloadLink 
            document={<PDFComponent />} 
            fileName='RealAssist-Property-Report.pdf'
        >
            {({ loading }) =>
                loading ? 'Loading...' : <button>Print</button>
            } 
        </PDFDownloadLink>
    </>
  )
}

export default App
