import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import GetData from '../helpers/GetData';


ChartJS.register(ArcElement, Tooltip, Legend);



const Charts = (props) =>{
   
    const {SumCost,GMEcost,HMBLcost,AMCcost,FRSXcost,FUNFFcost,DPLScost,OZSCcost, GMECurVal,HMBLCurVal,AMCCurVal,FRSXCurVal,FUNFFCurVal,DPLSCurVal,OZSCCurVal, SumCurVal} = props

let GMEcostPer = (GMEcost/SumCost) * 100;
let HMBLostPer = (HMBLcost/SumCost) * 100;
let AMCcostPer = (AMCcost/SumCost) * 100;
let FRSXcostPer = (FRSXcost/SumCost) * 100;
let FUNFFcostPer = (FUNFFcost/SumCost) * 100;
let DPLScostPer = (DPLScost/SumCost) * 100;
let OZSCcostPer = (OZSCcost/SumCost) * 100;

let GMEprofitPer = (GMECurVal/SumCurVal) * 100;
let HMBLprofitPer = (HMBLCurVal/SumCurVal) * 100;
let AMCprofitPer = (AMCCurVal/SumCurVal) * 100;
let FRSXprofitPer = (FRSXCurVal/SumCurVal) * 100;
let FUNFFprofitPer = (FUNFFCurVal/SumCurVal) * 100;
let DPLSprofitPer = (DPLSCurVal/SumCurVal) * 100;
let OZSCprofitPer = (OZSCCurVal/SumCurVal) * 100;


 const  data = {
    labels: ['GME', 'HMBL', 'AMC', 'FRSX', 'FUNFF', 'DPLS','OZSC'],
    datasets: [
      {
        label: '% Invested',
        data: [ GMEcostPer, HMBLostPer, AMCprofitPer, FRSXcostPer, FUNFFcostPer, DPLScostPer,OZSCprofitPer],
        backgroundColor: [
          'green',
          'blue',
          'red',
          'orange',
          'yellow',
          'gray',
          'purple'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }; 

  






return(

    <div>
 <Pie data={data} />

    </div>
)

} 
export default Charts;