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


const numberofbooks =new Array;
const genres= new Array; 
var index =0;
for(let x=0; x<data.length; x++){
    if(genres.includes(data[x]["category"])){
        index=genres.indexOf(data[x]["category"])
         numberofbooks[index]++;
         //to add to the same array slot at the same index
    }else{
        genres.push(data[x]["category"])
        numberofbooks.push(1);
    }
}
const index2= numberofbooks.indexOf(Math.max(...numberofbooks));
const answer= genres[index2];

console.log(answer);


const amountofbooks =new Array;
const authors = new Array;
var index3 =0;
for(let x=0; x<data.length; x++){
    if(authors.includes(data[x]["author"])){
        index3=authors.indexOf(data[x]["author"])
        amountofbooks[index3]++;
    }else{
        authors.push(data[x]["author"]);
        amountofbooks.push(1);
    }
}

const index4 = amountofbooks.indexOf(Math.max(...amountofbooks));
const solution= authors[index4];
console.log(solution)


//percent of books in milton, sorry ik this is a bit boring but i am so ded 
let z=0;
for(let x=0; x<data.length; x++){
    //console.log(data[x]["read?"]);
    
    if(data[x]["Milton"]==("Yes")){
       k++
    }
    
}
console.log((k/data.length)*100)
// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));