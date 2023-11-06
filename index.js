import data from './rawBooks.json' assert { type: 'json' };
//console.log(data[0]["# Pages"]);

let y=0;
for(let x=0; x<data.length; x++){
    //console.log(data[x]["read?"]);
    
    if(data[x]["read?"]==("Yes")){
       y++
    }
    
}
console.log((y/data.length)*100)

let i=0;
let j=0;
for(let x=0; x<data.length; x++){
    if(data[x]["Time on TBR (days)"] !="N/A" && data[x]["Date Bought"].length>0 && data[x]["Date Read"].length>0){
        i+=data[x]["Time on TBR (days)"];
        j++;
    }
   
}
let k= Math.floor(i/j);
console.log(k);

let a=0;
const numberofbooks =new Array;
for(let x=0; x<data.length; x++){
    
}

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));