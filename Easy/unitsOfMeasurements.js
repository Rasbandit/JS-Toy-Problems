// Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

// input: "12px"
// output: {val: 12, units: "px"}

function units(str) {
  console.log(str)
  let seperate = str.match(/[a-zA-Z]+|[0-9]+/g)
  console.log(seperate)
  return {val: parseInt(seperate[0]), units: seperate[1]}
}
units('12px')



function sepNum(num){
var numb=[];
 var meas=[];
 for(var i=0; i<num.length; i++){
   if(num[i] == Number(num[i])){
     numb.push(num[i]);
   }
   else{
     meas.push(num[i])
   }
 }
 return { val: numb.join(''), units: meas.join('')}
}

sepNum('12px')
