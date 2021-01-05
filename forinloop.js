"use strict";

var billgates1 = {shirt:true, shirtColor:'offWhite', smile:true, coshma: true, Sweater:true, SweaterColor:'gray'};

for (let props in billgates1){

    console.log(props);
    console.log(billgates1[props]);
    console.log(props+ ":" + billgates1[props]);
}