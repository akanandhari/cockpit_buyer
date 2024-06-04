import { supplierInfo, trunover,performance, srq } from "../suplierInfoModel";


let supplierNameList=[
    "Bosch",
    "Denso",
    "Continental AG",
    "ZF Friedrichshafen",
    "Magna",
    "Hyundai Mobis",
    "Aisin",
    "Michelin",
    "Bridgestone",
    "CATL",
    "Cummins",
    "Weichai Power",
    "Valeo",
    "Lear",
    "Tenneco",
    "Yanfeng Automotive Interiors",
    "Faurecia",
    "Goodyear",
    "Aptiv",
    "Sumitomo Electric"
  ];
const generateDummyData = (count:number) => {
    const dummyData = [];

    for (let i = 0; i < count; i++) {
        const osupplierInfo:supplierInfo = new supplierInfo();
        osupplierInfo.SupplierGroupName = supplierNameList[i];
        let otrunover = new trunover();
        otrunover.purchased=Math.floor(Math.random() * 10000000);
        osupplierInfo.trunover = [otrunover];
        let oPerformance=new performance();
        oPerformance.impact=Math.floor(Math.random() * 10000);
        osupplierInfo.performance = [oPerformance];
        osupplierInfo.srq = new srq();
        osupplierInfo.srq.q = Math.floor(Math.random() * 10000);
        osupplierInfo.srq.d = Math.floor(Math.random() * 500);

        dummyData.push(osupplierInfo);
    }

    return dummyData;
}

const supplierList = generateDummyData(20);
export default  supplierList;