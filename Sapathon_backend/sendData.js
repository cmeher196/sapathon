const hana = require('@sap/hana-client');
const conn = hana.createConnection();
const fetch = require('node-fetch');
const http = require('https');

const tentantID = '2';
const capabilityID = '13d092ef-345f-48a4-90f8-1743bd8f22f2'
const url = `https://ibmprod.eu10.cp.iot.sap/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;

const host=`ibmprod.eu10.cp.iot.sap`;
const path = `/iot/processing/api/v1/tenant/${tentantID}/measures/capabilities/${capabilityID}`;
console.log(url);


var conn_params = {
    serverNode  : 'zeus.hana.prod.eu-central-1.whitney.dbaas.ondemand.com:23803',
    uid         : '2542D259EA0A4233AF3A5530751A6B16_6VEI0A6A97TI6XXNJG44DV595_RT',
    pwd         : 'Ce2zMOK2nuR-_sf1Mv_E_PdygT9wuASfdL4HJTdp.ise.YboeXjnYaGxo8h._aHjl8n-eVUH21M.xOmfDoSLF.BOcouZ2gwq25L-2.vr9tKvS8I1ksNEpf--kw1ZK-8P',
    encrypt     :    'true',
    sslValidateCertificate:'false',
};

const schema = '2542D259EA0A4233AF3A5530751A6B16';
const table = 'dataiot';

global.revData =[];

function urlfetch() { fetch(url,{
        connection : "keep-alive",
        headers:{
            "Content-Type": "application/json",
            'Authorization':'Basic Y21laGVyOkluaXQxMjM0'
    }}).then(res=>res.json())
         .then(data =>{
                revData=data;
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
            var sql =`insert into ${schema}.${table} values (${temp},${humid},${moisture})`;
            conn.exec(sql);
        })
    // for (let i=0; i<data.length; i++){
    //      var sql =`insert into ${schema}.${table} values (${data[i][0]},${data[i][1]},${data[i][2]})`;
    //      conn.exec(sql);
    //     }
       console.log(`rows ${revData.length} inserted!!'`);
    };    

// var data = [[34,45,56],[45,56,67],[56,45,43]];


function connHanaDB(){
  conn.connect(conn_params, function(err) {
    if (err) throw err;
    console.log('Connected to HANA DB.....');
    insert();
    conn.disconnect();
    });
 };

    setTimeout(urlfetch,5000);
    setTimeout(connHanaDB,5000);
    