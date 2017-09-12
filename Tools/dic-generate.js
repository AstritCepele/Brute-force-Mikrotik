// Generate data to use > data.js
// Generate passwords [100-999]

// Use this tool https://www.textfixer.com/tools/remove-line-breaks.php

let count =100;

while(count<1000){
    console.log("'"+count+"',");
    count++;
}


//Generate users 1 hour [1haaa-1hzzz]

var abcdario = ['a','b','c','d','e','f','g','h','i','j','k','l','n','o','p','q','r','s','t','u','v','w','x','y','z']
let count = 0;
abcdario.forEach((itemone) => {
  abcdario.forEach((itemtwo) => {
    abcdario.forEach((itemtre) => {
      console.log("'h1"+itemone+itemtwo+itemtre+"',")
    })
  })
})