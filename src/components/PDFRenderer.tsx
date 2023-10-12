import { Document, Page, View, Text, Image, Font } from "@react-pdf/renderer";
import { getPDFStyles } from "../utils/common";
import moment from 'moment';

Font.register({
    family: 'Poppins',
    fonts: [
        { src: "https://cdn.jsdelivr.net/npm/@openfonts/poppins_all@1.44.7/files/poppins-all-400.woff"},
        { src: "https://cdn.jsdelivr.net/npm/@openfonts/poppins_all@1.44.7/files/poppins-all-600.woff", fontWeight: 600},
        { src: "https://cdn.jsdelivr.net/npm/@openfonts/poppins_all@1.44.7/files/poppins-all-900.woff", fontWeight: 900}
    ]
});
type Props = {
    image: string | null
}
const PDFRenderer = ({ image }: Props ) => {
    const styles = getPDFStyles();

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                 {/* Page Header */}
                <View fixed style={styles.header}>  
                    <View style={styles.headerContent}>
                        <Text>
                            <Image  src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/izebtzfxbgyhl0znamhf" />
                            <Text> RealAssist.AI</Text>
                        </Text>
                        <Text style={styles.headerAddress}>
                            123 Main Street, Dover, NH 03820 - 4667
                        </Text>
                    </View>
                    <View style={styles.separator}></View>
                </View>

                {/* Page Content */}
                <View wrap={false}>
                    <View style={styles.crimeTitle}>
                        <Image style={styles.crimeIcon} src="https://cdn-icons-png.flaticon.com/512/7447/7447582.png" />
                        <Text style={styles.crimeText}>Crime</Text>
                        <View style={[styles.separator, {flex: 1}]}></View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.chartHeading}>Burglary</Text>
                        <View style={styles.chart}>
                            <Image style={styles.chartImage} src={image} />
                        </View>
                    </View>
                </View>

                {/* Uncomment below code to check multipage PDF with dynamic page numbers and common header and footer */}
                
                {/* <View wrap={false}>
                    <View style={styles.separator}></View>
                    <View style={styles.crimeTitle}>
                        <Image style={styles.crimeIcon} src="https://cdn-icons-png.flaticon.com/512/7447/7447582.png" />
                        <Text style={styles.crimeText}>Crime</Text>
                        <View style={[styles.separator, {flex: 1}]}></View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.chartHeading}>Burglary</Text>
                        <View style={styles.chart}>
                            <Image style={styles.chartImage} src={imageData} />
                        </View>
                    </View>
                </View>

                <View wrap={false}>
                    <View style={styles.separator}></View>
                    <View style={styles.crimeTitle}>
                        <Image style={styles.crimeIcon} src="https://cdn-icons-png.flaticon.com/512/7447/7447582.png" />
                        <Text style={styles.crimeText}>Crime</Text>
                        <View style={[styles.separator, {flex: 1}]}></View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.chartHeading}>Burglary</Text>
                        <View style={styles.chart}>
                            <Image style={styles.chartImage} src={imageData} />
                        </View>
                    </View>
                </View>

                <View wrap={false}>
                    <View style={styles.separator}></View>
                    <View style={styles.crimeTitle}>
                        <Image style={styles.crimeIcon} src="https://cdn-icons-png.flaticon.com/512/7447/7447582.png" />
                        <Text style={styles.crimeText}>Crime</Text>
                        <View style={[styles.separator, {flex: 1}]}></View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.chartHeading}>Burglary</Text>
                        <View style={styles.chart}>
                            <Image style={styles.chartImage} src={imageData} />
                        </View>
                    </View>
                </View>

                <View wrap={false}>
                    <View style={styles.separator}></View>
                    <View style={styles.crimeTitle}>
                        <Image style={styles.crimeIcon} src="https://cdn-icons-png.flaticon.com/512/7447/7447582.png" />
                        <Text style={styles.crimeText}>Crime</Text>
                        <View style={[styles.separator, {flex: 1}]}></View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.chartHeading}>Burglary</Text>
                        <View style={styles.chart}>
                            <Image style={styles.chartImage} src={imageData} />
                        </View>
                    </View>
                </View>

                <View wrap={false}>
                    <View style={styles.separator}></View>
                    <View style={styles.crimeTitle}>
                        <Image style={styles.crimeIcon} src="https://cdn-icons-png.flaticon.com/512/7447/7447582.png" />
                        <Text style={styles.crimeText}>Crime</Text>
                        <View style={[styles.separator, {flex: 1}]}></View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.chartHeading}>Burglary</Text>
                        <View style={styles.chart}>
                            <Image style={styles.chartImage} src={imageData} />
                        </View>
                    </View>
                </View> */}

                {/* End  multiple page pdf code */}

                {/* Page Footer */}
                <View fixed style={styles.footer}>
                    <View style={[styles.separator, {marginBottom: 5}]}></View>
                    <View style={styles.footerContent}>
                        <Text style={styles.footerLeft}>Report Generated on  {moment().format('MMMM D, YYYY')}</Text>
                        <Text 
                            render={({ pageNumber, totalPages }) => (
                                `RealAssist Property Report | Page ${pageNumber} of ${totalPages}`
                            )}
                        />
                    </View>
                </View>

            </Page>
        </Document>
    )
}

export default PDFRenderer;

