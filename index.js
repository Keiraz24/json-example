import data from './rawBooks.json' assert { type: 'json' };
//console.log(data[0]["# Pages"]);

let y=0;
for(let x=0; x<data.length; x++){
    console.log(data[x]["read?"]);
    
    if(data[x]["read?"]==("Yes")){
       y++
    }
    
}
console.log((y/data.length)*100)


for(let x=0; x<data.length; x++){
    if(data[x]["Time on TBR (days)"]=!("N/A")){
        
    }
   
}

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));