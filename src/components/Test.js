import React from "react";

const Test = () => {

    let  objPDiff =  [{
        Company: "GME",
        Diff: 5
    },{
        Company: "HMBL",
        Diff: 4
    },
      { Company: "AMC",
        Diff: 3
    },
      { Company: "FRSX",
        Diff: 2
    },
      { Company: "FUNFF",
        Diff: 1
    },
      { Company: "DPLS",
        Diff: 0
    },
      { Company: "OZSC",
        Diff: -1
    }] 

    let GainsLosses =  objPDiff.sort(function(a,b){ 
        if (a.Diff < b.Diff) return -1; 
        if (a.Diff > b.Diff) return 1;
        return 0;
    }) 
console.log(GainsLosses);
    let Top3 = GainsLosses.slice(0,3);
    console.log(Top3);
    let Bottom3 = GainsLosses.slice(-3)
    console.log(Bottom3);

    return(
<div>
      
          {Bottom3.map(function(d, idx){
            return (<li key={idx}>{d.Company}{d.Diff}</li>)
          })}
          </div>
    )

}
export default Test;