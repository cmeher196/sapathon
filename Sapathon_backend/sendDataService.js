//this service runs to fetch data from IoT Leonardo Service cockpit
//of Tentant Id:2 , User: cmeher.
//Then fetched data from cockpit is being inserted table of HanaDB
//HanaDB details:
//Schema name:2542D259EA0A4233AF3A5530751A6B16
//table name: DATAIOT
//columns: temp,humid,moist
//this db is deployed on SCP as HDI container.


const hana = require('@sap/hana-client'); // set up connection with sap hana client
const conn = hana.createConnection(); 
const fetch = require('node-fetch');
const http = require('https');

const tentantID = '2'; // tenant id of tenant--> IoT Leonardo services
const capabilityID = '13d092ef-345f-48a4-90f8-1743bd8f22f2'; //capability id of tenant--> IoT Leonardo services 
const url = `https://ibmprod.eu10.cp.iot.sap/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;

// const host=`ibmprod.eu10.cp.iot.sap`;
// const path = `/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;
// console.log(url);


//creating conn objects with SCP service credentials
var conn_params = {
    serverNode  : 'zeus.hana.prod.eu-central-1.whitney.dbaas.ondemand.com:23803',
    uid         : '2542D259EA0A4233AF3A5530751A6B16_6VEI0A6A97TI6XXNJG44DV595_RT',
    pwd         : 'Ce2zMOK2nuR-_sf1Mv_E_PdygT9wuASfdL4HJTdp.ise.YboeXjnYaGxo8h._aHjl8n-eVUH21M.xOmfDoSLF.BOcouZ2gwq25L-2.vr9tKvS8I1ksNEpf--kw1ZK-8P',
    encrypt     : 'true',
    sslValidateCertificate:'false',
};

const schema = '2542D259EA0A4233AF3A5530751A6B16'; //schema name from Hana DB
const table = 'dataiot'; // table name from Hana DB

global.revData =[];

function urlfetch() { fetch(url,{ //fetching the API to get response's body---> provided by IoT Service cockpit 
        connection : "keep-alive",
        headers:{
            "Content-Type": "application/json",
            'Authorization':'Basic Y21laGVyOkluaXQxMjM0'
    }}).then(res=>res.json())
         .then(data =>{
                revData=data; // storing the res data into an global array
               // console.log(revData);
        });
    }

function insert(){ // insert query --> to insert data (temp,humid,soil moisture) from  
        revData.map(item => {
            //console.log(item.measure);
            let temp = item.measure.temp;
            let humid = item.measure.humid;
            let moisture = item.measure.Moisture;
            console.log(`temp:${temp},humid:${humid},moisture:${moisture}`);
            var sql =`insert into ${schema}.${table} values (${temp},${humid},${moisture})`; //inserting data into columns of Table DATAIOT of Hana DB
            conn.exec(sql);
        })
       console.log(`rows ${revData.length} inserted!!'`);
    };    

function connHanaDB(){     //setup connection with Hana db to insert
  conn.connect(conn_params, function(err) {
    if (err) throw err;
    console.log('Connected to HANA DB.....');
    insert();
    conn.disconnect();
    });
 };

    setTimeout(urlfetch,5000); //calling fetch method.
    setTimeout(connHanaDB,5000); //calling conn method.
      