import React, { useState } from "react";
import axios from "axios";
import decrease from "../assets/images/decrease.png";
import increase from "../assets/images/increase.png";
import Marquee from "react-fast-marquee";
import refresh from '../assets/images/refresh.png';
import Charts from "../components/Charts";
import Charts2 from "../components/Charts2";
import Up from "../assets/images/up5.png";
import Down from "../assets/images/down5.png";
import UpArrow from "../assets/images/upArrow.png";

function extractStockPrices(stockData) {
    const stockPrices = []; // [["AAPL", latestPrice, previousClose]]
    Object.entries(stockData).forEach((data) => {
        const symbol = data[0];
        const symbolValue = data[1];
        stockPrices.push([symbol, symbolValue.quote.latestPrice, symbolValue.quote.previousClose]);
    });
    return stockPrices;
  
}

const GetData = () => {
    const [stockData, setStockData] = useState(null);
    const [stockPrices, setStockPrices] = useState(null);
    const symbols = "GME,HMBL,AMC,FRSX,FUNFF,DPLS,OZSC";
    //   const symbol = "aapl";
    //   const stockUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_API_KEY}`;
    const stockMarketUrl = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote&token=${process.env.REACT_APP_API_KEY}`;

     function fetchData() {
        axios.get(stockMarketUrl).then((res) => {
            const data = res.data;
            setStockData(data);
            const pricesAndCloses = extractStockPrices(data);
            setStockPrices(pricesAndCloses);
           
        });
    }

    let GMESymbol = stockPrices ? stockPrices[0][0]  : '';
    let HMBLSymbol = stockPrices ? stockPrices[1][0]  : ''
    let AMCSymbol = stockPrices ? stockPrices[2][0]  : ''
    let FRSXSymbol = stockPrices ? stockPrices[3][0]  : ''
    let FUNFFSymbol = stockPrices ? stockPrices[4][0]  : ''
    let DPLSSymbol = stockPrices ? stockPrices[5][0]  : '';
    let OZSCSymbol = stockPrices ? stockPrices[6][0]  : '';
    
    let GMEPricePre = stockPrices ? stockPrices[0][1]  : '';
    let HMBLPricePre = stockPrices ? stockPrices[1][1]  : '';
    let AMCPricePre = stockPrices ? stockPrices[2][1]  : '';
    let FRSXPricePre = stockPrices ? stockPrices[3][1]  : '';
    let FUNFFPricePre = stockPrices ? stockPrices[4][1]  : '';
    let DPLSPricePre = stockPrices ? stockPrices[5][1]  : '';
    let OZSCPricePre = stockPrices ? stockPrices[6][1]  : '';

    let GMEPrice = stockPrices ? Number(GMEPricePre).toFixed(2) : '';
    let HMBLPrice = stockPrices ? Number(HMBLPricePre).toFixed(2) : ''; 
    let AMCPrice =  stockPrices ? Number(AMCPricePre).toFixed(2) : ''; 
    let FRSXPrice =  stockPrices ? Number(FRSXPricePre).toFixed(2) : '';
    let FUNFFPrice = stockPrices ? Number(FUNFFPricePre).toFixed(2) : ''; 
    let DPLSPrice = stockPrices ? Number(DPLSPricePre).toFixed(2) : '';
    let OZSCPrice = stockPrices ? Number(OZSCPricePre).toFixed(2) : ''; 
    
    let GMEClosePre = stockPrices ? stockPrices[0][2]  : '';
    let HMBLClosePre = stockPrices ? stockPrices[1][2]  : '';
    let AMCClosePre = stockPrices ? stockPrices[2][2]  : '';
    let FRSXClosePre = stockPrices ? stockPrices[3][2]  : '';
    let FUNFFClosePre = stockPrices ? stockPrices[4][2]  : '';
    let DPLSClosePre = stockPrices ? stockPrices[5][2]  : '';
    let OZSCClosePre = stockPrices ? stockPrices[6][2]  : '';

    let GMEClose = Number(GMEClosePre).toFixed(2); 
    let HMBLClose =Number(HMBLClosePre).toFixed(2);
    let AMCClose = Number(AMCClosePre).toFixed(2); 
    let FRSXClose = Number(FUNFFClosePre).toFixed(2);
    let FUNFFClose = Number(FUNFFClosePre).toFixed(2);
    let DPLSClose = Number(DPLSClosePre).toFixed(2);
    let OZSCClose = Number(OZSCClosePre).toFixed(2);
    
    let GMEDdiffPre = GMEPrice - GMEClose;
    let HMBLDdiffPre = HMBLPrice - HMBLClose;
    let AMCDdiffPre = AMCPrice - AMCClose;
    let FRSXDdiffPre = FUNFFPrice - FUNFFClose;
    let FUNFFDdiffPre = FUNFFPrice - FUNFFClose;
    let DPLSDdiffPre = DPLSPrice - DPLSClose;
    let OZSCDdiffPre = OZSCPrice - OZSCClose;
    
    let GMEDdiff = GMEDdiffPre.toFixed(2);
    let HMBLDdiff = HMBLDdiffPre.toFixed(2);
    let AMCDdiff = AMCDdiffPre.toFixed(2); 
    let FRSXDdiff = FUNFFDdiffPre.toFixed(2);
    let FUNFFDdiff = FUNFFDdiffPre.toFixed(2);
    let DPLSDdiff = DPLSDdiffPre.toFixed(2); 
    let OZSCDdiff = OZSCDdiffPre.toFixed(2); 

    let GMEPdiffPre = (GMEDdiff/GMEClose)*100;
    let HMBLPdiffPre = (HMBLDdiff/HMBLClose)*100;
    let AMCPdiffPre = (AMCDdiff/AMCClose)*100;
    let FRSXPdiffPre = (FRSXDdiff/FRSXClose)*100;
    let FUNFFPdiffPre = (FUNFFDdiff/FUNFFClose)*100;
    let DPLSPdiffPre = (DPLSDdiff/DPLSClose)*100;
    let OZSCPdiffPre = (OZSCDdiff/OZSCClose)*100;

    let GMEPdiff =   GMEPdiffPre.toFixed(1);
    let HMBLPdiff = HMBLPdiffPre.toFixed(1); 
    let AMCPdiff = AMCPdiffPre.toFixed(1);
    let FRSXPdiff = FRSXPdiffPre.toFixed(1);
    let FUNFFPdiff = FUNFFPdiffPre.toFixed(1);
    let DPLSPdiff = DPLSPdiffPre.toFixed(1); 
    let OZSCPdiff = OZSCPdiffPre.toFixed(1); 

    let  objPDiff = stockPrices ? [{
        Company: "GME",
        Diff: GMEPdiff
    },{
        Company: "HMBL",
        Diff: HMBLPdiff
    },
      { Company: "AMC",
        Diff: AMCPdiff
    },
      { Company: "FRSX",
        Diff: FRSXPdiff
    },
      { Company: "FUNFF",
        Diff: FUNFFPdiff
    },
      { Company: "DPLS",
        Diff: DPLSPdiff
    },
      { Company: "OZSC",
        Diff: OZSCPdiff
    }] : '';

let GainsLosses =  stockPrices ? objPDiff.sort(function(a,b){ 
    if (a.Diff < b.Diff) return -1; 
    if (a.Diff > b.Diff) return 1;
    return 0;
}) : '';

let Bottom3 = GainsLosses.slice(0,3);

let Top3 = GainsLosses.slice(-3)


// console.log(GainsLosses);

// console.log("Array Test" + Array.isArray(GainsLosses))

    let GMEindicator = GMEPrice > GMEClose ? <img  src={increase} /> : <img src={decrease} />;
    let HMBLindicator = HMBLPrice > HMBLClose ? <img  src={increase} /> : <img src={decrease} />;
    let AMCindicator= AMCPrice > AMCClose ? <img  src={increase} /> : <img src={decrease} />;
    let FRSXindicator= FRSXPrice > FRSXClose ? <img  src={increase} /> : <img src={decrease} />;
    let FUNFFindicator = FUNFFPrice > FUNFFClose ? <img  src={increase} /> : <img src={decrease} />;
    let DPLSindicator = DPLSPrice > DPLSClose ? <img  src={increase} /> : <img src={decrease} />;
    let OZSCindicator = OZSCPrice > OZSCClose ? <img  src={increase} /> : <img src={decrease} />;


    let GMEshares = 420;
    let HMBLshares = 6251;
    let AMCshares = 225;
    let FRSXshares = 1871;
    let FUNFFshares = 10296;
    let DPLSshares = 53525;
    let OZSCshares = 50217;

    let GMEavg = 54.17;
    let HMBLavg = 1.80;
    let AMCavg = 55.05;
    let FRSXavg = 8.75;
    let FUNFFavg = 0.55;
    let DPLSavg = 0.06;
    let OZSCavg = 0.22;

    let GMEcost = GMEshares * GMEavg;
    let HMBLcost = HMBLshares * HMBLavg;
    let AMCcost = AMCshares * AMCavg;
    let FRSXcost = FRSXshares * FRSXavg;
    let FUNFFcost = FUNFFshares * FUNFFavg;
    let DPLScost = DPLSshares * DPLSavg;
    let OZSCcost = OZSCshares * OZSCavg;
    let SumCost = GMEcost + HMBLcost +  AMCcost +  FRSXcost + DPLScost + OZSCcost 

    let GMECurVal = GMEPrice * GMEshares;
    let HMBLCurVal = HMBLPrice * HMBLshares;
    let AMCCurVal = AMCPrice * AMCshares;
    let FRSXCurVal = FRSXPrice * FRSXshares;
    let FUNFFCurVal = FUNFFPrice * FUNFFshares;
    let DPLSCurVal = DPLSPrice * DPLSshares;
    let OZSCCurVal = OZSCPrice * OZSCshares;
    let SumCurValPre= GMECurVal+HMBLCurVal+AMCCurVal+FRSXCurVal+FUNFFCurVal+DPLSCurVal+OZSCCurVal;
    let SumCurVal = SumCurValPre.toFixed(2);
    let SumCurValCom = Number(SumCurVal).toLocaleString();

       let GMECurProfit = GMECurVal - GMEcost;
       let HMBLCurProfit = HMBLCurVal - HMBLcost;
       let AMCCurProfit = AMCCurVal - AMCcost;
       let FRSXCurProfit = FRSXCurVal - FRSXcost;
       let FUNFFCurProfit = FUNFFCurVal - FUNFFcost;
       let DPLSCurProfit = DPLSCurVal - DPLScost;
       let OZSCCurProfit = OZSCCurVal - OZSCcost;

       let NumComp = stockPrices ? stockPrices.length : '';


    return (
        <div className ="getData-cntr">
        <div className ="marquee-container"> 
<Marquee className="marquee" speed="40" gradientWidth="75px">
<div className="marq-item"><p className ="ticker-symbol">{GMESymbol}</p> <p>${GMEPrice}</p> <p>{GMEPdiff}%</p> <p>{GMEindicator}</p></div>
<div  className="marq-item"><p  className ="ticker-symbol">{HMBLSymbol}</p> <p>${HMBLPrice}</p> <p>{HMBLPdiff}%</p> <p>{HMBLindicator}</p></div>
<div  className="marq-item"><p  className ="ticker-symbol">{AMCSymbol}</p> <p>${AMCPrice}</p> <p>{AMCPdiff}%</p> <p>{AMCindicator}</p></div>
<div  className="marq-item"><p  className ="ticker-symbol">{FRSXSymbol}</p> <p>${FRSXPrice}</p> <p>{FRSXPdiff}%</p> <p>{FRSXindicator}</p></div>
<div  className="marq-item"><p  className ="ticker-symbol">{FUNFFSymbol}</p> <p>${FUNFFPrice}</p> <p>{FUNFFPdiff}%</p> <p>{FUNFFindicator}</p></div>
<div  className="marq-item"><p  className ="ticker-symbol">{DPLSSymbol}</p> <p>${DPLSPrice}</p> <p>{DPLSPdiff}%</p> <p>{DPLSindicator}</p></div>
<div  className="marq-item"><p  className ="ticker-symbol">{OZSCSymbol}</p> <p>${OZSCPrice}</p> <p>{OZSCPdiff}%</p> <p>{OZSCindicator}</p></div>
</Marquee>
</div>
<div className="refresh-btn-cntr">
<button className="refresh-btn" onClick={fetchData}> <img src={refresh} />REFRESH REAL TIME DATA</button>
</div>

        <div className="summary container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="summary-cntr toCenter"><p>Portfolio Value:</p> <p className="sumVal">${SumCurValCom}</p><img src={UpArrow} className="upArrow"/>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="summary-cntr toCenter"><p className="owned">Companies Owned:</p><p>{NumComp}</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="summary-cntr Top3"><div className="status-hdr"><p className="status-text">Top Gainers:</p><img src={Up } className="myIcons"/></div>
                {stockPrices ? Top3.map(function (d, idx) { return (<li style={{padding: '0.2rem', listStyle: "none", color: "green",fontWeight:"900"}} 
                key={idx}>{d.Company} {d.Diff}%</li>) }) : ''}
              </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="summary-cntr Bottom3"><div className="status-hdr"><p className="status-text"> Top Losers:</p><img src={Down} className="myIcons"/></div>
                {stockPrices ? Bottom3.map(function (d, idx) {
                  return (<li style={{padding: '0.2rem', listStyle: "none", color:"red", fontWeight:"900"}} key={idx}>{d.Company} {d.Diff}%</li>)
                }) : ''}
                </div>
                </div>
            </div>

            <div className="row ">
              <div className = "summary-cntr2 col-lg-6 chart1">
              <p className="toCenter">Invested %</p>
             {stockPrices ?  <Charts SumCost = {SumCost}  SumCurVal = {SumCurVal}  GMEcost = {GMEcost} HMBLcost = {HMBLcost} AMCcost = {AMCcost} FRSXcost= {FRSXcost} FUNFFcost= {FUNFFcost} DPLScost= {DPLScost} OZSCcost = {OZSCcost} stockPrices = {stockPrices} 
                GMECurVal =  {GMECurVal} HMBLCurVal =  {HMBLCurVal} AMCCurVal =   {AMCCurVal} FRSXCurVal =  {FRSXCurVal} FUNFFCurVa =  {FUNFFCurVal} DPLSCurVal =  {DPLSCurVal} OZSCCurVal =  {OZSCCurVal} />  : ''}
           </div>
           <div className = " summary-cntr2 col-lg-6 chart2">
           <p className="toCenter">Profit %</p>
           {stockPrices ? <Charts2 SumCost = {SumCost}  SumCurVal = {SumCurVal}  GMEcost = {GMEcost} HMBLcost = {HMBLcost} AMCcost = {AMCcost} FRSXcost= {FRSXcost} FUNFFcost= {FUNFFcost} DPLScost= {DPLScost} OZSCcost = {OZSCcost} stockPrices = {stockPrices} 
                GMECurVal =  {GMECurVal} HMBLCurVal =  {HMBLCurVal} AMCCurVal =   {AMCCurVal} FRSXCurVal =  {FRSXCurVal} FUNFFCurVa =  {FUNFFCurVal} DPLSCurVal =  {DPLSCurVal} OZSCCurVal =  {OZSCCurVal}/> : '' }
          </div>
            </div>
            </div>
            </div>
    )
}

export default GetData;