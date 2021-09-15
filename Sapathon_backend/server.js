const express = require('express');
const fetch = require('node-fetch');
const http = require('https');
const app = express();

const PORT = process.env.PORT || 3000;

const tentantID = '2';
const capabilityID = '13d092ef-345f-48a4-90f8-1743bd8f22f2'
const url = `https://ibmprod.eu10.cp.iot.sap/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;

const host=`ibmprod.eu10.cp.iot.sap`;
const path = `/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;
console.log(url);
//console.log(fetch(url));


 global.revData =[];
function urlfetch() { fetch(url,{
        connection : "keep-alive",
        headers:{
            "Content-Type": "application/json",
            'Authorization':'Basic Y21laGVyOkluaXQxMjM0'
    }}).then(res=>res.json())
         .then(data =>{
         //    console.log('i am global data'+revData);
          //  let sensedData = data;
                revData=data;
           //  console.log(sensedData);
          //   console.log('i m inside function:::'+revData);
             
          //   revData=sensedData;
           //  console.log(revData);
             
        //   let count =sensorData.length;
         //  console.log(`Data count:${count}`);
           
        //    sensorData.map(item=>{
        //        let temp = item.measure.temp;
        //        let humid = item.measure.humid;
        //        let moist = item.measure.Moisture;
        //        console.log(`Temp:${temp},Humidity:${humid},Soil Moisture:${moist}`);
        //    console.log(`timestamp----${item.timestamp}`);
        //    console.log(item);
            
        //    });
        });
    }

       function timestamp () {
            revData.map(item=>{
                console.log(item.measure);
            });
        };
    
       setInterval(urlfetch, 5000); 
        // while(true){
        //     console.log('inside loop');
        //     console.log(time);
        // }  
        setInterval(timestamp,5000);
        
        
       
       
    //    while(true){
    //     console.log('after long time......');
    //     console.log(revData);
    //    }
    //    if(true){
    //        console.log('i m inside if');
           
    //       console. log(revData[0].measure);
    //    }

    //   console.log('I got changed in function'+revData);
       
// function sleep() {
//     return new Promise((resolve, rejects) => {
//         setInterval(() => {
//             console.log("hghg");
//             resolve(true);
//         }, 2000);
        
//     })
// }
// while(true) {
    // console.log();
    // sleep().then(async res => {
    //     console.log(res)
    //   await sleep();
    // })
    

// }
    // .then(data =>data.push(arr));

    //console.log(arr);
    
    // app.listen(process.env.PORT || 3000);
    // console.log('listening at 3000!!');
    
    
    


// let base64 = require('base-64');

// // const headers = http.headers
// const user = 'cmeher';
// const password = 'Init1234';
// headers.set();
// const headers = {
//     user:user,
//     password:password
// }

// var options ={
//     host:host,
//     port:443,
//     path:path,
//     method:'GET',
//     headers:{
//        'Authorization': 'Basic ' + base64.encode(user + ":" + password),
//        'Content-Type' : 'application/json' 
//     }
// };

// http.request(options, (res)=>{
//     res.on('data',(data)=>{
//         let text = data.toString('ascii');
//         console.log(text);
//     })
// })




// const req = http.get(url);
// req.setHeader('Authorization', 'Basic ' + btoa(user + ":" + password));
    
//     req.then((res) => {
//      return res.json()})
//      .then((json)=>{
//          console.log("err msg:"+json);
         
//      });


   //console.log('hel');
   