const fetch = require('node-fetch');
const http = require('https');
const hana = require('@sap/hana-client');
const conn = hana.createConnection();

var conn_params = {
    serverNode  : 'zeus.hana.prod.eu-central-1.whitney.dbaas.ondemand.com:23803',
    uid         : '2542D259EA0A4233AF3A5530751A6B16_6VEI0A6A97TI6XXNJG44DV595_RT',
    pwd         : 'Ce2zMOK2nuR-_sf1Mv_E_PdygT9wuASfdL4HJTdp.ise.YboeXjnYaGxo8h._aHjl8n-eVUH21M.xOmfDoSLF.BOcouZ2gwq25L-2.vr9tKvS8I1ksNEpf--kw1ZK-8P',
    encrypt     :    'true',
    sslValidateCertificate:'false',
};

const schema = '2542D259EA0A4233AF3A5530751A6B16';
const database = 'dataiot';

const tentantID = '2';
const capabilityID = '13d092ef-345f-48a4-90f8-1743bd8f22f2'
const url = `https://ibmprod.eu10.cp.iot.sap/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;

const host=`ibmprod.eu10.cp.iot.sap`;
const path = `/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;
console.log(url);

global.revData =[];

function urlfetch() { fetch(url,{
        connection : "keep-alive",
        headers:{
            "Content-Type": "application/json",
            'Authorization':'Basic Y21laGVyOkluaXQxMjM0'
    }}).then(res=>res.json())
         .then(data =>{
                revData=data;
               // module.exports = data;
                console.log(revData);
                
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
    // var flag=true;
    // while(flag){
    //     console.log('flag value::'+flag);
    //     urlfetch();
    // flag=false;
    // }

    // if(flag==false){
    //     console.log(revData);
        
    // }
    // if(revData.data.length > 0){
    // module.exports = revData.data;
    // }

       setInterval(urlfetch, 5000);  //
        module.exports = revData;
     //  setInterval(timestamp,5000);
       
    //  while(revData.length === 0){
    //     console.log(revData);
    //     setInterval(urlfetch,5000);

    //  }
  //  setTimeout(()=>{
        

    //     if(flag == false){
    //      conn.connect(conn_params, function(err) {
    //     if (err) throw err;
    
    //     console.log('Connected to HANA DB.....');
    //     let temp,humid,Moisture;
    //     //  revData.map(item=>{
    //         for(let i=0;i<2;i++){
    //         // temp = item.measure.temp;
    //         // humid = item.measure.humid;
    //         // Moisture = item.measure.Moisture;
    //         temp = i;
    //         humid = i;
    //         Moisture = i;
    //         console.log(`temp->${temp},humid->${humid},Moist->${Moisture}`);
    //       //  var insertQuery = `insert into 2542D259EA0A4233AF3A5530751A6B16.dataiot values(${temp},${humid},${Moisture})` ;
    //           var query = `insert into 2542D259EA0A4233AF3A5530751A6B16.dataiot values(34,56,34)`;
    //       conn.exec(query ,(err,res)=>{
    //             if(err) console.log(err);
    //     });
    //     console.log(`inserted ${revData.length} row`);
    //     conn.disconnect();
      
    //    };
        // console.log(item);
        
        
        // conn.exec(`select * from ${schema}.${database}`, function (err, result) {
        //   if (err) throw err;
        //   console.log(result);
    
        
        // conn.exec('insert into 2542D259EA0A4233AF3A5530751A6B16.dataiot values(32,45,26)', (err,res)=>{
        //      if(err) throw err;
    
            
    
    
        
       

   